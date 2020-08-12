import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  body {
    background-color: #161616;
    margin: 0;
  }
`;

export const AppStyles = styled.main`
  display: grid;
  grid-template-areas: "search search" "video list";
  grid-column-gap: 2rem;
  grid-row-gap: 2rem;
  padding: 1.2rem;

  * {
    font-family: "Roboto", sans-serif;
    font-size: 1rem;
    color: #fff;
  }

  .search-area {
    grid-area: search;
  }

  .video-area {
    grid-area: video;
  }

  .list-area {
    grid-area: list;
  }
`;
