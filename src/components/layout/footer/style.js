import styled from "styled-components";
import { Section } from "/src/components/styled";

export const StyledSection = styled(Section)`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  width: ${(props) => props.theme.pageWidth};
  height: ${(props) => props.theme.footerHeight};
  justify-content: space-between;
  background: ${(props) => props.theme.colorWhite};
  margin: 0 auto;
  padding-top: 0;
  padding-bottom: 0;
  align-items: center;
  flex-shrink: 0;
`;
