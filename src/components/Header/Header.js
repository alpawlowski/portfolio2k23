import React from "react";
import { Container } from "../Container/Container";
import { StyledHeader, StyledLink, Logo } from "./Header.styles";
import Navigation from "../Navigation/Navigation";

const Header = () => (
  <Container>
    <StyledHeader>
      <StyledLink to="/">
        <Logo>
          {/* <img src="./static/apdev-logo.png" /> */}
          apdev.net.pl
        </Logo>
      </StyledLink>
      <Navigation />
    </StyledHeader>
  </Container>
)

export default Header;