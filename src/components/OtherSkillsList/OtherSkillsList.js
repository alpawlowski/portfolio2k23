import React, { useState } from "react";
import { other_skills } from '../../data/other_skills';
import styled from "styled-components";

const StyledOtherSkills = styled.div`
  & {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;

    @media (min-width: ${({theme}) => theme.media.none}) and (max-width: ${({theme}) => theme.media.landscapePhone}) {
      align-items: flex-start;
    }
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

    @media (min-width: ${({theme}) => theme.media.none}) and (max-width: ${({theme}) => theme.media.landscapePhone}) {
      justify-content: flex-start;
      gap: 2rem;
    }
  };
`;

const HeadingContainer = styled.div`
  & {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    padding: 2rem;

    :is(.active) svg {
      transform: rotate(180deg);
    }

    svg {
      fill: ${({theme}) => theme.colors.primary_text};
      font-size: 2rem;
      margin-left: 2rem;
      transform: rotate(0deg);
    }

    :hover {
      cursor: pointer;
    }

    @media (min-width: ${({theme}) => theme.media.none}) and (max-width: ${({theme}) => theme.media.landscapePhone}) {
      padding: 1rem 0rem;
      align-items: flex-start;
    }
  };
`;

const StyledCategory = styled.h3`
  & {
    background: rgba(0, 0, 0, 0) linear-gradient(90deg, rgb(255, 255, 255) 0%, rgb(75, 108, 193) 100%) 0% 0% padding-box;
    -webkit-text-fill-color: transparent;
    -webkit-background-clip: text;
    color: transparent;

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

    :first-child {
      margin: 1rem;
    }

    @media (min-width: ${({theme}) => theme.media.none}) and (max-width: ${({theme}) => theme.media.landscapePhone}) {
      width: 100%;
    }
  }
`;

const StyledHead = styled.h2`
  & {
    display: flex;
    align-items: center;
    justify-content: center;
    border: 1px solid ${({theme}) => theme.colors.footer_bg};
    border-radius: 0.5rem;
    padding: 1rem 2rem;
    color: ${({theme}) => theme.colors.color_blue};
    font-size: 2rem;
    margin-top: 2rem;
    
    @media (min-width: ${({theme}) => theme.media.none}) and (max-width: ${({theme}) => theme.media.landscapePhone}) {
      padding: 1rem 0rem;
      align-items: center;
    }
  }
`;


const OtherSkillsList = () => {

  const [showOtherSkills, setShowOtherSkills] = useState(false);

  const showSkills = (e) => {
    setShowOtherSkills((prevState) => !prevState);
  };
    
  return (
    <StyledOtherSkills>
      {other_skills.map((skill, i) => {
        return (
          <>
            <HeadingContainer className={showOtherSkills ? 'active' : ''} onClick={showSkills}>
              {skill.heading 
                && (   
                  <StyledHead>
                    <>
                      {skill.heading}
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z"/><path d="M12 13.172l4.95-4.95 1.414 1.414L12 16 5.636 9.636 7.05 8.222z"/></svg>
                    </>
                  </StyledHead>
              ) }
            </HeadingContainer>
            { showOtherSkills ? ( 
              <TechnologiesList>
                <StyledCategory>{skill.category}:</StyledCategory>
                  {skill.technologies.map((technology, i) => {
                    return (
                      <li>
                        <img src={`./static/skills/${technology.img}`} />
                        <p>{technology.name}</p>
                      </li>
                    );
                  })}
              </TechnologiesList>
            ) : null }
          </>
        );
      })}
    </StyledOtherSkills>
  )
};

export default OtherSkillsList;