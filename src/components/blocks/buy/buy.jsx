import React, { useState } from "react";
import { Form, Label, Li } from "/src/components/styled";
import Button from "/src/components/ui/button/button";
import { TitleSize, TitleLevel } from "/src/components/ui/title/title";
import { Accordion } from "/src/components/ui/accordion/accordion";
import {
  StyledSection,
  Price,
  FormItem,
  StyledTitle,
  RadioLabelForTime,
  StyledListForTime,
  RadioLabelForType,
  AccordionText
} from "./style";
import RadioButton from "/src/components/ui/radio-button/radioButton";

function Buy({ buyOptions: { durationOptions = [], ticketOptions = [] } }) {
  const canBuy = durationOptions.length && ticketOptions.length;
  const [duration, setDuration] = useState(durationOptions[0]);
  const [selectType, setSelectType] = useState(ticketOptions[0].id);
  const type = ticketOptions.find((option) => option.id === selectType);
  const price = duration * type.price;
  const handleBuy = () => {
    alert(
      `Спасибо за покупку.
              Вы приобрели билет класса: ${type.title}.
              Продолжительность посещения(часов): ${duration}.
              Цена билета: ${price} руб.`
    );
  };

  const accordionContent =
    canBuy &&
    ticketOptions.map((option) => ({
      id: option.id,
      title: (
        <RadioButton
          labelComponent={RadioLabelForType}
          selectValue={selectType}
          value={option.id}
          text={option.title}
          onChange={(el) => {
            setSelectType(Number(el.target.value));
          }}
        />
      ),
      description: option.description
    }));

  return (
    <StyledSection>
      <StyledTitle level={TitleLevel.H1} size={TitleSize.BIG}>
        Купить билет
      </StyledTitle>
      {canBuy ? (
        <Form $width={540}>
          <FormItem>
            <Label $margin={12}>Продолжительность (часов)</Label>
            <StyledListForTime>
              {durationOptions.map((option) => (
                <Li key={option}>
                  <RadioButton
                    labelComponent={RadioLabelForTime}
                    selectValue={duration}
                    value={option}
                    text={option}
                    onChange={(el) => {
                      setDuration(Number(el.target.value));
                    }}
                  />
                </Li>
              ))}
            </StyledListForTime>
          </FormItem>
          <FormItem $bottom={22}>
            <Label $margin={12}>Тип билета</Label>
            <Accordion
              textComponent={AccordionText}
              content={accordionContent}
              isHtml
            />
          </FormItem>
          <Label $small $margin={6}>
            Цена
          </Label>
          <Price>{price} руб.</Price>
          <Button minWidth={460} onClick={handleBuy}>
            Купить билет
          </Button>
        </Form>
      ) : (
        <p>Покупка билетов временно недоступна</p>
      )}
    </StyledSection>
  );
}

export default Buy;
