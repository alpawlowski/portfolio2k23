import styled from "styled-components";

export const StyledParagraph = styled.p`
    color: ${({theme}) => theme.colors.primary_text};
    font-size: 1.3rem;
    margin: 1rem 0 3rem;
    text-align: center;
`;