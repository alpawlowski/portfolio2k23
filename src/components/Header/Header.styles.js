import styled from "styled-components";
import { Link } from "gatsby"

export const StyledHeader = styled.header`
    & {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
        color: ${({theme}) => theme.colors.color_blue};
        /* background-color: ${({theme}) => theme.colors.dark}; */
        padding: 2rem 0;
        margin-bottom: 3rem;
    }
`;

export const StyledLink = styled(Link)`
    text-decoration: none;
    color: ${({theme}) => theme.colors.color_blue};
`;

export const Logo = styled.p`

    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;

    & {
        font-size: 2.5rem;
        font-weight: bolder;
    }

    & > img {
        height: 3.5rem;
        transition: filter 1s ease-in-out;
    
        :hover {
            filter: grayscale(1);
        }

    }
`;