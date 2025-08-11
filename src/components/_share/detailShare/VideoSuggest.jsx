import React from 'react';

function VideoSuggest(props) {
  // Format view count
  const formatViewCount = (count) => {
    if (!count) return '0 lượt xem';
    const num = parseInt(count);
    if (num >= 1000000) {
      return `${(num / 1000000).toFixed(1)}M lượt xem`;
    } else if (num >= 1000) {
      return `${(num / 1000).toFixed(1)}K lượt xem`;
    }
    return `${num} lượt xem`;
  };

  // Format published time
  const formatPublishedTime = (publishedAt) => {
    if (!publishedAt) return '';

    const now = new Date();
    const published = new Date(publishedAt);
    const diffTime = Math.abs(now - published);
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

    if (diffDays < 1) return 'hôm nay';
    if (diffDays < 7) return `${diffDays} ngày trước`;
    if (diffDays < 30) return `${Math.floor(diffDays / 7)} tuần trước`;
    if (diffDays < 365) return `${Math.floor(diffDays / 30)} tháng trước`;
    return `${Math.floor(diffDays / 365)} năm trước`;
  };

  // Format duration (if available)
  const formatDuration = (duration) => {
    if (!duration) return '';

    const match = duration.match(/PT(\d+H)?(\d+M)?(\d+S)?/);
    if (!match) return '';

    const hours = (match[1] || '').replace('H', '');
    const minutes = (match[2] || '').replace('M', '');
    const seconds = (match[3] || '').replace('S', '');

    if (hours) {
      return `${hours}:${minutes.padStart(2, '0')}:${seconds.padStart(2, '0')}`;
    }
    return `${minutes || '0'}:${seconds.padStart(2, '0')}`;
  };

  return (
    <div className="video-suggest">
      <div className="video-suggest__thumbnail">
        <img
          className="video-suggest__photo"
          src={props.thumbnail}
          alt={props.title}
        />
        {props.duration && (
          <div className="video-suggest__duration">
            {formatDuration(props.duration)}
          </div>
        )}
      </div>
      <div className="video-suggest__general">
        <div className="video-suggest__title">{props.title}</div>
        <p className="video-suggest__user-name">{props.channelTitle}</p>
        <div className="video-suggest__meta">
          <span className="video-suggest__views">
            {formatViewCount(props.viewCount)}
          </span>
          <span className="video-suggest__dot">•</span>
          <span className="video-suggest__time">
            {formatPublishedTime(props.publishedAt)}
          </span>
        </div>
      </div>
    </div>
  );
}

export default VideoSuggest;
