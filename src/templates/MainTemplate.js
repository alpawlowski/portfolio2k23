import React from 'react';
import { ThemeProvider } from "styled-components";
import { theme } from '../assets/styles/theme';
import GlobalStyle from "../assets/styles/GlobalStyle";
import { Container } from '../components/Container/Container';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';

const MainTemplate = ({children}) => (
  <ThemeProvider theme={theme}>
    <GlobalStyle />
    <Header />
      <Container>
        {children}
      </Container>
    <Footer />
  </ThemeProvider>
);

export default MainTemplate;