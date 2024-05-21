import styled from "styled-components";
import MealWeight from "../../ui/MealWeight";
import UpdateItemQuantity from "./UpdateItemQuantity";
import { MdClose } from "react-icons/md";
import formatCurrency from "../../helpers/formatCurrency";
import { useDispatch } from "react-redux";
import { deleteItem } from "./CartSlice";

const ProductCard = styled.div`
  position: relative;
  display: grid;
  grid-template-columns: 1fr 4fr 2fr 2fr 2fr 1fr;
  gap: 6.5rem;
  align-items: center;
  background-color: #000;

  @media (max-width: 64em) {
    gap: 3rem;
  }

  @media (max-width: 44em) {
    gap: 1rem;
    grid-template-columns: 1fr 1fr 1fr;
    padding: 1.5rem 1rem;
  }
`;

const SquareImageContainer = styled.div`
  position: relative;
  width: 100%;
  padding-top: 100%; /* 1:1 Aspect Ratio */
  overflow: hidden;
  width: 18rem;
  height: 18rem;

  @media (max-width: 48em) {
    width: 12rem;
    height: 12rem;
  }

  @media (max-width: 44em) {
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

const DescriptionBlock = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;

  @media (max-width: 44em) {
    flex-direction: row;
    grid-column: 1 / -1;
  }
`;

const FoodTitle = styled.p`
  font-size: 2rem;
  @media (max-width: 48em) {
    font-size: 1.5rem;
  }
`;

const PriceBlock = styled.p`
  font-size: 2.3rem;
  font-weight: 800;
`;

const DeleteButton = styled.button`
  width: 42px;
  height: 42px;
  display: block;
  background-color: transparent;
  border: 1px solid #b70000;
  transition: all 0.3s;

  @media (max-width: 48em) {
    position: absolute;
    top: 0;
    right: 0;
    width: 30px;
    height: 30px;
  }

  &:hover {
    border: 1px solid #920000;
    & svg {
      color: #920000;
    }
  }

  & svg {
    width: 30px;
    height: 30px;
    color: #b70000;
    transition: all 0.3s;
    @media (max-width: 48em) {
      width: 20px;
      height: 20px;
    }
  }
`;

function CartItem({ item }) {
  const {
    foodId,
    foodName,
    foodImage,
    foodWeight,
    quantity,
    foodPrice,
    totalPrice,
  } = item;

  const dispatch = useDispatch();

  return (
    <ProductCard>
      <SquareImageContainer>
        <img src={foodImage} />
      </SquareImageContainer>

      <DescriptionBlock>
        <FoodTitle>{foodName}</FoodTitle>
        <MealWeight>{foodWeight} г</MealWeight>
      </DescriptionBlock>

      <PriceBlock>{formatCurrency(foodPrice)}</PriceBlock>

      <UpdateItemQuantity foodId={foodId} />

      <PriceBlock>{formatCurrency(totalPrice)}</PriceBlock>

      <DeleteButton onClick={() => dispatch(deleteItem(foodId))}>
        <MdClose />
      </DeleteButton>
    </ProductCard>
  );
}

export default CartItem;
