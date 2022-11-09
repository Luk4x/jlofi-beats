import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    border: none;
    outline: none;
    text-decoration: none;
    list-style-type: none;
    font-family: 'Open Sans', sans-serif;
  }

  :root {
    font-synthesis: none;
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    -webkit-text-size-adjust: 100%;
  }

  html {
    display: flex;
    flex-direction: column;
    min-height: 100%;
  }

  body {
    display: flex;
    flex: 1;
  }

  #__next {
    display: flex;
    flex: 1;
  }
  
  button,
  a {
    opacity: 1;
    transition: .3s;
    &:hover,
    &:focus {
      opacity: .5;
    }
  }
`;
