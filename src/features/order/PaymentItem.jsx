import styled from "styled-components";
import PaymentIcons from "./PaymentIcons";

const StyledPaymentItem = styled.div`
  display: flex;
  align-items: center;
  padding: 4rem 2rem;
  gap: 2.5rem;
  border: 1.5px dashed
    ${(props) =>
      props.isActivePaymentCard ? "var(--yellow-color)" : "#9ea2aa"};
  cursor: pointer;
  text-transform: none;
  @media (max-width: 37em) {
    padding: 1.8rem 1.5rem;
    gap: 2rem;
  }
`;

const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  font-size: 2rem;
  @media (max-width: 37em) {
    font-size: 1.5rem;
  }
`;

const CheckboxContainer = styled.div`
  //display: inline-block;
  //vertical-align: middle;
  position: relative;
`;

const HiddenCheckbox = styled.input.attrs({ type: "radio" })`
  border: 0;
  clip: rect(0 0 0 0);
  clip-path: inset(50%);
  height: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
  white-space: nowrap;
  width: 1px;
`;

const StyledCheckbox = styled.div`
  display: inline-block;
  width: 2.5rem;
  height: 2.5rem;
  border: 1px solid
    ${(props) => (props.checked ? "var(--yellow-color)" : "#9ea2aa")};
  border-radius: 50%;
  transition: all 150ms;
  position: relative;

  &::after {
    content: ${(props) => (props.checked ? '""' : "none")};
    display: block;
    width: 1.5rem;
    height: 1.5rem;
    border-radius: 50%;
    background: var(--yellow-color);
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
`;

function PaymentItem({ method, onClick, isActivePaymentCard, register }) {
  return (
    <StyledPaymentItem
      onClick={onClick}
      isActivePaymentCard={isActivePaymentCard}
    >
      <CheckboxContainer>
        <HiddenCheckbox
          type="radio"
          value={method.value}
          id="paymentMethod"
          {...register("paymentMethod")}
        />
        <StyledCheckbox checked={isActivePaymentCard} />
      </CheckboxContainer>
      <TitleContainer>
        {method.text}
        {method.showIcons && <PaymentIcons />}
      </TitleContainer>
    </StyledPaymentItem>
  );
}

export default PaymentItem;
