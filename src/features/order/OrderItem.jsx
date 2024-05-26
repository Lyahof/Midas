import styled from "styled-components";
import formatCurrency from "../../helpers/formatCurrency";

const ProductCard = styled.div`
  position: relative;
  display: grid;
  grid-template-columns: 0.5fr 5fr 1fr 1.5fr;
  gap: 2.5rem;
  align-items: center;
  background-color: #000;
  @media (max-width: 31em) {
    grid-template-columns: 3.5fr 1fr 1.5fr;
  }
`;

const SquareImageContainer = styled.div`
  position: relative;
  width: 100%;
  padding-top: 100%; /* 1:1 Aspect Ratio */
  overflow: hidden;
  width: 10rem;
  height: 10rem;
  @media (max-width: 31em) {
    display: none;
  }

  & img {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: all 0.5s;
  }
`;

const FoodTitle = styled.p`
  font-size: 2rem;
  @media (max-width: 31em) {
    font-size: 1.5rem;
  }
`;

const Quantity = styled.p`
  font-size: 1.3rem;
`;

const PriceBlock = styled.p`
  font-size: 2.3rem;
  font-weight: 800;
  @media (max-width: 31em) {
    font-size: 1.7rem;
  }
`;

function OrderItem({ item }) {
  const { foodId, foodName, foodImage, quantity, foodPrice } = item;

  return (
    <ProductCard>
      <SquareImageContainer>
        <img src={foodImage} alt="image" />
      </SquareImageContainer>
      <FoodTitle>{foodName}</FoodTitle>
      <Quantity>{quantity} шт</Quantity>
      <PriceBlock>{formatCurrency(foodPrice)}</PriceBlock>
    </ProductCard>
  );
}

export default OrderItem;
