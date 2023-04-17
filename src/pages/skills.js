import React from "react";
import styled from 'styled-components';
import MainTemplate from "../templates/MainTemplate";
import { MainWrapper } from "../components/MainWrapper/MainWrapper";
import { StyledHeading } from '../components/StyledHeading/StyledHeading';
import SkillsList from "../components/SkillsList/SkillsList";
import OtherSkillsList from "../components/OtherSkillsList/OtherSkillsList";

const StyledParagraph = styled.p`
  color: ${({theme}) => theme.colors.primary_text};
  font-size: 1.3rem;

  &::first-letter{
  color: ${({theme}) => theme.colors.color_blue};
  font-weight: bold;
  font-size: 2rem;
  float: left;
  line-height: 1.5rem;
  padding-right: 2px;
  }
`;

const SkillsPage = () => {
  return (
    <>
      <MainTemplate>
        <title>Umiejętności | apdev.website</title>
        <MainWrapper>
          <StyledHeading>
            <span>
              Umiejętności
            </span>
          </StyledHeading>
          <StyledParagraph>
          Swoją przygodę z programowaniem rozpocząłem w 2018 roku poprzez naukę HTML, CSS oraz biblioteki Bootstrap. 
          Wkrótce potem poznałem podstawy języka PHP, wraz z frameworkiem Laravel oraz systemem baz danych MySQL.
          <br /><br />
          Około roku 2020 poznałem język programowania JavaScript, w którym postanowiłem "zostać na dłużej".
          <br /><br />
          W połowie 2021 roku rozpocząłem naukę środowiska Node.js wraz z frameworkiem Express.js oraz systemem szablonów EJS (Embedded JavaScript), a także systemem nierelacyjnych baz danych MongoDB wraz z biblioteką Mongoose.
          <br /><br />
          W roku 2022 podjąłem decyzję o pogłębieniu swoich umiejętności w obszarze front-endu poprzez naukę biblioteki React.js oraz frameworka Gatsby.js.
          <br /><br />
          Aktualnie skupiam się na rozwoju swoich kompetencji w dziedzinie technologii javascriptowych, zarówno w zakresie frontendu (Vanilla JS, TypeScript, React.js), jak i backendu (Node.js, Express.js, MongoDB).
          <br /><br />
          W przyszłości zamierzam poznać m.in. Next.js, React Native oraz bibliotekę three.js.
          </StyledParagraph>
          <SkillsList />
          <OtherSkillsList />
        </MainWrapper>
      </MainTemplate>
    </>
  )
};

export default SkillsPage;
