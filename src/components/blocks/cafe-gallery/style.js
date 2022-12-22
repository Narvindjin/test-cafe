import styled from "styled-components";
import { Section } from "/src/components/styled";
import Title from "/src/components/ui/title/title";
import galleryBackground from "/src/assets/gallery-background.svg";
import galleryLeft from "/src/assets/gallery-left.svg";
import galleryRight from "/src/assets/gallery-right.svg";

export const StyledSection = styled(Section)`
  display: flex;
  flex-direction: column;
  position: relative;
  padding-left: ${(props) => props.theme.pagePadding};
  padding-top: 79px;
  padding-bottom: 100px;
  box-sizing: border-box;
  min-width: 1280px;
  background-color: ${(props) => props.theme.colorDarkBackground};
  background-image: url(${galleryBackground});
  background-position: top right;
  background-repeat: no-repeat;
  background-size: 321px 305px;
  align-items: center;
  z-index: 1;

  &::before {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 113px;
    height: 114px;
    content: "";
    background-image: url(${galleryLeft});
    background-size: contain;
    background-repeat: no-repeat;
  }

  &::after {
    position: absolute;
    top: 77px;
    right: 0;
    width: 225px;
    height: 222px;
    content: "";
    background-image: url(${galleryRight});
    background-size: contain;
    background-repeat: no-repeat;
  }
`;

export const StyledTitle = styled(Title)`
  margin-bottom: 64px;
`;
