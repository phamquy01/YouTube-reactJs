import React from 'react';

function VideoSuggest(props) {
  return (
    <div className="video-suggest">
      <img className="video-suggest__photo" src={props.thumbnail} />
      <div className="video-suggest__general">
        <div className="video-suggest__title">{props.title}</div>
        <p className="video-suggest__user-name">{props.channelTitle}</p>
        <p className="video-suggest__user-name">
          842 N lượt xem . 4 tháng trước
        </p>
      </div>
    </div>
  );
}

export default VideoSuggest;
