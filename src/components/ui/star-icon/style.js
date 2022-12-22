import styled from "styled-components";

export const StyledStarIcon = styled.span`
  background-color: ${(props) => props.$bgColor};
  display: block;
  border-radius: 8px 8px 8px 0px;
  font-weight: 700;
  color: ${(props) => props.theme.colorWhite};
  padding: 8px 16px 8px 16px;
  box-sizing: border-box;
  text-transform: uppercase;
`;
