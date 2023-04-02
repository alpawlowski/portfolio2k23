import React, { useState } from "react";
import styled from "styled-components";
import MainTemplate from "../templates/MainTemplate";
import BackgroundAnimation from '../components/BackgroundAnimation/BackgroundAnimation'
import { Link } from 'gatsby';

const StyledHeading = styled.h1`
  font-size: 64px;
  line-height: 1.132em;
  font-weight: 700;
  width: 70%;
  margin: 4rem 0 3rem;
  background: rgba(0, 0, 0, 0) linear-gradient(90deg, rgb(75, 108, 193) 0%, rgb(200, 200, 200) 100%) 0% 0% padding-box;
  -webkit-text-fill-color: transparent;
  -webkit-background-clip: text;
  color: transparent;

  @media (min-width: ${({theme}) => theme.media.none}) and (max-width: ${({theme}) => theme.media.landscapePhone}) {
    width: 100%;
    font-size: 48px;
  }
  
  ::before{
      content: "";
      display: block;
      position: relative;
      top: 0;
      border-radius: 2rem;
      max-width: 148px;
      min-height: 8px;
      margin-bottom: 3rem;
      /* margin-right: 20px; */
      background: rgba(0, 0, 0, 0) linear-gradient(270deg, rgb(75, 108, 193) 0%, rgb(34, 42, 53) 100%) repeat scroll 0% 0%;
  }

`;

const StyledName = styled.h2`
  text-align: center;
  font-family: sans-serif;
  font-size: 4rem;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  /* max-height: 70vh; */
  /* height: 70vh; */
  width: 70vw;
  font-weight: bolder;
  /* box-shadow: 10px 10px 10px 10px red; */
  background: rgba(0, 0, 0, 0) linear-gradient(90deg, rgb(75, 108, 193) 0%, rgb(200, 200, 200) 100%) 0% 0% padding-box;
  -webkit-text-fill-color: transparent;
  -webkit-background-clip: text;
  color: transparent;
  
`;

const MainWrapper = styled.main`

  & {
        width: 100%;
        height: auto;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        opacity: 1;
        animation: show-up 1s ;
        overflow: hidden;
    }

    @keyframes show-up
    {
        0%{ opacity: 0; }
        10%{ opacity: 0.1; }
        20%{ opacity: 0.2; }
        30%{ opacity: 0.3; }   
        40%{ opacity: 0.4; }
        50%{ opacity: 0.5; }
        60%{ opacity: 0.6; }
        70%{ opacity: 0.7; }
        80%{ opacity: 0.8; }
        90%{ opacity: 0.9; }
        100%{ opacity: 1; }
    }
`;

const StyledContactBtn = styled(Link)`

  & {
      display: inline-block;
      border: 2px solid ${({theme}) => theme.colors.color_blue};
      background-color: ${({theme}) => theme.colors.footer_bg};
      padding: 0.5rem 1rem;
      border-radius: 1rem;
      color: ${({theme}) => theme.colors.color_blue};
      font-size: 20px;
      text-decoration: none;
      font-weight: 600;
      cursor: pointer;
      margin: 0 0 8rem;
      transition: background-color 0.4s;
      
      :hover {
          background-color: rgba(75, 108, 193, 0.4);
      }
  }

`;

const StyledHello = styled.span`

  & {
    font-size: 2rem;
    font-weight: bolder;
    margin: 0;
    padding: 0;

    @media (min-width: ${({theme}) => theme.media.none}) and (max-width: ${({theme}) => theme.media.landscapePhone}) {
      font-size: 1.5rem;
    }
  }

`;

const Blink = styled.span`

  & {
    animation: blink 1.25s infinite;
    margin-left: 0.5rem;
  }

  @keyframes blink {
    0% {
        opacity: 1;
    }
    50% {
        opacity: 1;
    }
    51% {
        opacity: 0;
    }
    100% {
        opacity: 0;
    }
  }
`;

const HomePage = () => {
  
  const [showApp, setShowApp] = useState(false);
  
  setTimeout(() => setShowApp(true), 1400)


  return (
    <>
        {!showApp ? (
              <BackgroundAnimation />
        ) : (
          <MainWrapper>
            <MainTemplate>
              <title>Strona główna | apdev.net.pl</title>
              <StyledHeading>
                <StyledHello>Cześć, jestem Albert</StyledHello> <br />
                Tworzę aplikacje oraz strony internetowe
                <Blink>_</Blink>
              </StyledHeading>
              <StyledContactBtn to="/about">
                Więcej o mnie
              </StyledContactBtn>
              <StyledName>

              </StyledName>

            </MainTemplate>
          </MainWrapper>
        )}
    </>
  )
}

export default HomePage;