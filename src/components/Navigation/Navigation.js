import React, { useState } from "react";
import { StyledNavigation, StyledLink, StyledHamburger, StyledUl } from "./Navigation.styles";

const Navigation = () => {

  const [open, setOpen] = useState(false);

  return (
  <>
    <StyledNavigation>
      {/* <StyledHamburger onClick={showHamburger} > */}
      <StyledHamburger  open={open} onClick={() => setOpen(!open)}>
      {open ? ( 
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z"/><path d="M12 10.586l4.95-4.95 1.414 1.414-4.95 4.95 4.95 4.95-1.414 1.414-4.95-4.95-4.95 4.95-1.414-1.414 4.95-4.95-4.95-4.95L7.05 5.636z"/></svg>
      ) : (
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z"/><path d="M3 4h18v2H3V4zm0 7h18v2H3v-2zm0 7h18v2H3v-2z"/></svg>
      )}
      </StyledHamburger>

      <StyledUl open={open}>
        <li>
          <StyledLink to="/about" activeClassName="active">O mnie</StyledLink>
          {/* <StyledLink to="/about" activeClassName="active">About</StyledLink> */}
        </li>
        <li>
          <StyledLink to="/skills" activeClassName="active">Umiejętności</StyledLink>
          {/* <StyledLink to="/skills" activeClassName="active">Skills</StyledLink> */}
        </li>
        <li>
          <StyledLink to="/projects" activeClassName="active">Projekty</StyledLink>
          {/* <StyledLink to="/projects" activeClassName="active">Projects</StyledLink> */}
        </li>
        <li>
          <StyledLink to="/contact" activeClassName="active">Kontakt</StyledLink>
          {/* <StyledLink to="/contact" activeClassName="active">Contact</StyledLink> */}
        </li>
      </StyledUl>

    </StyledNavigation>

  </>
)};

export default Navigation;