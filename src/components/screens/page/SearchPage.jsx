import React, { useEffect, useState } from 'react';
import { Button } from '@mui/material';
import { VscSettings } from 'react-icons/vsc';
import Collapse from '@mui/material/Collapse';
import { useSelector } from 'react-redux';
import VideoSearch from '@/components/_share/searchShare/VideoSearch';
import { searchVideo } from '@/services/SearchService';
import VideoChannel from '@/components/_share/searchShare/VideoChannel';
import { Link } from 'react-router-dom';

function SearchPage() {
  const [toggleFilter, setToggleFilter] = useState(false);
  const [listVideoSearch, setListVideoSearch] = useState([]);

  const ListVideoSearch = useSelector((state) => state.search.searchVideoPage);

  useEffect(() => {
    const dataSearch = {
      search: ListVideoSearch,
      number: 20,
      pageToken: '',
    };
    const getVideoSearchPage = async () => {
      try {
        let response = await searchVideo(dataSearch);
        console.log('response', response);
        if (response) {
          dataSearch.pageToken = response.data.nextPageToken;
          setListVideoSearch((prev) => [...prev, ...response.data.items]);
        }
      } catch (err) {
        console.log(err);
      }
    };
    getVideoSearchPage();
    window.addEventListener('scroll', function (e) {
      const top = e.target.documentElement.scrollTop;
      const win = window.innerHeight;
      const height = e.target.documentElement.scrollHeight;
      if (top + win >= height) {
        dataSearch.number += 10;
        getVideoSearchPage();
      }
    });
  }, [ListVideoSearch]);

  const handleToggleFilter = () => {
    setToggleFilter(!toggleFilter);
  };

  return (
    <>
      <div className="search-page">
        <div className="search-page__main">
          <div className="search-page__filter">
            <Button
              className="search-page__icon"
              size="large"
              startIcon={<VscSettings />}
              onClick={handleToggleFilter}
              // onClick={() => {
              //   setToggleFilter(!toggleFilter);
              // }}
            >
              BỘ LỌC
            </Button>
            <Collapse in={toggleFilter} timeout="auto" unmountOnExit>
              <div className="search-page__field">
                <div className="search-page__field__item">
                  <p className="search-page__filed__title">Ngày tải lên</p>
                  <hr />
                  <p className="search-page__option">Giờ cuối cùng</p>
                  <p className="search-page__option">Hôm nay</p>
                  <p className="search-page__option">Tuần này</p>
                  <p className="search-page__option">Tháng này</p>
                  <p className="search-page__option">Năm nay</p>
                </div>
                <div className="search-page__field__item">
                  <p className="search-page__filed__title">Loại hình</p>
                  <hr />
                  <p className="search-page__option">Video </p>
                  <p className="search-page__option">Kênh truyền hình</p>
                  <p className="search-page__option">Danh sách phát</p>
                  <p className="search-page__option">Bộ phim</p>
                </div>
                <div className="search-page__field__item">
                  <p className="search-page__filed__title">Khoảng thời gian</p>
                  <hr />
                  <p className="search-page__option">Dưới 4 phút</p>
                  <p className="search-page__option">4-20 phút</p>
                  <p className="search-page__option">Hơn 20 phút</p>
                </div>
                <div className="search-page__field__item">
                  <p className="search-page__filed__title">Đặc trưng</p>
                  <hr />
                  <p className="search-page__option">Trực tiếp</p>
                  <p className="search-page__option">4K</p>
                  <p className="search-page__option">HD</p>
                  <p className="search-page__option">Phụ đề/CC</p>
                  <p className="search-page__option">Commons sáng tạo</p>
                  <p className="search-page__option">360</p>
                  <p className="search-page__option">VR180</p>
                  <p className="search-page__option">3D</p>
                  <p className="search-page__option">HDR</p>
                  <p className="search-page__option">Địa điểm</p>
                  <p className="search-page__option">Đã mua</p>
                </div>
                <div className="search-page__field__item">
                  <p className="search-page__filed__title">Sắp xếp theo</p>
                  <hr />
                  <p className="search-page__option">Sự liên quan</p>
                  <p className="search-page__option">Ngày Tải lên</p>
                  <p className="search-page__option">Lượng xem</p>
                  <p className="search-page__option">Tháng này</p>
                  <p className="search-page__option">Xếp hạng</p>
                </div>
              </div>
            </Collapse>
          </div>
          <div className="search-page__list-video">
            {listVideoSearch.map((videoSearch, index) =>
              videoSearch.id.kind === 'youtube#channel' ? (
                <VideoChannel
                  key={index}
                  title={videoSearch.snippet.title}
                  thumbnail={videoSearch.snippet.thumbnails.medium.url}
                  channelTitle={videoSearch.snippet.channelTitle}
                  desc={videoSearch.snippet.description}
                />
              ) : (
                <Link
                  to={`/watch/${videoSearch.id.videoId}`}
                  key={index}
                  className="search-page__a">
                  <VideoSearch
                    thumbnail={videoSearch.snippet.thumbnails.medium.url}
                    userImg={videoSearch.snippet.thumbnails.default.url}
                    channelTitle={videoSearch.snippet.channelTitle}
                    title={videoSearch.snippet.title}
                    desc={videoSearch.snippet.description}
                  />
                </Link>
              ),
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default SearchPage;
