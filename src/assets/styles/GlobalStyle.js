import { createGlobalStyle } from 'styled-components';
import { theme } from './theme';

const GlobalStyle = createGlobalStyle`

  *, *::before, *::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
      
  html {
    scroll-behavior: smooth;
  }

  body, * {
    font-family: 'Montserrat', sans-serif;
    scrollbar-color: #4B6CC1 #1b242d;
    scrollbar-width: thin;
  }
      
  body {
    background: radial-gradient(100% 300% at 0% 100%, ${theme.colors.dark} 0%,rgba(239,132,245,0) 100%),radial-gradient(100% 150% at 100% 0%,${theme.colors.darker} 0%,rgba(46,224,154,0) 100%);
    background-color: ${theme.colors.dark};
  }

`;

export default GlobalStyle;