import React from "react";
import Gallery from "/src/components/ui/gallery/gallery";
import { TitleSize, TitleLevel } from "/src/components/ui/title/title";
import { StyledSection, StyledTitle } from "./style";

function CafeGallery({ slides }) {
  return slides?.length ? (
    <StyledSection>
      <StyledTitle level={TitleLevel.H1} size={TitleSize.BIG}>
        Галерея нашего кафе
      </StyledTitle>
      <Gallery slides={slides} />
    </StyledSection>
  ) : null;
}

export default CafeGallery;
