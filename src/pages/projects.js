import React from "react";
import styled from 'styled-components';
import { projects } from '../data/projects';
import MainTemplate from "../templates/MainTemplate";
import { MainWrapper } from "../components/MainWrapper/MainWrapper";
import { StyledHeading } from '../components/StyledHeading/StyledHeading';

const StyledProjectDiv = styled.div`
  & {
    position: relative;
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    flex-direction: row;
    overflow: hidden;
    width: 100%;
    height: 100%;
    margin: 2rem 1rem;
    padding: 4rem;
    border: 2px solid ${({theme}) => theme.colors.bg_blue_light};
    border-radius: 1rem;
    color: ${({theme}) => theme.colors.white};
    background-color: ${({theme}) => theme.colors.bg_blue_darker};

    @media (min-width: ${({theme}) => theme.media.none}) and (max-width: ${({theme}) => theme.media.tablet}) {
      flex-direction: column;
      padding: 3rem;
    }

    & > img {
      width: 50%;
      padding: 0.7rem;
      margin: 1rem;
      filter: brightness(.7);
      box-shadow: 1.5rem 1.5rem 0 -1rem ${({theme}) => theme.colors.color_blue_light};
      border-radius: .5rem;
      :hover {
        filter: brightness(1);
      }

      @media (min-width: ${({theme}) => theme.media.none}) and (max-width: ${({theme}) => theme.media.tablet}) {
        width: 100%;
        display: block;
        margin: 1rem auto;
      }

      @media (min-width: ${({theme}) => theme.media.tablet}) and (max-width: ${({theme}) => theme.media.desktop}) {
        width: 45%;
      }
    }

    ::after {
      position: absolute;
      top: 0;
      right: 0;
      padding: 0.7rem 1rem;
      border-bottom-left-radius: 1rem;
      background-color: ${({theme}) => theme.colors.bg_blue_light};
      content: attr(data-project);
      font-size: .9rem;
    }
  }
`;

const StyledDivText = styled.div`
  & {
    display: flex;
    align-items: flex-start;
    justify-content: center;
    flex-direction: column;
    width: 50%;
    padding: 1rem 1rem 1rem 3rem;
    height: 100%;
    color: ${({theme}) => theme.colors.primary_text};

    @media (min-width: ${({theme}) => theme.media.none}) and (max-width: ${({theme}) => theme.media.tablet}) {
      width: 100%;
      padding: 0;
    }

    @media (min-width: ${({theme}) => theme.media.tablet}) and (max-width: ${({theme}) => theme.media.desktop}) {
      width: 55%;
      padding: 1rem 0rem 1rem 2rem;
    }

    h2 {
      font-size: 2.5rem;
      font-weight: bold;

      @media (min-width: ${({theme}) => theme.media.none}) and (max-width: ${({theme}) => theme.media.tablet}) {
        font-size: 1.5rem;
      }
    }
    
    p {
      font-size: 1.2rem;
      margin: 1rem 0;
    }
    
    small {
      font-weight: bolder;
    }
  }
`;

const StyledDivFeatures = styled.div`
  & {
    display: flex;
    gap: 1rem;
    width: 100%;
    align-items: center;
    justify-content: flex-start;
    margin: 1rem 0;

    @media (min-width: ${({theme}) => theme.media.none}) and (max-width: ${({theme}) => theme.media.desktop}) {
      flex-wrap: wrap;
    }

    & > div {
      position: relative;
      display: flex;
      align-items: center;
      justify-content: center;
      background-color: ${({theme}) => theme.colors.bg_blue_light};
      border-radius: 50%;
      padding: 1rem;

      @media (min-width: ${({theme}) => theme.media.none}) and (max-width: ${({theme}) => theme.media.desktop}) {
        padding: 0.7rem;
      }
      
      :hover::before, :hover::after {
        visibility: visible;
      }

      ::before, ::after {
        content: '';
        position: absolute;
        left: 50%;
        transform: translate(-50%, .5rem);
        visibility: hidden;
      }

      ::before {
        bottom: .5rem;
        border: .35rem solid transparent;
        border-bottom: .35rem solid ${({theme}) => theme.colors.footer};
      }

      ::after {
        content: attr(data-tooltip);
        display: ruby;
        ruby-align: center;
        bottom: -1.1rem;
        color: ${({theme}) => theme.colors.white};
        font-size: .7rem;
        font-weight: bolder;
        padding: .4rem .5rem;
        background-color: ${({theme}) => theme.colors.footer};
        border-radius: .7rem;
      }
    }
    
    img {
      max-height: 1.5rem;
      height: 1.5rem;
      max-width: 1.5rem;
      filter: grayscale(40%);
      transform: scale(1);
      transition: filter .5s ease-in-out, transform .5s ease-in-out;
      :hover {
        filter: grayscale(10%);
        transform: scale(1.2);
      }

      @media (min-width: ${({theme}) => theme.media.tablet}) and (max-width: ${({theme}) => theme.media.desktop}) {
        max-height: 1.3rem;
        height: 1.3rem;
        max-width: 1.3rem;
      }
    }
  }
`;

const StyledLink = styled.a`
  & {
    color: ${({theme}) => theme.colors.primary_text};
    text-decoration: none;
    border: 1px solid ${({theme}) => theme.colors.color_blue};
    border-radius: 1rem;
    padding: .35rem 1rem;
    font-weight: bolder;
    font-size: 0.9rem;
    
    :hover {
      text-decoration: underline;
      background-color: ${({theme}) => theme.colors.color_blue_light};
    }
  }
`;

const StyledMoreProjects = styled.div`
  & {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 1rem;
    margin: 2rem 1rem;
    padding: 1rem 2rem;
    border: 2px solid ${({theme}) => theme.colors.bg_blue_light};
    border-radius: 1rem;
    color: ${({theme}) => theme.colors.white};
    background-color: ${({theme}) => theme.colors.bg_blue_darker};
  }
`;

const ProjectsPage = () => {
  return (
    <MainTemplate>
      <title>Projekty | apdev.net.pl</title>
      <MainWrapper>
        <StyledHeading>
          <span>
            Moje projekty
          </span>
        </StyledHeading>
        {projects.map((project, i) => {
          return (
            <StyledProjectDiv key={i} data-project={project.type} id={project.id} >
              <img src={project.img} alt="" />
              <StyledDivText>
                <h2>{project.name}</h2>
                <p>{project.desc}</p>
                <small>Wykorzystane technologie:</small>
                <StyledDivFeatures>
                {project.technologies.map((technology, i) => {
                  return (
                    <div data-tooltip={technology.name} key={i}>
                      <img src={`./static/skills/${technology.img}`} alt="" />
                    </div>
                  );
                })}
                </StyledDivFeatures>
                <StyledDivFeatures>
                  <StyledLink href={project.live} target="_blank" type="button">Live demo</StyledLink>
                  {project.type !== 'Projekt komercyjny' ?
                  <StyledLink href={project.repo} target="_blank" type="button">GitHub</StyledLink>
                    : null}
                </StyledDivFeatures>
              </StyledDivText>
            </StyledProjectDiv>
          );
        })}
        <StyledMoreProjects>
          <span>Więcej projektów na moim profilu</span> 
          <StyledLink href="https://github.com/alpawlowski" target="_blank"> GitHub </StyledLink>
        </StyledMoreProjects>
      </MainWrapper>
    </MainTemplate>
  )
};

export default ProjectsPage;
