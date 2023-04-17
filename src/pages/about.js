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
    font-size: 2rem;
    float: left;
    line-height: 1.5rem;
    padding-right: 2px;
    }

    @media (min-width: ${({theme}) => theme.media.none}) and (max-width: ${({theme}) => theme.media.landscapePhone}) {
      width: 100%;
      padding-right: 0;
      font-size: 1.2rem;

      &::first-letter{
        font-size: 2rem;
        line-height: 1rem;
        padding-right: 0;
      }
    };
  `;

  const StyledLink = styled(Link)`
    color: ${({theme}) => theme.colors.color_blue};
    margin: 0 0.5rem;

    @media (min-width: ${({theme}) => theme.media.none}) and (max-width: ${({theme}) => theme.media.landscapePhone}) {
      margin: 0;
    };
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
    /* background-color: #333B46; */
    width: 100%;
    padding: 2rem;

    @media (min-width: ${({theme}) => theme.media.none}) and (max-width: ${({theme}) => theme.media.landscapePhone}) {
      padding: 0;
    };
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
      <title>O mnie | apdev.website</title>
      <MainWrapper>
        <StyledHeading>
          <span>
            O mnie
          </span>
        </StyledHeading>
        <StyledAbout>
          <StyledParagraph>
            Cześć, jestem Albert i zajmuję się tworzeniem aplikacji oraz stron internetowych.
            <br /><br />
            Jestem programistą, który pasjonuje się tworzeniem aplikacji internetowych. 
            Obecnie koncentruję się na rozwoju swoich umiejętności w dziedzinie tworzenia aplikacji internetowych, zarówno po stronie front-endu, jak i back-endu.
            <br /><br />
            Moim celem zawodowym jest uzyskanie pełnej samodzielności jako Full-Stack Web Developer.
            <br /><br />
            <StyledHead>Doświadczenie</StyledHead>
            Front-End Web Developer w firmie ASCO Systemy Informatyczne Sp. z o.o. Sp. k.
            <br /><br />
            Z sukcesem zrealizowałem kilka współprac komercyjnych, dotyczących zaprojektowania i stworzenia stron internetowych.
            <br /><br />
            Dodatkowo w ramach studiów informatycznych odbyłem praktyki w firmie SmartGrow Sp. z o.o., dla której wykonałem firmową stronę internetową.             
            <StyledLink to="/projects#smartgrow"> Podgląd strony ➡️</StyledLink> 
            <br /><br />
            <StyledHead>Wykształcenie</StyledHead>
            W 2022 roku obroniłem tytuł inżyniera informatyki na Uniwersytecie Jana Kochanowskiego w Kielcach.<br /><br />
            <StyledHead>Współpraca</StyledHead>
            Jestem otwarty na oferty pracy w formie stacjonarnej lub hybrydowej, a także na rozwojową współpracę, która umożliwi mi pogłębiać swoją wiedzę oraz rozwijać się w obszarze web developmentu.
            <br /><br />
            Lubię pracować zarówno z klientem, w zespole, jak i samodzielnie.
            <br /><br />
            Po więcej informacji, serdecznie zapraszam na luźną rozmowę 😀
            <StyledLink to="/contact">Wybór kontaktu ➡️</StyledLink>
          </StyledParagraph>
          <StyledImage src="/Rectangle-46.png" />
        </StyledAbout>
      </MainWrapper>
    </MainTemplate>
  )
}

export default AboutPage;
