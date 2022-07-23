import React, { useEffect, useState } from 'react';
import CategoryFilter from '@/components/_share/homeShare/CategoryFilter';
import VideoHome from '@/components/_share/homeShare/VideoHome';
import { Link } from 'react-router-dom';
import { getVideo } from '@/services/HomeService';
import { useSelector } from 'react-redux';

export default function Home() {
  const [listDataYoutube, setListDataYoutube] = useState([]);
  const ListVideoFilter = useSelector((state) => state.home);
  const filters = [
    'Tất cả',
    'Âm nhạc',
    'Danh sách kết hợp',
    'Trực tiếp',
    'Trò chơi',
    'Mẹo làm đẹp',
    'Đọc rap',
    'Nấu ăn',
    'Mới tải lên gần đây',
    'Đã xem',
  ];

  useEffect(() => {
    const dataHome = {
      number: 16,
      pageToken: '',
    };
    const getVideoHomePage = async () => {
      try {
        let res = await getVideo(dataHome);
        if (res) {
          dataHome.pageToken = res.data.nextPageToken;
          setListDataYoutube((prev) => [...prev, ...res.data.items]);
        }
      } catch (err) {
        console.log(err);
      }
    };
    getVideoHomePage();
    const handleScroll = (e) => {
      const top = e.target.documentElement.scrollTop;
      const win = window.innerHeight;
      const height = e.target.documentElement.scrollHeight;
      if (top + win >= height) {
        dataHome.number += 10;
        getVideoHomePage();
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* <Header /> */}
      <div className="home">
        <div className="home__category-filter">
          <div className="home__filter">
            {filters.map((filter, index) => (
              <CategoryFilter key={index} title={filter} />
            ))}
          </div>
        </div>
        <div className="home__video">
          <div className="home__list">
            {(ListVideoFilter.isFilter
              ? ListVideoFilter.filterVideoPage
              : listDataYoutube
            ).map((dataYoutube) => (
              <Link
                to={`/watch/${dataYoutube.id}`}
                className="home__a"
                key={dataYoutube.id}>
                <VideoHome
                  thumbnail={dataYoutube?.snippet?.thumbnails?.medium?.url}
                  avt={dataYoutube?.snippet?.thumbnails?.medium?.url}
                  title={dataYoutube?.snippet?.title}
                  username={dataYoutube?.snippet?.channelTitle}
                />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
