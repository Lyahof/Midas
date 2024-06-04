import styled from "styled-components";
import Title from "../../ui/Title";
import OrderRow from "./OrderRow";

const StyledOrderTable = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3rem;
  @media (max-width: 28em) {
    gap: 1rem;
  }
`;

const Table = styled.div`
  border: 1px solid grey;
  overflow: hidden;
`;

const TableHeader = styled.header`
  display: grid;
  grid-template-columns: 0.4fr 1fr 4fr 1fr 1fr;
  column-gap: 2.4rem;
  align-items: center;
  text-align: left;
  border-bottom: 1px solid #777;
  text-transform: uppercase;
  letter-spacing: 0.4px;
  font-weight: 600;
  padding: 1.6rem 2.4rem;

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

function OrderHistoryTable({ userOrders }) {
  return (
    <StyledOrderTable>
      <Title size="extraSmall" as="h2">
        История заказаов
      </Title>
      <Table>
        <TableHeader>
          <div>№</div>
          <div>дата</div>
          <div>блюда</div>
          <div>стоимость</div>
          <div>статус</div>
        </TableHeader>
        {userOrders?.map((order) => (
          <OrderRow order={order} key={order.id} />
        ))}
      </Table>
    </StyledOrderTable>
  );
}

export default OrderHistoryTable;
