import { useSelector } from "react-redux";
import styled from "styled-components";
import Breadcrumbs from "../ui/Breadcrumbs";
import Title from "../ui/Title";
import {
  getCart,
  getPromocode,
  getTotalCartPrice,
  getTotalCartQuantity,
} from "../features/cart/CartSlice";
import CartItem from "../features/cart/CartItem";
import Promocode from "../features/cart/Promocode";
import useGetPromocode from "../features/cart/useGetPromocode";
import formatCurrency from "../helpers/formatCurrency";
import Button from "../ui/Button";
import EmptyCart from "../features/cart/EmptyCart";

const cardHeaderItems = ["Блюдо:", " Цена:", "Кол-во:", "Сумма:"];

const StyledCartTitle = styled.div`
  display: flex;
  gap: 1.3rem;
`;

const CartQuantity = styled.p`
  font-size: 3.5rem;
  color: var(--yellow-color);
  @media (max-width: 28em) {
    font-size: 2.5rem;
  }
`;

const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-bottom: 4rem;
  @media (max-width: 44em) {
    margin-top: 3rem;
    margin-bottom: 3rem;
  }
`;

const CartHeader = styled.div`
  display: grid;
  grid-template-columns: 6fr 2.5fr 2fr 3fr;
  margin: 3rem 0 2rem 0;

  @media (max-width: 64em) {
    grid-template-columns: 7fr 2.5fr 2fr 3fr;
  }
  @media (max-width: 44em) {
    display: none;
  }

  & p {
    font-size: 1.3rem;
    text-transform: uppercase;
    color: #9ea2aa;
    letter-spacing: 1px;
    &:first-child {
      transform: translateX(24.5rem);
      @media (max-width: 64em) {
        transform: translateX(21rem);
      }
      @media (max-width: 48em) {
        transform: translateX(15rem);
      }
    }

    &:nth-child(3) {
      transform: translateX(-2.7rem);
      @media (max-width: 64em) {
        transform: translateX(-2rem);
      }
    }
  }
`;

const PriceBlock = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  padding-top: 2.5rem;
  margin-bottom: 10rem;
`;

const PriceContainer = styled.div`
  display: flex;
  align-items: flex-end;
  gap: 1rem;
  margin-bottom: 2rem;
  padding-top: 3rem;
`;

const PriceTitle = styled.p`
  font-size: 1.3rem;
  text-transform: uppercase;
  color: #9ea2aa;
  letter-spacing: 1px;
`;

const PriceValue = styled.p`
  font-size: 2.8rem;
  font-weight: 800;
  line-height: 1;
`;

const PromoInfo = styled.p`
  padding-top: 1.5rem;
  font-size: 1.6rem;
  height: 4rem;
`;

function Cart() {
  const totalCartQuantity = useSelector(getTotalCartQuantity);
  const totalCartPrice = useSelector(getTotalCartPrice);
  const cart = useSelector(getCart);
  const promoCode = useSelector(getPromocode);
  const today = new Date().toISOString();

  const { data, isLoading } = useGetPromocode();
  if (isLoading) return undefined;
  const { code, expiryDate, discount } = data;

  let updatedTotalPrice;
  let discountAmount;

  if (promoCode === code && new Date(expiryDate) > new Date(today)) {
    discountAmount = (totalCartPrice * discount) / 100;
    updatedTotalPrice = totalCartPrice - discountAmount;
  }

  return (
    <>
      <StyledCartTitle>
        <Title>Корзина</Title>
        {totalCartQuantity > 0 && (
          <CartQuantity>{totalCartQuantity} шт</CartQuantity>
        )}
      </StyledCartTitle>

      <Breadcrumbs />

      {totalCartQuantity > 0 ? (
        <>
          <CartHeader>
            {cardHeaderItems.map((item) => (
              <p key={item}>{item}</p>
            ))}
          </CartHeader>

          <CardContainer>
            {cart.map((item) => (
              <CartItem item={item} key={item.foodId} />
            ))}
          </CardContainer>

          <PriceBlock>
            <Promocode
              totalCartQuantity={totalCartQuantity}
              updatedTotalPrice={updatedTotalPrice}
            />
            <PromoInfo>
              {!promoCode
                ? ""
                : discountAmount
                ? `Промокод активирован. Ваша скидка составляет ${formatCurrency(
                    discountAmount
                  )}`
                : "Промокод не найден"}
            </PromoInfo>

            <PriceContainer>
              <PriceTitle>Итого к оплате:</PriceTitle>
              <PriceValue>
                {updatedTotalPrice
                  ? formatCurrency(updatedTotalPrice)
                  : formatCurrency(totalCartPrice)}
              </PriceValue>
            </PriceContainer>
            <Button>Оформить заказ</Button>
          </PriceBlock>
        </>
      ) : (
        <EmptyCart />
      )}
    </>
  );
}

export default Cart;
