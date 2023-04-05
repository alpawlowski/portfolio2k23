import React from "react";
import { skills } from '../../data/skills';
import styled from "styled-components";

const StyledSkills = styled.div`
  & {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    margin-bottom: 4rem;
  };
`;

const TechnologiesList = styled.ul`
  & {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-evenly;
    flex-wrap: wrap;
    width: 100%;
    gap: 1rem;
    margin: 1rem 0;
    
    li {
      list-style-type: none;
      display: flex;
      align-items: center;
      flex-direction: column;

      :hover img {
        filter: grayscale(.4);
      }

      img {
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: ${({theme}) => theme.colors.bg_blue_light};
        border-radius: 40%;
        padding: 1rem;
        width: 4rem;
        height: 4rem;
      }
    }
    
    p {
      font-size: 1.2rem;
      color: gray;
    }

    img {
      filter: grayscale(0);
      height: 50px;
      margin-bottom: 1rem;
    }
  };
`;

const HeadingContainer = styled.div`
  & {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    width: 100%;
    padding: 0 0 2rem;
  };
`;

const StyledCategory = styled.h3`

  & {
    background: rgba(0, 0, 0, 0) linear-gradient(90deg, rgb(255, 255, 255) 0%, rgb(75, 108, 193) 100%) 0% 0% padding-box;
    -webkit-text-fill-color: transparent;
    -webkit-background-clip: text;
    color: transparent;
  }
      
  &:first-child {
    margin: 5rem 0 1rem;
  }

  ::before{
    content: "";
    display: block;
    position: relative;
    top: 0;
    width: 40%;
    border-radius: 2rem;
    height: 3px;
    margin-top: 1rem;
    background: rgba(0, 0, 0, 0) linear-gradient(270deg, rgb(75, 108, 193) 0%, rgb(34, 42, 53) 100%) repeat scroll 0% 0%;
  }
`;

const StyledHead = styled.h2`
  &:first-child {
    color: ${({theme}) => theme.colors.color_blue};
    font-size: 2rem;
    margin: 5rem 0 2rem;
  }
`;

const SkillsList = () => (
  <StyledSkills>
    {skills.map((skill, i) => {
      return (
        <>
          <StyledHead>{skill.heading}</StyledHead>
          <HeadingContainer>
            <StyledCategory>{skill.category}:</StyledCategory>
          </HeadingContainer>
          <TechnologiesList>
            {skill.technologies.map((technology, i) => {
                return (
                  <li>
                    <img src={`/skills/${technology.img}`} />
                    <p>{technology.name}</p>
                  </li>
                );
            })}
          </TechnologiesList>
        </>
      );
    })}
  </StyledSkills>
);

export default SkillsList;