import { GrBasket } from "react-icons/gr";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

const StyledCartIcon = styled(NavLink)`
  position: relative;
  & svg {
    width: 2.4rem;
    height: 2.4rem;
    transition: all 0.3s;
  }

  &:hover svg,
  &:active svg {
    color: var(--yellow-color);
  }
`;

const CartOverview = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 21px;
  height: 17px;
  border-radius: 2px;
  background-color: var(--yellow-color);
  font-size: 1.2rem;
  color: #000;
  box-shadow: 3px 3px 3px #000;

  position: absolute;
  top: -7px;
  right: 13px;
`;

function CartIcon() {
  const totalCartQuantity = useSelector((state) =>
    state.cart.cart.reduce((sum, item) => sum + item.quantity, 0)
  );

  return (
    <StyledCartIcon to="main/cart">
      {totalCartQuantity ? (
        <>
          <CartOverview>{totalCartQuantity}</CartOverview>
          <GrBasket />
        </>
      ) : (
        <GrBasket />
      )}
    </StyledCartIcon>
  );
}

export default CartIcon;
