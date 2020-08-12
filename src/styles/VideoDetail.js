import styled from "styled-components";

const VideoDetailStyles = styled.div`
  display: flex;
  flex-direction: column;

  .video {
    border-radius: 0.8rem;
    overflow: hidden;
    display: flex;
    justify-content: stretch;
    min-width: 65vw;

    iframe {
      border: none;
      width: 100%;
      min-height: 30rem;
    }
  }

  .text {
    padding: 1.2rem;
    border-radius: 0.8rem;
    border: 1px solid #333;
    margin-top: 1rem;
    color: #e2e2e2;

    h3 {
      margin: 0 0 1rem;
      font-size: 1.4rem;
      line-height: 2rem;
    }

    p {
      line-height: 1.6rem;
    }
  }
`;

export default VideoDetailStyles;
