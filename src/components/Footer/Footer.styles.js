import styled from "styled-components";

export const StyledFooter = styled.footer`

    & {
        width: 100%;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
        padding: 2rem 0;
        margin: 5rem 0 0;
        background-color: ${({theme}) => theme.colors.footer_bg};
        /* border-top: 1px solid ${({theme}) => theme.colors.footer}; */
        color: ${({theme}) => theme.colors.primary_text};
        div.text { order: 1; } 
        div.social-icons { order: 2; }
        div.top { order: 3; }
    }

    & > div {
        display: flex;
        flex: 1;
        flex-direction: row;
        align-items: center;
        max-width: 1920px;
        width: 100%;
        margin: 0 auto;
        padding: 0 5rem;
    }

    & > div.text {
        display: flex;
        flex: 1;
        flex-direction: row;
        align-items: center;
        white-space: nowrap;
    }

    & > div.social-icons {
        display: flex;
        flex: 0.1;
        gap: 2rem;
        flex-direction: row;
        align-items: center;
        justify-content: space-around;
    }
    
    & > div.social-icons * {
        cursor: pointer;
        color: ${({theme}) => theme.colors.primary_text};
        height: 20px;
        width: auto;
    }

    & > div.social-icons > *:hover {
        transform: scale(1.2);

    }

    div.top {
        display: flex;
        flex: 1;
        align-items: center;
        justify-content: flex-end;
        white-space: nowrap;
    }

    div.top > a {
        color: ${({theme}) => theme.colors.primary_text};
        text-decoration: none;
        padding: 0.2rem 1rem;
        border: 1px solid ${({theme}) => theme.colors.primary_text};
        border-radius: .5rem;
        background-color: transparent;
        transition: background-color 0.3s;
        display: flex;
        align-items: center;
        justify-content: center;

        & path#arrow {
            fill: ${({theme}) => theme.colors.primary_text};
        }
    }

    div.top > a:hover{
        background-color: ${({theme}) => theme.colors.dark};
    }

    @media (min-width: ${({theme}) => theme.media.none}) and (max-width: ${({theme}) => theme.media.landscapePhone}) {

        
        & {
            flex-direction: column;

            div.text, div.social-icons, div.top {
                width: 100%;
                display: flex;
                align-items: center;
                justify-content: space-around;
                margin-bottom: 2rem;

                /* :last-child{
                    margin-bottom: 0rem;
                } */
            }

            div.text { order: 3;} 
            div.social-icons { order: 2;}
            div.top { order: 1;}
        }
    }

`; 