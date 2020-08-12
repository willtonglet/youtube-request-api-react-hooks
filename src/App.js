import React, { useState, useEffect } from "react";

import SearchBar from "./components/SearchBar";
import VideoList from "./components/VideoList";
import VideoDetail from "./components/VideoDetail";

import useVideos from "./hooks/useVideos";

import { AppStyles, GlobalStyles } from "./styles/App";

const App = () => {
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [videos, search] = useVideos("athletico paranaense");

  useEffect(() => {
    setSelectedVideo(videos[0]);
  }, [videos]);

  return (
    <>
      <GlobalStyles />
      <AppStyles>
        <header className="search-area">
          <SearchBar onFormSubmit={search} />
        </header>
        <div className="video-area">
          <VideoDetail video={selectedVideo} />
        </div>
        <aside className="list-area">
          <VideoList
            onVideoSelect={(video) => setSelectedVideo(video)}
            videos={videos}
          />
        </aside>
      </AppStyles>
    </>
  );
};

export default App;
