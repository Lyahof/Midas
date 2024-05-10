import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import MealWeight from "./MealWeight";
import PriceBlock from "./PriceBlock";
import formatCurrency from "../helpers/formatCurrency";

const StyledFoodCard = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  transition: all 0.5s;
  border-radius: 2px;
  overflow: hidden;
  cursor: pointer;
  padding-bottom: 5px;

  &:hover {
    box-shadow: 0 0 0 3px var(--yellow-color);
    & img {
      transform: scale(1.05);
    }
  }
`;

const ImageContainer = styled.div`
  overflow: hidden;

  & img {
    display: block;
    width: 100%;
    object-fit: cover;
    transition: all 0.5s;
    &:hover {
      transform: scale(1.05);
    }
  }
`;

const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 7px;
  padding-left: 5px;
`;

const FoodTitle = styled.p`
  font-size: 2rem;
  transition: all 0.3s;
  padding-left: 5px;
  &:hover {
    color: var(--yellow-color);
  }
  @media (max-width: 48em) {
    font-size: 1.4rem;
  }
`;

const FoodDescription = styled.p`
  font-size: 1.3rem;
  opacity: 70%;
  line-height: 1.4;

  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;

  @media (max-width: 48em) {
    display: none;
  }
`;

function FoodCard({ item }) {
  const navigate = useNavigate();

  const {
    id: foodId,
    foodName,
    foodWeight,
    foodDescription,
    foodPrice,
    foodImage,
    foodCategory,
    oldPrice,
  } = item;

  return (
    <StyledFoodCard onClick={() => navigate(`/main/${foodCategory}/${foodId}`)}>
      <ImageContainer>
        <img src={foodImage} alt="foodImage" />
      </ImageContainer>
      <FoodTitle>{foodName}</FoodTitle>
      <ContentContainer>
        <MealWeight>{foodWeight} г</MealWeight>
        <FoodDescription>{foodDescription}</FoodDescription>
      </ContentContainer>
      <PriceBlock>{formatCurrency(foodPrice)}</PriceBlock>
    </StyledFoodCard>
  );
}

export default FoodCard;
