import styled from "styled-components";
import { useState } from "react";
import Title from "../../ui/Title";
import DataFormContainer from "./DataFormContainer";
import PaymentItem from "./PaymentItem";
import Button from "../../ui/Button";

const paymentMethods = [
  {
    text: "Банковские карты / Электронные деньги / Другое",
    showIcons: true,
  },
  {
    text: "Наличными курьеру",
    showIcons: false,
  },
  {
    text: "Картой курьеру",
    showIcons: false,
  },
];

const PaymentBlockContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  align-self: flex-start;
  width: 90%;
`;

function ChoosePayment() {
  const [isActivePaymentCard, setIsActivePaymentCard] = useState(0);

  return (
    <DataFormContainer>
      <Title align="left" size="extraSmall">
        03. Оплата
      </Title>
      <PaymentBlockContainer>
        {paymentMethods.map((method, index) => (
          <PaymentItem
            key={index}
            method={method}
            onClick={() => setIsActivePaymentCard(index)}
            isActivePaymentCard={isActivePaymentCard === index}
          />
        ))}
      </PaymentBlockContainer>
      <Button align="flex-start">Подтвердить заказ</Button>
    </DataFormContainer>
  );
}

export default ChoosePayment;
