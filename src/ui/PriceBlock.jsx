import styled from "styled-components";
import { GrBasket } from "react-icons/gr";
import formatCurrency from "../helpers/formatCurrency";

const PriceBlockContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-top: ${(props) => props.marginTop || "auto"};
  padding-left: 5px;
`;

const StyledPriceBlock = styled.div`
  display: flex;
  flex-direction: column;
`;

const Price = styled.p`
  font-size: 2.3rem;
  font-weight: 800;
  width: 11rem;
  line-height: 1;
  @media (max-width: 48em) {
    font-size: 1.7rem;
    width: 7rem;
  }
`;

const OldPrice = styled.p`
  font-size: 1.8rem;
  font-weight: 600;
  text-decoration: line-through;
  @media (max-width: 28em) {
    font-size: 1.5rem;
  }
`;

const StyledBasket = styled.button`
  background-color: var(--yellow-color);
  padding: 9px 8px;
  transition: all, 0.3s;
  align-self: flex-end;
  & svg {
    color: #000;
    width: 25px;
    height: 23px;
  }
  &:hover {
    background-color: #e2bc38;
  }
`;

function PriceBlock({ marginTop, onClick, oldPrice, foodPrice, totalPrice }) {
  return (
    <PriceBlockContainer marginTop={marginTop}>
      <StyledPriceBlock>
        {oldPrice && <OldPrice>{formatCurrency(oldPrice)}</OldPrice>}
        <Price>
          {totalPrice ? formatCurrency(totalPrice) : formatCurrency(foodPrice)}
        </Price>
      </StyledPriceBlock>
      <StyledBasket onClick={onClick}>
        <GrBasket />
      </StyledBasket>
    </PriceBlockContainer>
  );
}

export default PriceBlock;
