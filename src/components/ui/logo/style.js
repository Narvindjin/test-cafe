import styled from "styled-components";

export const LogoLink = styled.a`
  display: flex;
  text-decoration: none;
  align-items: center;
  height: 44px;
  &:hover {
    text-decoration: none;
  }
`;

export const LogoText = styled.span`
  display: flex;
  color: ${(props) => props.theme.colorBlackText};
  font-weight: 700;
  font-size: 28px;
  line-height: 115%;
  margin-left: 24px;
`;
