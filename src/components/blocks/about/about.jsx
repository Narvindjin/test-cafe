import React from "react";
import Title, { TitleSize, TitleLevel } from "/src/components/ui/title/title";
import { StyledSection, Wrapper, Text, WorkTime, Address } from "./style";

function About() {
  return (
    <StyledSection>
      <Wrapper>
        <Title size={TitleSize.BIG} level={TitleLevel.H1}>
          Первое в России котокафе
        </Title>
        <Text>
          Крупнейшее котокафе России, в котором живёт 50 кошек и котов, и каждый
          из них ищет новый дом. Животных можно гладить, фотографировать, играть
          с ними.
        </Text>
        <WorkTime>Рабочее время с 8:00 до 23:00</WorkTime>
        <Address>
          Санкт-Петербург, набережная реки Карповки, дом 5, литера П
        </Address>
      </Wrapper>
    </StyledSection>
  );
}

export default About;
