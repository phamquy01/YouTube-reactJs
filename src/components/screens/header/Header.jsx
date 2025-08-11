import React, { useState } from 'react';
import { BsList, BsKeyboardFill } from 'react-icons/bs';
import { FaMicrophone } from 'react-icons/fa';
import { IoIosSearch, IoMdNotifications } from 'react-icons/io';
import AppsSharpIcon from '@mui/icons-material/AppsSharp';
import MoreVertSharpIcon from '@mui/icons-material/MoreVertSharp';
import VideoCallIcon from '@mui/icons-material/VideoCall';
import Tooltip from '@mui/material/Tooltip';
import logo from '../../../assets/image/logo.png';
import avatar from '../../../assets/image/avatar.jpg';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { searchVideoAction } from '../../../store/searchSlice';
import { useNavigate } from 'react-router-dom';

function Header({ handleMinizeSidebar }) {
  const [valueSearch, setValueSearch] = useState('');
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleSearchVideo = (e) => {
    setValueSearch(e.target.value);
  };

  const handleSearchOnKey = (e) => {
    if (e.keyCode === 13) {
      dispatch(searchVideoAction(valueSearch));
      navigate('/result');
    }
  };

  const handleSearch = () => {
    dispatch(searchVideoAction(valueSearch));
  };

  const handleMinize = () => {
    handleMinizeSidebar('minize');
  };

  return (
    <>
      <div className="header">
        <div className="dashboard">
          <BsList
            className="dashboard__guide"
            onClick={() => {
              handleMinize();
            }}
          />
          <Link to="/" className="dashboard__logo">
            <img src={logo} alt="logo" />
            <span>VN</span>
          </Link>
        </div>
        <div className="search">
          <div className="search__block">
            <div className="search__box">
              <input
                placeholder="Tìm kiếm"
                onChange={(e) => {
                  handleSearchVideo(e);
                }}
                onKeyDown={(e) => handleSearchOnKey(e)}
              />
              <div>
                <BsKeyboardFill className="search__icon-key" />
              </div>
            </div>
            <Link to="/result">
              <button
                className="search__button"
                onClick={() => {
                  handleSearch();
                }}>
                <IoIosSearch className="search__icon" />
              </button>
            </Link>
          </div>
          <Tooltip title="Voice" placement="bottom">
            <div className="search__voice">
              <FaMicrophone className="search__guide" />
            </div>
          </Tooltip>
        </div>
        <div className="extend">
          <Tooltip title="Các ứng dụng Youtube" placement="bottom">
            <AppsSharpIcon className="extend__apps" />
          </Tooltip>
          <Tooltip title="Cài đặt" placement="bottom">
            <MoreVertSharpIcon className="extend__more" />
          </Tooltip>

          <div className="user-menu">
            <div className="user-menu__create">
              <Tooltip title="Tạo video" placement="bottom">
                <VideoCallIcon className="create-icon" />
              </Tooltip>
            </div>

            <div className="user-menu__notifications">
              <Tooltip title="Thông báo" placement="bottom">
                <IoMdNotifications className="notification-icon" />
              </Tooltip>
              <div className="notification-badge">3</div>
            </div>

            <Tooltip title="Tài khoản của bạn" placement="bottom">
              <img
                src={avatar}
                alt="User Avatar"
                className="user-menu__avatar"
              />
            </Tooltip>
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;
