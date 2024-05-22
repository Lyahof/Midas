import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import styled from "styled-components";

import MealWeight from "./MealWeight";
import PriceBlock from "./PriceBlock";
import { addItem } from "../features/cart/CartSlice";
import { useCartIcon } from "../contexts/CartIconContext";

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

const SquareImageContainer = styled.div`
  position: relative;
  width: 100%;
  padding-top: 100%; /* 1:1 Aspect Ratio */
  overflow: hidden;

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
  const dispatch = useDispatch();
  const imageRef = useRef(null);
  const { cartIconRef } = useCartIcon();

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

  function handleAddToCart(e) {
    e.stopPropagation();

    const img = imageRef.current;
    const imgClone = img.cloneNode(true);
    const cartIcon = cartIconRef.current;

    if (cartIcon) {
      const cartIconRect = cartIcon.getBoundingClientRect();
      const imgRect = img.getBoundingClientRect();

      const translateX =
        cartIconRect.left +
        cartIconRect.width / 2 -
        imgRect.left -
        imgRect.width / 2;
      const translateY =
        cartIconRect.top +
        cartIconRect.height / 2 -
        imgRect.top -
        imgRect.height / 2;

      imgClone.style.position = "absolute";
      imgClone.style.top = `${imgRect.top + window.scrollY}px`;
      imgClone.style.left = `${imgRect.left + window.scrollX}px`;
      imgClone.style.width = `${imgRect.width}px`;
      imgClone.style.height = `${imgRect.height}px`;
      imgClone.style.transition = "transform 1.2s ease-out";

      imgClone.style.setProperty("--translate-x", `${translateX}px`);
      imgClone.style.setProperty("--translate-y", `${translateY}px`);
      imgClone.classList.add("fly-img");
      document.body.appendChild(imgClone);

      imgClone.addEventListener("animationend", () => {
        imgClone.remove();
      });
    }

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
    <StyledFoodCard onClick={() => navigate(`/main/${foodCategory}/${foodId}`)}>
      <SquareImageContainer>
        <img src={foodImage} alt="foodImage" ref={imageRef} />
      </SquareImageContainer>
      <FoodTitle>{foodName}</FoodTitle>
      <ContentContainer>
        <MealWeight>{foodWeight} г</MealWeight>
        <FoodDescription>{foodDescription}</FoodDescription>
      </ContentContainer>
      <PriceBlock
        onClick={handleAddToCart}
        foodPrice={foodPrice}
        oldPrice={oldPrice}
      />
    </StyledFoodCard>
  );
}

export default FoodCard;
