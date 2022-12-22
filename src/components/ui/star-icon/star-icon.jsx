import React from "react";
import { StyledStarIcon } from "./style";

export const CatFeature = {
  NEW: "new",
  SOFT: "soft"
};

function StarIcon({ className = "", feature }) {
  let options;

  switch (feature) {
    case CatFeature.NEW:
      options = {
        text: "new",
        bgColor: "#FFB334"
      };
      break;
    case CatFeature.SOFT:
      options = {
        text: "ласковый",
        bgColor: "#7FC92E"
      };
      break;
    default:
      options = {
        text: "",
        bgColor: "#000"
      };
      break;
  }
  return options.text ? (
    <StyledStarIcon className={className} $bgColor={options.bgColor}>
      {options.text}
    </StyledStarIcon>
  ) : null;
}

export default StarIcon;
