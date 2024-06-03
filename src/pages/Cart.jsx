import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import Breadcrumbs from "../ui/Breadcrumbs";
import Title from "../ui/Title";
import {
  applyPromocode,
  getCart,
  getPromocode,
  getTotalCartPrice,
  getTotalCartQuantity,
  getUpdatedTotalPrice,
  saveCart,
} from "../features/cart/CartSlice";
import CartItem from "../features/cart/CartItem";
import Promocode from "../features/cart/Promocode";
import useGetPromocode from "../features/cart/useGetPromocode";
import formatCurrency from "../helpers/formatCurrency";
import Button from "../ui/Button";
import EmptyCart from "../features/cart/EmptyCart";
import { useUser } from "../features/authentication/useUser";

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
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const cart = useSelector(getCart);
  const { user } = useUser();

  const totalCartQuantity = useSelector(getTotalCartQuantity);
  const totalCartPrice = useSelector(getTotalCartPrice);
  const updatedTotalPrice = useSelector(getUpdatedTotalPrice);
  const enteredPromocode = useSelector(getPromocode);
  const today = new Date().toISOString();
  const { data, isLoading } = useGetPromocode();

  useEffect(() => {
    if (user && cart.length > 0) {
      dispatch(saveCart({ userId: user.id, cart }));
    }
  }, [cart, user, dispatch]);

  useEffect(() => {
    if (data) {
      const { code, expiryDate, discount } = data;
      if (enteredPromocode === code && new Date(expiryDate) > new Date(today)) {
        dispatch(applyPromocode(discount));
      }
    }
  }, [data, enteredPromocode, dispatch, today]);

  if (isLoading) return null;

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
              {!enteredPromocode
                ? ""
                : updatedTotalPrice
                ? `Промокод активирован. Ваша скидка составляет ${formatCurrency(
                    totalCartPrice - updatedTotalPrice
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
            <Button onClick={() => navigate("/main/cart/placingOrder")}>
              Оформить заказ
            </Button>
          </PriceBlock>
        </>
      ) : (
        <EmptyCart />
      )}
    </>
  );
}

export default Cart;
