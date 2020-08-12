import React from "react";
import VideoItem from "./VideoItem";

const VideoList = ({ videos, onVideoSelect }) => {
  const renderedVideos = videos.map((video) => (
    <VideoItem
      key={video.id.videoId}
      onVideoSelect={onVideoSelect}
      video={video}
    />
  ));

  return <div>{renderedVideos}</div>;
};

export default VideoList;
