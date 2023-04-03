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
  font-size: 4rem;
  float: left;
  line-height: 60px;
  padding-right: 8px;
  margin-top: 3px;
  }
`;

const SkillsPage = () => {
  return (
    <>
      <MainTemplate>
        <title>Umiejętności | apdev.net.pl</title>
        <MainWrapper>
          <StyledHeading>
            <span>
              Umiejętności
            </span>
          </StyledHeading>
          <StyledParagraph>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </StyledParagraph>
          <SkillsList />
          <OtherSkillsList />
        </MainWrapper>
      </MainTemplate>
    </>
  )
};

export default SkillsPage;
