import axios from "axios";

const KEY = "AIzaSyAtK4HUSuNrAKUBjYiWPT6V1UM3b2EYgvM";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    type: "video",
    maxResults: 6,
    key: KEY,
  },
});
