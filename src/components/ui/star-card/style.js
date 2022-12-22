import styled from "styled-components";
import { Section } from "/src/components/styled";
import StarIcon from "/src/components/ui/star-icon/star-icon";

export const StyledCard = styled(Section)`
  flex-direction: column;
  width: 353px;
  min-height: 525px;
  background: ${(props) => props.theme.colorWhite};
  border-radius: 12px;
  padding: 20px;
  margin: 0px;
`;

export const StyledFigure = styled.figure`
  position: relative;
  margin: 0px;
  margin-bottom: 13px;
`;

export const StyledImage = styled.img`
  border-radius: 8px;
  width: 100%;
  height: 313px;
  object-fit: contain;
`;

export const StyledStarIcon = styled(StarIcon)`
  position: absolute;
  top: 0px;
  left: 0px;
`;

export const Text = styled.p`
  margin-top: 12px;
  margin-bottom: 0px;
`;
