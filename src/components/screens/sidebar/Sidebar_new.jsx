import React from 'react';
import { AiOutlineSetting, AiOutlineQuestionCircle } from 'react-icons/ai';
import { BsFlag } from 'react-icons/bs';
import { SiFacebooklive } from 'react-icons/si';
import { BiMessageError } from 'react-icons/bi';
import {
  MdHistory,
  MdWatchLater,
  MdPlaylistPlay,
  MdThumbUp,
} from 'react-icons/md';
import Category from '../../_share/category/Category';
import avatar from '../../../assets/image/avatar.jpg';
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import VideoLibraryOutlinedIcon from '@mui/icons-material/VideoLibraryOutlined';
import ShowChartOutlinedIcon from '@mui/icons-material/ShowChartOutlined';
import ExploreOutlinedIcon from '@mui/icons-material/ExploreOutlined';
import SubscriptionsIcon from '@mui/icons-material/Subscriptions';
import MusicNoteRoundedIcon from '@mui/icons-material/MusicNoteRounded';
import EmojiEventsRoundedIcon from '@mui/icons-material/EmojiEventsRounded';
import SportsEsportsRoundedIcon from '@mui/icons-material/SportsEsportsRounded';
import FeedRoundedIcon from '@mui/icons-material/FeedRounded';
import SensorsRoundedIcon from '@mui/icons-material/SensorsRounded';
import VideogameAssetRoundedIcon from '@mui/icons-material/VideogameAssetRounded';

function Sidebar() {
  // Mock data for subscriptions
  const subscriptions = [
    { name: 'React Dev', avatar: avatar, isLive: false },
    { name: 'JavaScript Mastery', avatar: avatar, isLive: true },
    { name: 'Web Dev Simplified', avatar: avatar, isLive: false },
    { name: 'Traversy Media', avatar: avatar, isLive: false },
  ];

  return (
    <div className="sidebar">
      {/* User Profile Section */}
      <div className="sidebar__user-section">
        <div className="user-profile">
          <img
            src={avatar}
            alt="User Avatar"
            className="user-profile__avatar"
          />
          <div className="user-profile__info">
            <div className="user-name">Nguyen Van A</div>
            <div className="user-handle">@nguyenvana</div>
          </div>
        </div>
        <div className="user-stats">
          <div className="stat-item">
            <div className="stat-number">12</div>
            <div className="stat-label">Videos</div>
          </div>
          <div className="stat-item">
            <div className="stat-number">1.2K</div>
            <div className="stat-label">Subscribers</div>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <Category icon={<HomeRoundedIcon />} title="Trang chủ" />
      <Category icon={<ExploreOutlinedIcon />} title="Khám phá" />
      <Category icon={<ShowChartOutlinedIcon />} title="Shorts" />
      <Category icon={<SubscriptionsIcon />} title="Kênh đăng ký" />

      <hr />

      {/* Personal Section */}
      <div className="sidebar__personal">
        <div className="personal-title">Của bạn</div>
        <Category icon={<VideoLibraryOutlinedIcon />} title="Thư viện" />
        <Category icon={<MdHistory />} title="Video đã xem" />
        <Category icon={<MdWatchLater />} title="Xem sau" />
        <Category icon={<MdPlaylistPlay />} title="Danh sách phát" />
        <Category icon={<MdThumbUp />} title="Video đã thích" />
      </div>

      <hr />

      {/* Subscriptions */}
      <p className="sidebar__title">Kênh đăng ký</p>
      <div className="sidebar__subscriptions">
        {subscriptions.map((channel, index) => (
          <div key={index} className="subscription-item">
            <img
              src={channel.avatar}
              alt={channel.name}
              className="subscription-item__avatar"
            />
            <div className="subscription-item__info">
              <div className="channel-name">{channel.name}</div>
            </div>
            {channel.isLive && (
              <div className="subscription-item__live-indicator"></div>
            )}
          </div>
        ))}
      </div>

      <hr />

      {/* Explore */}
      <p className="sidebar__title">Khám phá</p>
      <Category icon={<MusicNoteRoundedIcon />} title="Âm nhạc" />
      <Category icon={<EmojiEventsRoundedIcon />} title="Thể thao" />
      <Category icon={<SportsEsportsRoundedIcon />} title="Trò chơi" />
      <Category icon={<FeedRoundedIcon />} title="Tin tức" />
      <Category icon={<SensorsRoundedIcon />} title="Trực tiếp" />
      <Category icon={<VideogameAssetRoundedIcon />} title="Video 360" />

      <hr />

      {/* YouTube Services */}
      <p className="sidebar__title">Thêm từ YouTube</p>
      <Category icon={<SiFacebooklive />} title="YouTube Premium" />
      <Category icon={<MusicNoteRoundedIcon />} title="YouTube Music" />
      <Category icon={<VideogameAssetRoundedIcon />} title="YouTube Kids" />

      <hr />

      {/* Settings */}
      <Category icon={<AiOutlineSetting />} title="Cài đặt" />
      <Category icon={<BsFlag />} title="Báo cáo lịch sử" />
      <Category icon={<AiOutlineQuestionCircle />} title="Trợ giúp" />
      <Category icon={<BiMessageError />} title="Gửi phản hồi" />

      <hr />

      <p className="sidebar__other">
        Giới thiệu Báo chí Bản quyền Liên hệ với chúng tôi <br />
        Người sáng tạo Quảng cáo Nhà phát triển
      </p>
      <p className="sidebar__other">
        Điều khoản Quyền riêng tư Chính sách và an toàn <br /> Cách YouTube hoạt
        động Thử các tính năng mới
      </p>
      <p className="sidebar__other">© 2022 Google LLC</p>
    </div>
  );
}

export default Sidebar;
