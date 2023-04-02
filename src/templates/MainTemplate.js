import React from 'react';
import { ThemeProvider } from "styled-components";
import { theme } from '../assets/styles/theme';
import GlobalStyle from "../assets/styles/GlobalStyle";
import { Container } from '../components/Container/Container';
import Footer from '../components/Container/Footer/Footer';

const MainTemplate = ({children}) => (
  <ThemeProvider theme={theme}>
    <GlobalStyle />
      <Container>
        {children}
      </Container>
    <Footer />
  </ThemeProvider>
);

export default MainTemplate;