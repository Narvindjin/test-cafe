import styled from "styled-components";
import { Section } from "/src/components/styled";

export const StyledSection = styled(Section)`
  display: flex;
  width: ${(props) => props.theme.pageWidth};
  min-height: 80px;
  justify-content: space-between;
  background: ${(props) => props.theme.colorWhite};
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.04), 0 0 2px rgba(0, 0, 0, 0.06),
    0 0 1px rgba(0, 0, 0, 0.04);
  margin: 0 auto;
  padding-top: 0;
  padding-bottom: 0;
  align-items: center;
  z-index: 3;
`;
