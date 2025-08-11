import React, { useState, useEffect, Fragment } from 'react';
import { Link, useParams } from 'react-router-dom';
import Header from '../header/Header';
// import WatchVideo from '../detail/WatchVideo';
import { getVideoSuggest, getVideoDetail } from '@/services/DetailService';
import avatar from '../../../assets/image/avatar.jpg';
import ThumbUpOutlinedIcon from '@mui/icons-material/ThumbUpOutlined';
import ThumbDownOffAltIcon from '@mui/icons-material/ThumbDownOffAlt';
import { BsFillCheckCircleFill } from 'react-icons/bs';
import { RiShareForwardLine } from 'react-icons/ri';
import { FiMoreHorizontal } from 'react-icons/fi';
import { TbPlaylistAdd } from 'react-icons/tb';
// import { ImHeadphones } from 'react-icons/im';
import Tooltip from '@mui/material/Tooltip';
import VideoSuggest from '@/components/_share/detailShare/VideoSuggest';

export default function Details() {
  const [listPlayList, setListPlayList] = useState([]);
  const [listDesc, setListDesc] = useState([]);
  console.log('listDesc', listDesc);

  console.log('listPlayList', listPlayList);

  const params = useParams();
  let videoID = '';
  videoID = params.id;

  useEffect(() => {
    const getVideoDetailPage = async () => {
      try {
        let res = await getVideoSuggest(videoID);
        if (res) {
          console.log('detail', res.data);
          setListPlayList(res.data.items);
        }
      } catch (err) {
        console.log(err);
      }
    };
    getVideoDetailPage();
  }, [videoID]);
  useEffect(() => {
    const getDescVideo = async () => {
      try {
        let res = await getVideoDetail(videoID);
        if (res) {
          console.log('detailitem', res.data);
          setListDesc(res.data.items);
        }
      } catch (err) {
        console.log(err);
      }
    };
    getDescVideo();
  }, [videoID]);

  return (
    <div>
      <Header />
      <div className="container">
        <div className="container__main">
          <div className="playing-video">
            <iframe
              src={`https://www.youtube.com/embed/${videoID}?autoplay=1`}
              allow="autoplay"
              className="watch"></iframe>
          </div>
          <div className="information">
            <div className="information__content">
              <a className="information__content-trending">
                #17 TRONG DANH MỤC ÂM NHẠC THỊNH HÀNH
              </a>
              <div className="information__title">
                {listDesc[0]?.snippet?.title}
              </div>
              <div className="more">
                <div className="interactions">
                  <div className="interactions__view">
                    {listDesc[0]?.statistics?.viewCount} lượt xem
                  </div>
                  <span className="interactions__dot">•</span>
                  <div className="interactions__time">
                    Đã công chiếu vào {listDesc[0]?.snippet?.publishedAt}
                  </div>
                </div>
                <div className="actions">
                  <Tooltip title="Tôi thích video này">
                    <div className="action">
                      <ThumbUpOutlinedIcon className="action__icon" />
                      <div className="action__name">
                        {listDesc[0]?.statistics?.likeCount}N
                      </div>
                    </div>
                  </Tooltip>
                  <Tooltip title="Tôi không thích video này">
                    <div className="action">
                      <ThumbDownOffAltIcon className="action__icon" />
                      <div className="action__name">KHÔNG THÍCH</div>
                    </div>
                  </Tooltip>
                  <Tooltip title="Chia sẻ">
                    <div className="action">
                      <RiShareForwardLine className="action__icon" />
                      <div className="action__name">CHIA SẺ</div>
                    </div>
                  </Tooltip>
                  <Tooltip title="Lưu">
                    <div className="action">
                      <TbPlaylistAdd className="action__icon" />
                      <div className="action__name">LƯU</div>
                    </div>
                  </Tooltip>
                  <div className="actions__more">
                    <FiMoreHorizontal />
                  </div>
                </div>
              </div>
            </div>
            <div className="information__detail">
              <div className="information__channel">
                <div className="information__channel-avatar">
                  <img src={avatar} alt="" />
                </div>
                <div className="information__about">
                  <div className="information__about-channel">
                    <div className="information__about-name">
                      {listDesc[0]?.snippet?.channelTitle}
                    </div>
                    <div className="information__about-status">
                      <BsFillCheckCircleFill />
                    </div>
                  </div>
                  <div className="information__about-subscriber">
                    {listDesc[0]?.statistics?.commentCount} N người đăng ký
                  </div>
                </div>
                <div className="information__subscribe">
                  <button className="information__subscribe-btn">
                    ĐĂNG KÝ
                  </button>
                </div>
              </div>
              <div className="description">
                <div className="description__detail">
                  <p className="description__detail-name">
                    {listDesc[0]?.snippet?.localized?.title}
                  </p>
                  {/* <div className="description__socials">
                    <ImHeadphones />
                    <span>Spotify:</span>
                    <a href="spotify.com" target="_blank">
                      https://spoti.fi/3aF68f5
                    </a>
                  </div>
                  <div className="description__socials">
                    <ImHeadphones />
                    <span>Apple Music:</span>
                    <a href="spotify.com" target="_blank">
                      https://spoti.fi/3aF68f5
                    </a>
                  </div>
                  <div className="description__socials">
                    <ImHeadphones />
                    <span>ZingMP3:</span>
                    <a href="spotify.com" target="_blank">
                      https://spoti.fi/3aF68f5
                    </a>
                  </div> */}
                  <p className="description__text">
                    {listDesc[0]?.snippet?.localized?.description}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container__suggest">
          {listPlayList.map((items) =>
            items.id.kind === 'youtube#channel' ? (
              <Fragment key={items.id.videoId} />
            ) : (
              <Link
                to={`/watch/${items.id.videoId}`}
                key={items.id.videoId}
                className="detail__a">
                <VideoSuggest
                  thumbnail={items?.snippet?.thumbnails?.medium?.url}
                  title={items?.snippet?.title}
                  channelTitle={items?.snippet?.channelTitle}
                  publishedAt={items?.snippet?.publishedAt}
                  viewCount={items?.statistics?.viewCount}
                  duration={items?.contentDetails?.duration}
                />
              </Link>
            ),
          )}
        </div>
      </div>
    </div>
  );
}
