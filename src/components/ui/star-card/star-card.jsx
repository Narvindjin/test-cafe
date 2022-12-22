import React from "react";
import Title, { TitleSize, TitleLevel } from "/src/components/ui/title/title";
import {
  StyledCard,
  StyledFigure,
  StyledImage,
  StyledStarIcon,
  Text
} from "./style";

function StarCard({ name, about, feature, image }) {
  return (
    <StyledCard as="article">
      <StyledFigure>
        <StyledImage
          src={image}
          width={313}
          height={320}
          alt="изображение кота"
        />
        <StyledStarIcon feature={feature} />
      </StyledFigure>
      <Title size={TitleSize.SMALL} level={TitleLevel.H3}>
        {name}
      </Title>
      <Text dangerouslySetInnerHTML={{ __html: about }}></Text>
    </StyledCard>
  );
}

export default StarCard;
