import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: 'Open Sans', sans-serif;
    background: rgb(250, 250, 250);
    color: rgb(12, 12, 60);
  }

  a {
    text-decoration: none;
  }

  button {
    cursor: pointer;
  }

  ul, ol {
    list-style: none;
  }

  h1, h2, h3, h4, h5, h6, button {
    font-family: 'Poppins', sans-serif;
    font-weight: 700;

    span {
      color: rgb(12, 12, 60);
    }
  }
`;
