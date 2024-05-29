import styled from "styled-components";
import formatCurrency from "../../helpers/formatCurrency";
import OrderItem from "./OrderItem";
import { useActivateDelivery } from "../../contexts/ActivateDeliveryContext";
import { useHiddenOrderContext } from "../../contexts/HiddenOrderContext";

const OrderContainer = styled.div`
  align-self: start;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 2rem 2rem 4rem 2rem;
  background-color: #000;
  transform: translateY(-13rem);
  width: 100%;

  @media (max-width: 64em) {
    position: absolute;
    top: 10.4rem;
    left: 0;
    display: ${(props) => (props.isShow ? "flex" : "none")};

    @media (max-width: 31em) {
      gap: 2.3rem;
    }

    @keyframes slideDown {
      from {
        height: 0;
        opacity: 0;
      }
      to {
        height: auto;
        opacity: 1;
      }
    }
    /*animation*/
    animation: ${({ isShow }) => isShow && "slideDown 0.5s ease forwards"};
  }
`;

const PriceBlock = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  padding-top: 3rem;
  @media (max-width: 31em) {
    // padding-right: 4rem;
  }
`;

const PriceContainer = styled.div`
  display: flex;
  align-items: flex-end;
  justify-self: flex-end;
  align-self: flex-end;
  gap: 2rem;
`;

const PriceTitle = styled.p`
  font-size: 1.3rem;
  text-transform: uppercase;
  color: #9ea2aa;
  letter-spacing: 1px;
  @media (max-width: 31em) {
    font-size: 1.1rem;
  }
`;

const PriceValue = styled.p`
  font-size: 2.3rem;
  font-weight: 800;
  line-height: 1;

  @media (max-width: 31em) {
    font-size: 1.7rem;
  }
`;

function OrderItemsBlock({ order, updatedTotalPrice, totalCartPrice }) {
  const { deliveryPrice } = useActivateDelivery();
  const { isShowOrder } = useHiddenOrderContext();

  return (
    <OrderContainer isShow={isShowOrder}>
      {order.map((item, id) => (
        <OrderItem item={item} key={id} />
      ))}
      <PriceBlock>
        {updatedTotalPrice ? (
          <PriceContainer>
            <PriceTitle>Скидка по промокоду:</PriceTitle>
            <PriceValue>
              {formatCurrency(totalCartPrice - updatedTotalPrice)}
            </PriceValue>
          </PriceContainer>
        ) : null}

        <PriceContainer>
          <PriceTitle>Стоимость заказа:</PriceTitle>
          <PriceValue>
            {updatedTotalPrice
              ? formatCurrency(updatedTotalPrice)
              : formatCurrency(totalCartPrice)}
          </PriceValue>
        </PriceContainer>

        <PriceContainer>
          <PriceTitle>Стоимость доставки:</PriceTitle>
          <PriceValue>{formatCurrency(deliveryPrice)}</PriceValue>
        </PriceContainer>

        <PriceContainer>
          <PriceTitle>Итого к оплате:</PriceTitle>
          <PriceValue>
            {updatedTotalPrice
              ? formatCurrency(updatedTotalPrice + deliveryPrice)
              : formatCurrency(totalCartPrice + deliveryPrice)}
          </PriceValue>
        </PriceContainer>
      </PriceBlock>
    </OrderContainer>
  );
}

export default OrderItemsBlock;
