import React from 'react';
// import anh1 from '../../../assets/image/hq721.jpg';
// import avt from '../../../assets/image/unnamed (1).jpg';
import MoreVertIcon from '@mui/icons-material/MoreVert';

function VideoHome(props) {
  return (
    <div className="video-home">
      <img className="video-home__photo" src={props.thumbnail} />

      <div className="video-home__general">
        <img src={props.avt} alt="" className="video-home__avt" />
        <div className="video-home__desc">
          <p className="video-home__title">{props.title}</p>
          <p className="video-home__username">{props.username}</p>
          <p className="video-home__view">
            17K view <span>. 3 days ago</span>
          </p>
        </div>
        <div className="video-home__more">
          <MoreVertIcon />
        </div>
      </div>
    </div>
  );
}

export default VideoHome;
