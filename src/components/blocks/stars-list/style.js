import styled from "styled-components";
import { Section, Ul, Li } from "/src/components/styled";

export const StyledSection = styled(Section)`
  flex-direction: column;
  align-items: center;
  background: ${(props) => props.theme.colorDarkBackground};
  padding-top: 100px;
  padding-bottom: 80px;
`;

export const StyledList = styled(Ul)`
  display: grid;
  grid-template-columns: repeat(3, 353px);
  gap: 20px;
  margin-top: 64px;
  margin-bottom: 44px;
`;

export const StyledItem = styled(Li)``;
