import React, { useState, useEffect, Fragment } from 'react';
import { Link, useParams } from 'react-router-dom';
import Header from '../../_share/Header';
import WatchVideo from './WatchVideo';
import { getVideoSuggest } from '@/services/DetailService';
import avatar from '../../../assets/image/avatar.jpg';
import ThumbUpOutlinedIcon from '@mui/icons-material/ThumbUpOutlined';
import ThumbDownOffAltIcon from '@mui/icons-material/ThumbDownOffAlt';
import { BsFillCheckCircleFill } from 'react-icons/bs';
import { RiShareForwardLine } from 'react-icons/ri';
import { FiMoreHorizontal } from 'react-icons/fi';
import { TbPlaylistAdd } from 'react-icons/tb';
import { ImHeadphones } from 'react-icons/im';
import Tooltip from '@mui/material/Tooltip';
import VideoSuggest from '@/components/_share/detail/VideoSuggest';

export default function Details() {
  const [listPlayList, setListPlayList] = useState([]);
  console.log('listPlayList', listPlayList);

  const params = useParams();
  let videoID = '';
  videoID = params.id;

  useEffect(() => {
    const getVideoDetailPage = async () => {
      try {
        let res = await getVideoSuggest(videoID);
        if (res) {
          console.log(res.data);
          setListPlayList(res.data.items);
        }
      } catch (err) {
        console.log(err);
      }
    };
    getVideoDetailPage();
  }, [videoID]);
  return (
    <div>
      <Header />
      <div className="container">
        <div className="container__main">
          <div className="playing-video">
            <WatchVideo id={videoID} />
          </div>
          <div className="information">
            <div className="information__content">
              <a className="information__content-trending">
                #17 TRONG DANH MỤC ÂM NHẠC THỊNH HÀNH
              </a>
              <div className="information__title">
                Shay Nắnggg - AMEE x OBITO x HỨA KIM TUYỀN x SKIN AQUA TONE UP
                UV | Official MV
              </div>
              <div className="more">
                <div className="interactions">
                  <div className="interactions__view">8.275.264 lượt xem</div>
                  <span className="interactions__dot">•</span>
                  <div className="interactions__time">
                    Đã công chiếu vào 6 thg 6, 2022
                  </div>
                </div>
                <div className="actions">
                  <Tooltip title="Tôi thích video này">
                    <div className="action">
                      <ThumbUpOutlinedIcon className="action__icon" />
                      <div className="action__name">53N</div>
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
                      Moah - Nhạc Trung Channel
                    </div>
                    <div className="information__about-status">
                      <BsFillCheckCircleFill />
                    </div>
                  </div>
                  <div className="information__about-subscriber">
                    389 N người đăng ký
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
                    Shay Nắnggg - AMEE x OBITO x HỨA KIM TUYỀN x SKIN AQUA TONE
                    UP UV
                  </p>
                  <div className="description__socials">
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
                  </div>
                  <p className="description__text">
                    Ca khúc đã được nhạc sĩ Quốc Bảo cho phép sử dụng một phần
                    nhạc ca khúc "Hai Mươi" của ca sĩ Mỹ Tâm. Cảm ơn nhạc sĩ
                    Quốc Bảo và ca sĩ Mỹ Tâm đã truyền cảm hứng về một tuổi trẻ
                    tươi đẹp, tích cực và tràn ngập yêu thương. Shay Nắnggg (n)
                    : trạng thái khi gặp ai đó "toả sáng" như Mặt Trời, khiến
                    trái tim mình ấm áp nhưng tâm trí thì "choáng ngợp" - không
                    thể nghĩ gì khác ngoài người ấy. AMEE tin rằng mỗi cơn Shay
                    Nắnggg đều có thể dẫn đến một happy ending nếu chúng mình đủ
                    tự tin để tiến về phía nhau, bằng phiên bản tốt nhất của bản
                    thân. Đừng để nắng ngăn cản mình bước ra ngoài trời, gần gũi
                    tự nhiên, tận hưởng cuộc sống. ☀️🌻✨ Đừng để những nỗi lo
                    sợ ngăn cản mình làm điều mình thích, gần người mình
                    thương.💛💚💙💜❤️ Cảm ơn
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
                  thumbnail={items?.snippet?.thumbnails?.default?.url}
                  title={items?.snippet?.title}
                  channelTitle={items?.snippet?.channelTitle}
                />
              </Link>
            ),
          )}
        </div>
      </div>
    </div>
  );
}
