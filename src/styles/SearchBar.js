import styled from "styled-components";

const SearchBarStyles = styled.div`
  display: flex;

  form {
    flex: 1;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }

  .input {
    padding: 0 1rem;
    height: 3rem;
    border: 0;
    border-bottom: 3px solid #ddd;
    background: none;
    flex: 1;
  }
`;

export default SearchBarStyles;
