import styled from "styled-components";
import { Link } from "gatsby";

export const StyledNavigation = styled.nav`

`;

export const StyledUl = styled.ul`
    display: flex;
    flex-direction: row;
    flex-flow: row nowrap;
    align-items: center;
    justify-content: flex-end;
    list-style-type: none;
    padding-left: 1rem;

  @media (min-width: ${({theme}) => theme.media.none}) and (max-width: ${({theme}) => theme.media.landscapePhone}) {
    position: fixed;
    top: 0;
    right: 0;
    flex-flow: column nowrap;
    justify-content: flex-start;
    background-color: ${({theme}) => theme.colors.footer_bg};
    height: 100vh;
    width: 100vw;
    transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(100%)'};
    padding-top: 10rem;
    z-index: 555;
    /* transition: transform 0.3s ease-in-out; */
  }

`;

export const StyledLink = styled(Link)`
    & {
        text-decoration: none;
        color: ${({theme}) => theme.colors.primary_text};
        border: 1px solid transparent;
        border-bottom-width: 5px;
        padding: 0.6rem 0.8rem;
        text-transform: uppercase;
        font-weight: bolder;
        text-align: center;
        white-space: nowrap;
        margin-right: 2rem;
        display: flex;
        align-items: flex-end;
        justify-content: center;

        ::before {
            content: "";
            width: 0;
            display: block;
            height: 2px;
            background: rgba(0, 0, 0, 0) linear-gradient(270deg, rgb(34, 42, 53) 0%, rgb(75, 108, 193) 50%, rgb(34, 42, 53) 100%) repeat scroll 0% 0%;
            margin: 0 auto;
            -webkit-transform: translateY(30px);
            transform: translateY(30px);
            transition: width .2s;
            white-space: nowrap;
        }

        &:hover::before {
            width: 90%;
        }

        @media (min-width: ${({theme}) => theme.media.none}) and (max-width: ${({theme}) => theme.media.landscapePhone}) {
            margin-right: 0;
            margin-bottom: 2rem;
        }
    }

    &:hover {
        color: ${({theme}) => theme.colors.white};
        border: 1px solid transparent;
        border-bottom: 5px solid rgb(75, 108, 193);
        border-radius: 0.3rem;
    }

    &.active {
        color: ${({theme}) => theme.colors.white};
        /* padding: 0.6rem 0.8rem; */
        /* border: 1px solid ${({theme}) => theme.colors.darker}; */
        border: 1px solid rgb(75, 108, 193);
        border-bottom-width: 5px;
        border-radius: 0.3rem;
        background-color: ${({theme}) => theme.colors.darker};
    }

`;


export const StyledHamburger = styled.button`

    & {
        display: none;
        align-items: center;
        justify-content: center;
        text-align: center;
        background-color: ${({theme}) => theme.colors.dark};
        padding: 1rem;
        border: 1px solid ${({theme}) => theme.colors.footer_bg};
        border-radius: 1rem;
        z-index: 999;
        position: relative;
        cursor: pointer;

        :hover {
            background-color: ${({theme}) => theme.colors.footer_bg};
        }
    }

    & > svg {
        fill: ${({theme}) => theme.colors.white};
        height: 1.5rem;
        width: auto;
    }

    @media (min-width: ${({theme}) => theme.media.none}) and (max-width: ${({theme}) => theme.media.landscapePhone}) {
        display: flex;
    }

`;