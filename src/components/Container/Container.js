import styled from "styled-components";

export const Container = styled.div`

  & {
    max-width: 1920px;
    width: min(100%, 1480px);
    margin: 0 auto;
    display: block;
    padding: 0 5rem;
  }

  & > main {
    animation: slideIn 0.7s forwards;

    @keyframes slideIn {
      from {
        opacity: 0;
        transform: scale(.7)
      }
      
      to {
        opacity: 1;
        transform: scale(1)
      }
    }
  }

  @media (min-width: ${({theme}) => theme.media.none}) and (max-width: ${({theme}) => theme.media.tablet}) {
    padding: 0 2rem;
  }
`;