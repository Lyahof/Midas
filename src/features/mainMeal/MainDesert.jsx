import styled from "styled-components";
import MealWeight from "../../ui/MealWeight";
import PriceBlock from "../../ui/PriceBlock";
import formatCurrency from "../../helpers/formatCurrency";
import { useNavigate } from "react-router-dom";

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

function MainDesert({ mainDesert }) {
  const navigate = useNavigate();
  const { id, foodName, foodWeight, foodPrice, foodImage, foodCategory } =
    mainDesert;

  return (
    <StyledMainDesert onClick={() => navigate(`/${foodCategory}/${id}`)}>
      <ImageContainer>
        <Img src={foodImage} />
      </ImageContainer>
      <InfoContainer>
        <DesertTitle>{foodName}</DesertTitle>
        <MealWeight>{foodWeight} г</MealWeight>
        <PriceBlock>{formatCurrency(foodPrice)}</PriceBlock>
      </InfoContainer>
    </StyledMainDesert>
  );
}

export default MainDesert;
