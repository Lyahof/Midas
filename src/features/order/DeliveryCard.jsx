import styled from "styled-components";
import formatCurrency from "../../helpers/formatCurrency";

const StyledDeliveryCard = styled.div`
  display: flex;
  flex-direction: column;
  padding: 2.5rem 2rem 4rem;
  gap: 1rem;
  max-width: 39rem;
  justify-self: start;
  border: 1.5px dashed
    ${(props) => (props.isActiveCard ? "var(--yellow-color)" : "#9ea2aa")};
  flex-basis: 50%;
  cursor: pointer;
`;

const Title = styled.div`
  display: flex;
  justify-content: space-between;

  & p {
    font-size: 2rem;
    @media (max-width: 37em) {
      font-size: 1.5rem;
    }
  }

  & h5 {
    font-size: 2.3rem;
    font-weight: 800;
    @media (max-width: 37em) {
      font-size: 1.7rem;
    }
  }
`;

const Text = styled.p`
  font-size: 1.3rem;
  color: #9ea2aa;
  @media (max-width: 37em) {
    font-size: 1.2rem;
  }
`;

function DeliveryCard({ card, isActiveCard, onClick }) {
  const { title, price, text } = card;

  return (
    <StyledDeliveryCard onClick={onClick} isActiveCard={isActiveCard}>
      <Title>
        <p>{title}</p>
        <h5>{formatCurrency(price)}</h5>
      </Title>
      <Text>{text}</Text>
    </StyledDeliveryCard>
  );
}

export default DeliveryCard;
