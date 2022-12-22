import styled from "styled-components";
import { Link } from "react-router-dom";

export const StyledButton = styled(Link)`
  display: block;
  font-family: ${(props) => props.theme.fontFamily};
  font-style: normal;
  font-weight: 700;
  font-size: ${(props) => props.theme.fontSizeDefault};
  line-height: 60px;
  min-width: ${(props) => `${props.$minWidth}px` || "100%"};
  min-height: 60px;
  text-decoration: none;
  text-align: center;
  color: ${(props) => props.theme.colorWhite};
  background-color: ${(props) => props.theme.colorButtonOrange};
  border-radius: 5px;
  border: none;
  cursor: pointer;
  transition: background-color 0.2s ease-out, box-shadow 0.2s ease-out;

  &:hover,
  &:active {
    background: ${(props) => props.theme.colorButtonOrangeHover};
  }

  &:active {
    box-shadow: inset 0px 4px 0px rgba(0, 0, 0, 0.14);
  }
`;
