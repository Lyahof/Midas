import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import MealWeight from "../../ui/MealWeight";
import PriceBlock from "../../ui/PriceBlock";
import { addItem } from "../cart/CartSlice";
import Spinner from "../../ui/Spinner";
import { useMainMenu } from "./useMainMenu";

const StyledMainDesert = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  align-self: flex-start;
  cursor: pointer;

  &:hover {
    & img {
      transform: scale(1.05);
    }
  }

  @media (max-width: 64em) {
    display: none;
  }
`;

const ImageContainer = styled.div`
  max-width: 26rem;
`;

const Img = styled.img`
  transition: all, 0.3s;
  width: 100%;
`;

const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding-left: 2.7rem;
`;

const DesertTitle = styled.p`
  font-size: 2rem;
  &:hover {
    color: var(--yellow-color);
  }
`;

function MainDesert() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { isLoading, data } = useMainMenu();

  if (isLoading) return <Spinner />;

  const {
    id: foodId,
    foodName,
    foodWeight,
    foodDescription,
    foodPrice,
    oldPrice,
    foodImage,
    foodCategory,
  } = data.find((item) => item.foodCategory === "deserts") || {};

  function handleAddToCart(e) {
    e.stopPropagation();

    const newItem = {
      foodId,
      foodName,
      foodImage,
      foodWeight,
      quantity: 1,
      foodPrice,
      totalPrice: foodPrice * 1,
    };
    dispatch(addItem(newItem));
  }

  return (
    <StyledMainDesert onClick={() => navigate(`/${foodCategory}/${foodId}`)}>
      <ImageContainer>
        <Img src={foodImage} />
      </ImageContainer>
      <InfoContainer>
        <DesertTitle>{foodName}</DesertTitle>
        <MealWeight>{foodWeight} г</MealWeight>
        <PriceBlock
          foodPrice={foodPrice}
          oldPrice={oldPrice}
          onClick={handleAddToCart}
        />
      </InfoContainer>
    </StyledMainDesert>
  );
}

export default MainDesert;
