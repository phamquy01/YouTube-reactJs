import React from 'react';
import '../../../assets/scss/screens/_detail.scss';

const WatchVideo = ({ id }) => {
  return (
    <iframe
      src={`https://www.youtube.com/embed/${id}?autoplay=1`}
      allow="autoplay"
      className="watch"></iframe>
  );
};

export default WatchVideo;
