import React from "react";
import { Link } from "gatsby";
import styled from 'styled-components';
import MainTemplate from "../templates/MainTemplate";
import { MainWrapper } from "../components/MainWrapper/MainWrapper";
import { StyledHeading } from '../components/StyledHeading/StyledHeading';
  
  const StyledParagraph = styled.p`
    color: ${({theme}) => theme.colors.primary_text};
    font-size: 1.3rem;
    width: 60%;
    padding-right: 2rem;

    &::first-letter{
    color: ${({theme}) => theme.colors.color_blue};
    font-weight: bold;
    font-size: 4rem;
    float: left;
    line-height: 60px;
    padding-right: 8px;
    margin-top: 3px;
    }

    @media (min-width: ${({theme}) => theme.media.none}) and (max-width: ${({theme}) => theme.media.landscapePhone}) {
      width: 100%;
    };
  `;

  const StyledLink = styled(Link)`
    color: ${({theme}) => theme.colors.color_blue};
    margin: 0 0.5rem;
  `;

  const StyledHead = styled.h3`
    color: ${({theme}) => theme.colors.color_blue};
    font-size: 2rem;
    margin-top: 2rem;
  `;
  
  const StyledAbout = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: row;
    margin: 3rem 0;
    /* background-color: #333B46; */
    width: 100%;
    padding: 2rem;
  `;

const StyledImage = styled.img`
    & {
      width: 50%;
    }

    @media (min-width: ${({theme}) => theme.media.none}) and (max-width: ${({theme}) => theme.media.landscapePhone}) {
      display: none;
      opacity: 0;
      visibility: hidden;
    };
  `;

const AboutPage = () => {
  return (
    <MainTemplate>
      <title>O mnie | apdev.site</title>
      <MainWrapper>
        <StyledHeading>
          <span>
            O mnie
          </span>
        </StyledHeading>
        <StyledAbout>
          <StyledParagraph>
            Nazywam się Albert Pawłowski, tworzę aplikacje oraz strony internetowe.
            <br /><br />
            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum
            <br /><br />
            <StyledHead>Doświadczenie</StyledHead>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
              <br /><br />
            <StyledHead>Wykształcenie</StyledHead>
            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum
            <br /><br />
            <StyledHead>Współpraca</StyledHead>
            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum
            <br /><br />
            Po więcej informacji, serdecznie zapraszam na luźną rozmowę.
            <StyledLink to="/">Wybór kontaktu &#129122;</StyledLink>
          </StyledParagraph>
          <StyledImage src="./static/Rectangle-46.png" />
        </StyledAbout>
      </MainWrapper>
    </MainTemplate>
  )
}

export default AboutPage;
