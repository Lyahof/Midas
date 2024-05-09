import styled from "styled-components";
import { useQuery } from "@tanstack/react-query";

import PhoneLink from "../../ui/PhoneLink";
import EmailLink from "../../ui/EmailLink";
import PriceBlock from "../../ui/PriceBlock";
import MealWeight from "../../ui/MealWeight";
import MainDesert from "./MainDesert";

import { GetMainMeal } from "../../services/APIMainMeal";
import formatCurrency from "../../helpers/formatCurrency";
import Spinner from "../../ui/Spinner";
import { useNavigate } from "react-router-dom";

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
  const { isLoading, data } = useQuery({
    queryKey: ["main-meal"],
    queryFn: GetMainMeal,
  });

  if (isLoading) return <Spinner />;
  const {
    id,
    foodName,
    foodWeight,
    foodDescription,
    foodPrice,
    foodImage,
    foodCategory,
  } = data[0];

  const mainDesert = data[1];

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
          <MainDesert mainDesert={mainDesert} />
        </Info>

        <ImageContainer onClick={() => navigate(`/${foodCategory}/${id}`)}>
          <Card>
            <CardTitle>{foodName}</CardTitle>
            <MealWeight variation="secondary">{foodWeight}</MealWeight>
            <CardText>{foodDescription}</CardText>
            <PriceBlock>{formatCurrency(foodPrice)}</PriceBlock>
          </Card>
          <Img src={foodImage} />
        </ImageContainer>
      </Grid>
    </>
  );
}

export default MainMeal;
