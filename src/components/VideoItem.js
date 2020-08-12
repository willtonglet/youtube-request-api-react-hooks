import React from "react";
import VideoItemStyles from "../styles/VideoItem";

const VideoItem = ({ video, onVideoSelect }) => {
  return (
    <VideoItemStyles onClick={() => onVideoSelect(video)}>
      <img
        src={video.snippet.thumbnails.medium.url}
        alt={video.snippet.title}
        className="thumb"
      />
      <span className="video-title">{video.snippet.title}</span>
    </VideoItemStyles>
  );
};

export default VideoItem;
