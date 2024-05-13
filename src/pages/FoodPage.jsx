import { useEffect, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";

import Breadcrumbs from "../ui/Breadcrumbs";
import Title from "../ui/Title";
import styled from "styled-components";
import MealWeight from "../ui/MealWeight";
import PriceBlock from "../ui/PriceBlock";
import FoodCard from "../ui/FoodCard";
import formatCurrency from "../helpers/formatCurrency";
import MenuBlock from "../ui/MenuBlock";
import { GetMenuItem } from "../services/APIMenu";

const FoodContainer = styled.div`
  display: grid;
  grid-template-columns: 40fr 50fr;
  gap: 5rem;
  padding-top: 3.5rem;
  margin-bottom: 8rem;

  @media (max-width: 64em) {
    grid-template-columns: 1fr;
  }

  @media (max-width: 28em) {
    padding-top: 2.5rem;
    gap: 2rem;
    margin-bottom: 5rem;
  }
`;

const ImageContainer = styled.div`
  overflow: hidden;
`;

const Img = styled.img`
  width: 100%;
`;

const ProductCard = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 1rem;
  padding: 2.4rem 2.4rem 2.4rem 2.4rem;
  background-color: #000;

  @media (max-width: 28em) {
    flex-direction: column;
    padding: 1rem 1.5rem 1.5rem 1.5rem;
  }
`;

const LeftBlock = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;

  @media (max-width: 28em) {
    flex-direction: row-reverse;
    justify-content: flex-end;
  }
`;

const RightBlock = styled.div`
  display: flex;
  align-items: center;
  gap: 9rem;

  @media (max-width: 86em) {
    gap: 3rem;
  }

  @media (max-width: 28em) {
    justify-content: space-evenly;
  }
`;

const QuantityBlock = styled.div`
  width: 8.2rem;
  height: 4.6rem;
  border: 1px solid #9ea2aa;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const BtnPlus = styled.button`
  background-color: #000;
  border: none;
  color: white;
  cursor: pointer;
  font-size: 2.5rem;
  font-weight: 400;
  line-height: 0.9;
  transition: all 0.3s;
  margin-right: -8px;

  &:hover {
    color: var(--yellow-color);

    & div {
      border: 1px solid var(--yellow-color);
    }
  }
`;

const BtnMinus = styled.button`
  background-color: #000;
  border: none;
  color: white;
  cursor: pointer;
  font-size: 2.5rem;
  line-height: 0.9;
  font-weight: 400;
  transition: all 0.3s;
  margin-left: -6px;

  &:hover {
    color: var(--yellow-color);
  }
`;

const Quantity = styled.p`
  font-size: 1.3rem;
`;

const FoodTitle = styled.p`
  font-size: 2rem;

  @media (max-width: 28em) {
    font-size: 1.5rem;
  }
`;

const DescriptionContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5rem;

  @media (max-width: 28em) {
    gap: 2rem;
  }
`;

const ProductCardContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3rem;
`;

const DescriptionBlock = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.1rem;
`;

const DescriptionTitle = styled.p`
  text-transform: uppercase;
  letter-spacing: 1.5px;
  opacity: 60%;

  @media (max-width: 28em) {
    font-size: 1.1rem;
  }
`;

const DescriptionText = styled.p`
  line-height: 1.4;
  opacity: 80%;

  @media (max-width: 28em) {
    font-size: 1.2rem;
    line-height: 1.6;
  }
`;

const HitTitle = styled.h2`
  font-size: 5rem;
  margin-bottom: 3rem;

  @media (max-width: 28em) {
    font-size: 2.5rem;
  }
`;

const Bestseller = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 12rem;

  @media (max-width: 28em) {
    margin-bottom: 5rem;
  }
`;

function FoodPage() {
  const { foodId } = useParams();
  const [quantity, setQuantity] = useState(1);
  const [totalPrice, setTotalPrice] = useState(0);

  const { isLoading, data } = useQuery({
    queryKey: ["menu-item"],
    queryFn: () => GetMenuItem(foodId),
  });

  const { id, foodName, foodWeight, foodDescription, foodPrice, foodImage } =
    data?.find((item) => Number(foodId) === item.id) || {};

  function handlePlus() {
    setQuantity((prev) => prev + 1);
  }

  function handleMinus() {
    if (quantity === 1) return;
    setQuantity((prev) => prev - 1);
  }

  useEffect(
    function () {
      const sum = foodPrice * quantity;
      setTotalPrice(sum);
    },
    [foodPrice, quantity]
  );

  const bestsellers = data?.filter((bestseller, index, arr) => {
    return arr.findIndex((item) => item.id === bestseller.id) === index;
  });

  return (
    <>
      <Title align="left">{foodName}</Title>
      <Breadcrumbs foodName={foodName} />
      <FoodContainer>
        <ImageContainer>
          <Img src={foodImage} />
        </ImageContainer>

        <DescriptionContainer>
          <ProductCardContainer>
            <DescriptionTitle>
              Введите заказываемое количество:
            </DescriptionTitle>
            <ProductCard>
              <LeftBlock>
                <FoodTitle>{foodName}</FoodTitle>
                <MealWeight>{foodWeight} г</MealWeight>
              </LeftBlock>

              <RightBlock>
                <QuantityBlock>
                  <BtnMinus onClick={handleMinus}>-</BtnMinus>
                  <Quantity>{quantity} шт</Quantity>
                  <BtnPlus onClick={handlePlus}>+</BtnPlus>
                </QuantityBlock>
                <PriceBlock marginTop="0">
                  {totalPrice
                    ? formatCurrency(totalPrice)
                    : formatCurrency(foodPrice)}
                </PriceBlock>
              </RightBlock>
            </ProductCard>
          </ProductCardContainer>

          <DescriptionBlock>
            <DescriptionTitle>Описание:</DescriptionTitle>
            <DescriptionText>{foodDescription}</DescriptionText>
          </DescriptionBlock>
        </DescriptionContainer>
      </FoodContainer>

      <Bestseller>
        <HitTitle>Хиты заказов</HitTitle>
        <MenuBlock>
          {bestsellers?.map((bestseller) => (
            <FoodCard key={bestseller.id} item={bestseller} />
          ))}
        </MenuBlock>
      </Bestseller>
    </>
  );
}

export default FoodPage;
