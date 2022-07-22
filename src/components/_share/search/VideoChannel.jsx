import React from 'react';

function VideoChannel(props) {
  return (
    <>
      <div className="video-channel">
        <div className="video-channel__info">
          <div className="video-channel__thumbnail">
            <img className="video-channel__photo" src={props.thumbnail} />
          </div>
          <div className="video-channel__general">
            <div className="video-channel__title">{props.title}</div>
            <p className="video-channel__view">
              307 người đăng kí <span> . 15 Video</span>
            </p>
            <p className="video-channel__desc">{props.desc}</p>
          </div>
        </div>
        <button className="video-channel__subscribe">Đăng kí</button>
      </div>
    </>
  );
}

export default VideoChannel;
