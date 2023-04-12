import React, { useState } from "react";
import MainTemplate from "../templates/MainTemplate";
import styled from 'styled-components';
import { MainWrapper } from "../components/MainWrapper/MainWrapper";
import { StyledHeading } from '../components/StyledHeading/StyledHeading';
import { StyledParagraph } from '../components/StyledParagraph/StyledParagraph';

const ContactContent = styled.div`

    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    gap: 1.5rem;
    margin: 5rem 0;
`;

const ContactElements = styled.div`
  & {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    gap: 1.5rem;
    
  }
  
  @media (min-width: ${({theme}) => theme.media.none}) and (max-width: ${({theme}) => theme.media.portraitPhone}) {
    flex-direction: column;
    gap: 1.5rem;
    width: 100%;
  }
`;

const CopyEmailInfo = styled.small`
  & {
    display: block;
    color: ${({theme}) => theme.colors.color_blue};
  }
`;

const StyledContactBtn = styled.a`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  padding: 0.7rem 1.2rem;
  background-color: ${({theme}) => theme.colors.footer_bg};
  color: ${({theme}) => theme.colors.primary_text};
  font-weight: bolder;
  font-size: 1rem;
  border: 1px solid ${({theme}) => theme.colors.footer_bg};
  border-radius: 0.5rem;
  cursor: pointer;

  & > svg{
    fill: ${({theme}) => theme.colors.primary_text};
    height: 2rem;
    width: auto;
  }

  @media (min-width: ${({theme}) => theme.media.none}) and (max-width: ${({theme}) => theme.media.portraitPhone}) {
    width: 100%;
  }
`;

const ContactPage = () => {

  const [showEmailTextInfo, setShowEmailTextInfo] = useState(false);

  const copyEmail = (e) => {
		navigator.clipboard.writeText(e.target.innerText);
    setShowEmailTextInfo((show) => !show);
	};

  return (
    <MainTemplate>
      <title>Kontakt | apdev.website</title>
      <MainWrapper>
        <StyledHeading>
          <span>
            Kontakt
          </span>
        </StyledHeading>
        <ContactContent>
          <StyledParagraph>
            Zapraszam do kontaktu 😃
          </StyledParagraph>
          
          <ContactElements>
            <StyledContactBtn type="button" href="mailto:alpawlowski01@gmail.com">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z"/><path d="M3 3h18a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1zm17 4.238l-7.928 7.1L4 7.216V19h16V7.238zM4.511 5l7.55 6.662L19.502 5H4.511z"/></svg>
              E-mail
            </StyledContactBtn>
            <StyledContactBtn type="button" href="https://www.linkedin.com/in/alpawlowski/" target="_blank">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z"/><path d="M18.335 18.339H15.67v-4.177c0-.996-.02-2.278-1.39-2.278-1.389 0-1.601 1.084-1.601 2.205v4.25h-2.666V9.75h2.56v1.17h.035c.358-.674 1.228-1.387 2.528-1.387 2.7 0 3.2 1.778 3.2 4.091v4.715zM7.003 8.575a1.546 1.546 0 0 1-1.548-1.549 1.548 1.548 0 1 1 1.547 1.549zm1.336 9.764H5.666V9.75H8.34v8.589zM19.67 3H4.329C3.593 3 3 3.58 3 4.297v15.406C3 20.42 3.594 21 4.328 21h15.338C20.4 21 21 20.42 21 19.703V4.297C21 3.58 20.4 3 19.666 3h.003z"/></svg>
              LinkedIn
            </StyledContactBtn>
            <StyledContactBtn type="button" href="https://discord.com/users/641722465348747295" target="_blank">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z"/><path d="M10.076 11c.6 0 1.086.45 1.075 1 0 .55-.474 1-1.075 1C9.486 13 9 12.55 9 12s.475-1 1.076-1zm3.848 0c.601 0 1.076.45 1.076 1s-.475 1-1.076 1c-.59 0-1.075-.45-1.075-1s.474-1 1.075-1zm4.967-9C20.054 2 21 2.966 21 4.163V23l-2.211-1.995-1.245-1.176-1.317-1.25.546 1.943H5.109C3.946 20.522 3 19.556 3 18.359V4.163C3 2.966 3.946 2 5.109 2H18.89zm-3.97 13.713c2.273-.073 3.148-1.596 3.148-1.596 0-3.381-1.482-6.122-1.482-6.122-1.48-1.133-2.89-1.102-2.89-1.102l-.144.168c1.749.546 2.561 1.334 2.561 1.334a8.263 8.263 0 0 0-3.096-1.008 8.527 8.527 0 0 0-2.077.02c-.062 0-.114.011-.175.021-.36.032-1.235.168-2.335.662-.38.178-.607.305-.607.305s.854-.83 2.705-1.376l-.103-.126s-1.409-.031-2.89 1.103c0 0-1.481 2.74-1.481 6.121 0 0 .864 1.522 3.137 1.596 0 0 .38-.472.69-.871-1.307-.4-1.8-1.24-1.8-1.24s.102.074.287.179c.01.01.02.021.041.031.031.022.062.032.093.053.257.147.514.262.75.357.422.168.926.336 1.513.452a7.06 7.06 0 0 0 2.664.01 6.666 6.666 0 0 0 1.491-.451c.36-.137.761-.337 1.183-.62 0 0-.514.861-1.862 1.25.309.399.68.85.68.85z" /></svg>
              Discord
            </StyledContactBtn>
          </ContactElements>
            <StyledContactBtn type="button" onClick={copyEmail}>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z"/><path d="M3 3h18a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1zm17 4.238l-7.928 7.1L4 7.216V19h16V7.238zM4.511 5l7.55 6.662L19.502 5H4.511z"/></svg>
              alpawlowski01@gmail.com
            </StyledContactBtn>
            {showEmailTextInfo && <CopyEmailInfo>Skopiowano adres e-mail</CopyEmailInfo> }
        </ContactContent>
      </MainWrapper>
    </MainTemplate>
  )
};

export default ContactPage;
