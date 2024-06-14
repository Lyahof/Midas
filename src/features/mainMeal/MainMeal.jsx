import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";

import PhoneLink from "../../ui/PhoneLink";
import EmailLink from "../../ui/EmailLink";
import PriceBlock from "../../ui/PriceBlock";
import MealWeight from "../../ui/MealWeight";
import MainDesert from "./MainDesert";
import Spinner from "../../ui/Spinner";
import { addItem } from "../cart/CartSlice";
import { useMainMenu } from "./useMainMenu";

const Grid = styled.div`
  position: relative;
  display: grid;
  grid-template-columns: 1fr 3.4fr;
  gap: 6rem;
  margin-bottom: 6rem;

  @media (max-width: 86em) {
    grid-template-columns: 1.1fr 3fr;
    gap: 4rem;
  }

  @media (max-width: 64em) {
    grid-template-columns: 1fr;
  }

  @media (max-width: 28em) {
    &::after {
      content: "";
      position: absolute;
      background-image: url("/background-images/plate-1.webp");
      top: 3rem;
      right: -7rem;
      width: 12rem;
      height: 12rem;
      background-size: cover;
      background-repeat: no-repeat;
      transform: rotate(45deg);
      z-index: -1;
      opacity: 80%;
    }

    &::before {
      content: "";
      position: absolute;
      background-image: url("/background-images/plate-2.webp");
      top: 7rem;
      left: -8rem;
      width: 10rem;
      height: 10rem;
      background-size: cover;
      background-repeat: no-repeat;
      transform: rotate(45deg);
      z-index: -1;
      opacity: 80%;
    }
  }
`;

const Info = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 10rem;
  padding-top: 5rem;

  @media (max-width: 64em) {
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-start;
    gap: 10rem;
    padding: 0;
  }

  @media (max-width: 44em) {
    gap: 2rem;
  }
`;

const Card = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  max-width: 36rem;
  padding: 3.5rem 7rem 6rem 5.5rem;
  background-image: url("/card-background.png");
  background-repeat: no-repeat;
  position: absolute;
  bottom: -3rem;
  left: 47rem;
  z-index: 999;

  @media (max-width: 86em) {
    bottom: 5rem;
    left: 47rem;
  }
  @media (max-width: 64em) {
    bottom: -7rem;
    left: 1rem;
  }

  @media (max-width: 37em) {
    display: none;
  }
`;

const CardText = styled.p`
  font-size: 1.5rem;
  line-height: 1.5;
  margin-bottom: 1rem;
`;

const CardTitle = styled.h3`
  font-size: 2.5rem;
`;

const Slogan = styled.h3`
  font-size: 2.5rem;
  flex-wrap: wrap;

  @media (max-width: 64em) {
    max-width: 28rem;
  }

  @media (max-width: 37em) {
    max-width: 31rem;
  }
`;

const Links = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 1rem;

  @media (max-width: 64em) {
    justify-content: flex-end;
    align-items: end;
  }

  @media (max-width: 37em) {
    display: none;
  }
`;

const ImageContainer = styled.div`
  max-width: 117rem;
  overflow: hidden;

  @media (max-width: 37em) {
    display: none;
  }
`;

const Img = styled.img`
  width: 100%;
  cursor: pointer;
  transition: all 0.5s;

  &:hover {
    transform: scale(1.015);
  }
`;

function MainMeal() {
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
  } = data.find((item) => item.foodCategory === "hot") || {};

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
    <>
      <Grid>
        <Info>
          <Slogan>Доставка готовой еды из фермерских продуктов!</Slogan>
          <Links>
            <PhoneLink size="big" href="tel:+7(499)841-67-29">
              +7 (499) 841-67-29
            </PhoneLink>
            <EmailLink size="big" href="delivery@midas.rest">
              delivery@midas.rest
            </EmailLink>
          </Links>
          <MainDesert />
        </Info>

        <ImageContainer
          onClick={() => navigate(`/main/${foodCategory}/${foodId}`)}
        >
          <Card>
            <CardTitle>{foodName}</CardTitle>
            <MealWeight variation="secondary">{foodWeight} г</MealWeight>
            <CardText>{foodDescription}</CardText>
            <PriceBlock
              foodPrice={foodPrice}
              oldPrice={oldPrice}
              onClick={handleAddToCart}
            />
          </Card>
          <Img src={foodImage} alt="Main-food image" fetchPriority="high" />
        </ImageContainer>
      </Grid>
    </>
  );
}

export default MainMeal;
