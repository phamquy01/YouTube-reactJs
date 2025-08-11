import axios from 'axios';
import ConstantList from '../config/AppConst';

const API_PATH_LIST_VIDEO =
  ConstantList.API_ENDPOINT + 'search?' + ConstantList.API_KEY;
const API_PATH_LIST_VIEW =
  ConstantList.API_ENDPOINT + 'videos?' + ConstantList.API_KEY;

// Lấy video gợi ý dựa trên từ khóa trong title
export const getVideoSuggest = async (idvideo) => {
  try {
    // Lấy thông tin video hiện tại để có title và channelId
    const videoDetail = await getVideoDetail(idvideo);
    const video = videoDetail.data.items[0];

    if (!video) return { data: { items: [] } };

    const title = video.snippet.title;
    const channelId = video.snippet.channelId;

    // Tạo từ khóa search từ title (lấy 2-3 từ đầu)
    const searchQuery = title.split(' ').slice(0, 3).join(' ');

    // Lấy video liên quan dựa trên từ khóa
    let config = `&part=snippet&maxResults=20&q=${encodeURIComponent(
      searchQuery,
    )}&type=video&order=relevance`;
    const relatedVideos = await axios.get(API_PATH_LIST_VIDEO + config);

    // Lấy thêm video từ cùng channel
    let channelConfig = `&part=snippet&maxResults=10&channelId=${channelId}&type=video&order=date`;
    const channelVideos = await axios.get(API_PATH_LIST_VIDEO + channelConfig);

    // Kết hợp và loại bỏ video hiện tại
    const allVideos = [
      ...relatedVideos.data.items,
      ...channelVideos.data.items,
    ].filter((item) => item.id.videoId !== idvideo);

    // Loại bỏ duplicate dựa trên videoId
    const uniqueVideos = allVideos.filter(
      (video, index, self) =>
        index === self.findIndex((v) => v.id.videoId === video.id.videoId),
    );

    // Lấy thông tin chi tiết (view count, duration) cho top 25 videos
    const topVideos = uniqueVideos.slice(0, 25);
    const videoIds = topVideos.map((v) => v.id.videoId).join(',');

    if (videoIds) {
      // Lấy thông tin đầy đủ cho videos
      let detailConfig = `&part=snippet,statistics,contentDetails&id=${videoIds}`;
      const videoDetails = await axios.get(API_PATH_LIST_VIEW + detailConfig);

      // Merge search results với detailed info
      const enhancedVideos = topVideos.map((searchVideo) => {
        const detailVideo = videoDetails.data.items.find(
          (detail) => detail.id === searchVideo.id.videoId,
        );

        if (detailVideo) {
          return {
            ...searchVideo,
            statistics: detailVideo.statistics,
            contentDetails: detailVideo.contentDetails,
          };
        }
        return searchVideo;
      });

      return {
        data: {
          items: enhancedVideos,
        },
      };
    }

    return {
      data: {
        items: topVideos,
      },
    };
  } catch (error) {
    console.error('Error getting suggested videos:', error);
    // Fallback: lấy video trending
    try {
      let config = `&part=snippet,statistics,contentDetails&chart=mostPopular&maxResults=25`;
      const trending = await axios.get(API_PATH_LIST_VIEW + config);

      // Convert trending format to search format
      const trendingVideos = trending.data.items.map((item) => ({
        id: { videoId: item.id },
        snippet: item.snippet,
        statistics: item.statistics,
        contentDetails: item.contentDetails,
      }));

      return {
        data: {
          items: trendingVideos,
        },
      };
    } catch (fallbackError) {
      console.error('Fallback error:', fallbackError);
      return { data: { items: [] } };
    }
  }
};

export const getVideoDetail = (idvideo) => {
  let config = `&part=snippet&part=statistics&part=contentDetails&part=player&part=topicDetails&id=${idvideo}`;
  return axios.get(API_PATH_LIST_VIEW + config);
};
