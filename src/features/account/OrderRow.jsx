import styled from "styled-components";
import formatCurrency from "../../helpers/formatCurrency";
import formatDate from "../../helpers/formatDate";

const StyledOrderRow = styled.div`
  display: grid;
  grid-template-columns: 0.4fr 1fr 4fr 1fr 1fr;
  column-gap: 2.4rem;
  align-items: center;
  text-align: left;
  padding: 1.4rem 2.4rem;

  &:not(:last-child) {
    border-bottom: 1px solid var(--color-grey-100);
  }
  @media (max-width: 64em) {
    font-size: 1.2rem;
  }
  @media (max-width: 37em) {
    font-size: 1rem;
    padding: 0.8rem;
    column-gap: 1rem;
  }
  @media (max-width: 28em) {
    font-size: 0.8rem;
  }
`;

function OrderRow({ order }) {
  const { id, created_at, finalPrice, orderStatus, order: orderItems } = order;
  const orderDate = created_at.slice(0, 10);

  const orderItemsSummary = orderItems
    .map((item) => `${item.foodName} : ${item.quantity} шт`)
    .join(", ");

  return (
    <StyledOrderRow>
      <div>{id}</div>
      <div>{formatDate(created_at)}</div>
      <div>{orderItemsSummary}</div>
      <div>{formatCurrency(finalPrice)}</div>
      <div>{orderStatus}</div>
    </StyledOrderRow>
  );
}

export default OrderRow;
