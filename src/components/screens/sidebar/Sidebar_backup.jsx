/* eslint-disable react/jsx-no-undef */
import React from 'react';
import { AiOutlineSetting, AiOutlineQuestionCircle } from 'react-icons/ai';
import { BsFlag } from 'react-icons/bs';
import { SiFacebooklive } from 'react-icons/si';
import { BiMessageError } from 'react-icons/bi';
import Category from '../../_share/category/Category';
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import VideoLibraryOutlinedIcon from '@mui/icons-material/VideoLibraryOutlined';
import ShowChartOutlinedIcon from '@mui/icons-material/ShowChartOutlined';
import ExploreOutlinedIcon from '@mui/icons-material/ExploreOutlined';
import UpdateRoundedIcon from '@mui/icons-material/UpdateRounded';
import SubscriptionsIcon from '@mui/icons-material/Subscriptions';
import MusicNoteRoundedIcon from '@mui/icons-material/MusicNoteRounded';
import EmojiEventsRoundedIcon from '@mui/icons-material/EmojiEventsRounded';
import SportsEsportsRoundedIcon from '@mui/icons-material/SportsEsportsRounded';
import FeedRoundedIcon from '@mui/icons-material/FeedRounded';
import SensorsRoundedIcon from '@mui/icons-material/SensorsRounded';
import VideogameAssetRoundedIcon from '@mui/icons-material/VideogameAssetRounded';

function Sidebar() {
  return (
    <div className="sidebar">
      <Category icon={<HomeRoundedIcon />} title="Trang chủ" />
      <Category icon={<ExploreOutlinedIcon />} title="Khám phá" />
      <Category icon={<ShowChartOutlinedIcon />} title="Short" />
      <Category icon={<SubscriptionsIcon />} title="Kênh đăng kí" />
      <hr />
      <Category icon={<VideoLibraryOutlinedIcon />} title="Thư viện" />
      <Category icon={<UpdateRoundedIcon />} title="Video đã xem" />
      <hr />
      <p className="sidebar__descLogin">
        Hãy đăng nhập để thích video, bình luận và đăng ký kênh.
      </p>
      <ButtonLogin />
      <hr />
      <p className="sidebar__title">Hay nhất trên youtube</p>
      <Category icon={<MusicNoteRoundedIcon />} title="Âm nhạc" />
      <Category icon={<EmojiEventsRoundedIcon />} title="Thể thao" />
      <Category icon={<SportsEsportsRoundedIcon />} title="Trò chơi" />
      <Category icon={<FeedRoundedIcon />} title="Tin Tức" />
      <Category icon={<SensorsRoundedIcon />} title="Sự kiện trực tiếp" />
      <Category icon={<VideogameAssetRoundedIcon />} title="Video 360" />
      <hr />
      <Category icon={<SensorsRoundedIcon />} title="Xem qua các kênh" />
      <hr />
      <p className="sidebar__title">Dịch vụ khác của youtube</p>
      <Category icon={<SiFacebooklive />} title="Sự kiện trực tiếp" />
      <hr />
      <Category icon={<AiOutlineSetting />} title="Cài đặt" />
      <Category icon={<BsFlag />} title="Lịch sử báo cáo" />
      <Category icon={<AiOutlineQuestionCircle />} title="Trợ giúp" />
      <Category icon={<BiMessageError />} title="Gửi phản hồi" />
      <hr />
      <p className="sidebar__other">
        Giới thiệu Báo chí Bản quyền Liên hệ với chúng tôi <br />
        Người sáng tạo Quảng cáo Nhà phát triển
      </p>
      <p className="sidebar__other">
        Điều khoản Quyền riêng tư Chính sách và an toàn <br /> Cách YouTube hoạt
        động Thử các tính năng mới
      </p>
      <p className="sidebar__other">© 2022 Google LLC</p>
    </div>
  );
}

export default Sidebar;
