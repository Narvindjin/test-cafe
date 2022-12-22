import React from "react";
import Logo from "/src/components/ui/logo/logo";
import Copyright from "/src/components/ui/copyright/copyright";
import { StyledSection } from "./style";

function Footer() {
  return (
    <StyledSection as="footer">
      <Logo />
      <Copyright>Создано 2021</Copyright>
    </StyledSection>
  );
}

export default Footer;
