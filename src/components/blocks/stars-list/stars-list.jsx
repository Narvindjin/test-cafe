import React from "react";
import Button from "/src/components/ui/button/button";
import Title from "/src/components/ui/title/title";
import StarCard from "/src/components/ui/star-card/star-card";
import { StyledSection, StyledList, StyledItem } from "./style";
import { AppRoute } from "/src/const";

function StarsList({ stars }) {
  return (
    <StyledSection>
      {stars?.length ? (
        <>
          <Title level="2">Наши звезды</Title>
          <StyledList>
            {stars.map((star) => (
              <StyledItem key={star.id}>
                <StarCard {...star} />
              </StyledItem>
            ))}
          </StyledList>
          <Button minWidth={353} link={AppRoute.BUY}>
            Купить билет
          </Button>
        </>
      ) : null}
    </StyledSection>
  );
}

export default StarsList;
