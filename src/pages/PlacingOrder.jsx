import { useSelector } from "react-redux";
import Breadcrumbs from "../ui/Breadcrumbs";
import Title from "../ui/Title";
import {
  getCart,
  getTotalCartPrice,
  getUpdatedTotalPrice,
} from "../features/cart/CartSlice";
import OrderItemsBlock from "../features/order/OrderItemsBlock";
import styled from "styled-components";
import PersonalDataForm from "../features/order/PersonalDataForm";
import DeliveryDataForm from "../features/order/DeliveryDataForm";
import Form from "../ui/Form";
import ChoosePayment from "../features/order/ChoosePayment";
import HiddenOrder from "../features/order/HiddenOrder";

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: 3fr 2fr;
  gap: 2rem;
  position: relative;

  @media (max-width: 64em) {
    grid-template-columns: 1fr;
  }
`;

function PlacingOrder() {
  const order = useSelector(getCart);
  const updatedTotalPrice = useSelector(getUpdatedTotalPrice);
  const totalCartPrice = useSelector(getTotalCartPrice);

  return (
    <>
      <Title align="left" size="small">
        Оформление заказа
      </Title>
      <Breadcrumbs />

      <HiddenOrder />

      <GridContainer>
        <Form>
          <PersonalDataForm />
          <DeliveryDataForm />
          <ChoosePayment />
        </Form>

        {order && totalCartPrice > 0 && (
          <OrderItemsBlock
            order={order}
            updatedTotalPrice={updatedTotalPrice}
            totalCartPrice={totalCartPrice}
          />
        )}
      </GridContainer>
    </>
  );
}

export default PlacingOrder;
