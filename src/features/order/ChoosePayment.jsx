import styled from "styled-components";
import Title from "../../ui/Title";
import DataFormContainer from "./DataFormContainer";
import PaymentItem from "./PaymentItem";
import Button from "../../ui/Button";

const paymentMethods = [
  {
    value: "cards",
    text: "Банковские карты / Электронные деньги / Другое",
    showIcons: true,
  },
  {
    value: "cash",
    text: "Наличными курьеру",
    showIcons: false,
  },
  {
    value: "cardCourier",
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

function ChoosePayment({ register, selectedPaymentMethod, setValue }) {
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
            onClick={() => {
              setValue("paymentMethod", method.value);
            }}
            isActivePaymentCard={selectedPaymentMethod === method.value}
            register={register}
          />
        ))}
      </PaymentBlockContainer>
      <Button align="flex-start">Подтвердить заказ</Button>
    </DataFormContainer>
  );
}

export default ChoosePayment;
