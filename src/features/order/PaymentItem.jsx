import styled from "styled-components";
import Checkbox from "../../ui/Checkbox";
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

function PaymentItem({ method, onClick, isActivePaymentCard }) {
  return (
    <StyledPaymentItem
      onClick={onClick}
      isActivePaymentCard={isActivePaymentCard}
    >
      <Checkbox isActivePaymentCard={isActivePaymentCard} />
      <TitleContainer>
        {method.text}
        {method.showIcons && <PaymentIcons />}
      </TitleContainer>
    </StyledPaymentItem>
  );
}

export default PaymentItem;
