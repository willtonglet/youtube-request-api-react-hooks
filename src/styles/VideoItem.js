import styled from "styled-components";

const VideoItemStyles = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 0.6rem;
  background-color: #333;
  border-radius: 0.6rem;
  margin-bottom: 0.8rem;
  color: #e2e2e2;

  .thumb {
    border-radius: 0.6rem;
    max-height: 5rem;
  }

  .video-title {
    margin-left: 0.8rem;
    font-size: 0.8rem;
  }
`;

export default VideoItemStyles;
