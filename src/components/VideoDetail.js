import React from "react";
import VideoDetailStyles from "../styles/VideoDetail";

const VideoDetail = ({ video }) => {
  if (!video) {
    return <div>Loading...</div>;
  }

  const videoSrc = `https://www.youtube.com/embed/${video.id.videoId}`;

  return (
    <VideoDetailStyles>
      <div className="video">
        <iframe title="Video Player" src={videoSrc} />
      </div>
      <div className="text">
        <h3>{video.snippet.title}</h3>
        <p>{video.snippet.description}</p>
      </div>
    </VideoDetailStyles>
  );
};

export default VideoDetail;
