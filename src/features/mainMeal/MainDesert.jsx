import styled from "styled-components";
import MealWeight from "../../ui/MealWeight";
import PriceBlock from "../../ui/PriceBlock";
import formatCurrency from "../../helpers/formatCurrency";

const StyledMainDesert = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  @media (max-width: 64em) {
    display: none;
  }
`;

const ImageContainer = styled.div`
  max-width: 26rem;
`;

const Img = styled.img`
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
`;

function MainDesert({ mainDesert }) {
  const { name, weight, price, image } = mainDesert;

  return (
    <StyledMainDesert>
      <ImageContainer>
        <Img src={image} />
      </ImageContainer>
      <InfoContainer>
        <DesertTitle>{name}</DesertTitle>
        <MealWeight>{weight} г</MealWeight>
        <PriceBlock>{formatCurrency(price)}</PriceBlock>
      </InfoContainer>
    </StyledMainDesert>
  );
}

export default MainDesert;
