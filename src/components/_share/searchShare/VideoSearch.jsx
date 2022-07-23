import React from 'react';

function VideoSearch(props) {
  return (
    <div className="video-search">
      <img className="video-search__photo" src={props.thumbnail} />
      <div className="video-search__general">
        <div
          className="video-search__title"
          dangerouslySetInnerHTML={{ __html: props.title }}></div>
        <p className="video-search__view">
          17K views <span> . 15 house ago</span>
        </p>
        <div className="video-search__channel">
          <img className="video-search__user-avt" src={props.userImg} />
          <p className="video-search__user-name">{props.channelTitle}</p>
        </div>
        <p className="video-search__desc">{props.desc}</p>
      </div>
    </div>
  );
}

export default VideoSearch;
