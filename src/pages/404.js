import React from "react";
import { Link } from "gatsby";
import styled from 'styled-components';
import MainTemplate from "../templates/MainTemplate";
import { MainWrapper } from "../components/MainWrapper/MainWrapper";
import { StyledHeading } from '../components/StyledHeading/StyledHeading';
import { StyledParagraph } from '../components/StyledParagraph/StyledParagraph';

const StyledLink = styled(Link)`
  color: ${({theme}) => theme.colors.color_blue};
  margin-top: 1.5rem;
  display: block;
`;

const NotFoundPage = () => {
  return (
    <MainTemplate>
      <title>Nie znaleziono strony | 404 Not Found</title>
      <MainWrapper>
        <StyledHeading>
          <span>
            Nie znaleziono strony
          </span>
        </StyledHeading>
        <StyledParagraph>
          Nie udało się znaleźć strony, której szukasz.
          <span role="img" aria-label="Pensive emoji">
            😔
          </span>
          <br />
          <StyledLink to="/">Wróć do strony głównej</StyledLink>
        </StyledParagraph>
      </MainWrapper>
    </MainTemplate>
  )
};

export default NotFoundPage;

