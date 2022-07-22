import React, { useState } from 'react';
import { BsList, BsKeyboardFill } from 'react-icons/bs';
import { FaMicrophone } from 'react-icons/fa';
import { IoIosSearch } from 'react-icons/io';
import AppsSharpIcon from '@mui/icons-material/AppsSharp';
import MoreVertSharpIcon from '@mui/icons-material/MoreVertSharp';
import Tooltip from '@mui/material/Tooltip';
import logo from '../../assets/image/logo.png';
// import { searchVideo } from '@/services/SearchService';
import { Link } from 'react-router-dom';
import Login from './home/Login';
import { useDispatch } from 'react-redux';
import { searchVideoAction } from '../../store/searchSlice';
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
          <Link to="/">
            <div className="dashboard__logo">
              <img src={logo} alt="logo" />
              <span>VN</span>
            </div>
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
          <Tooltip title="Voice">
            <div className="search__voice">
              <FaMicrophone className="search__guide" />
            </div>
          </Tooltip>
        </div>
        <div className="extend">
          <Tooltip title="Các ứng dụng Youtube">
            <AppsSharpIcon className="extend__apps" />
          </Tooltip>
          <Tooltip title="Cài đặt">
            <MoreVertSharpIcon className="extend__more" />
          </Tooltip>
          <Login />
        </div>
      </div>
    </>
  );
}

export default Header;
