import styled from "styled-components";
import { useQuery } from "@tanstack/react-query";
import Title from "../../ui/Title";
import FoodCard from "../../ui/FoodCard";
import Spinner from "../../ui/Spinner";
import { GetPopularMenu } from "../../services/APIMenu";

const StyledPopularFood = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4rem;
  margin-bottom: 12rem;
  @media (max-width: 48em) {
    margin-bottom: 7rem;
  }
`;

const PopularFoodItems = styled.div`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  gap: 4rem 2rem;

  @media (max-width: 86em) {
    grid-template-columns: repeat(4, 1fr);
  }

  @media (max-width: 64em) {
    grid-template-columns: repeat(3, 1fr);
    justify-items: center;
  }

  @media (max-width: 31em) {
    grid-template-columns: repeat(2, 1fr);
    justify-items: center;
  }
`;

function PopularFood() {
  const { data: popularMenu, isLoading } = useQuery({
    queryKey: ["popular-meal"],
    queryFn: GetPopularMenu,
  });

  if (isLoading) return <Spinner />;

  return (
    <StyledPopularFood>
      <Title align="center">
        Популярные
        <br />
        <span>блюда</span>
      </Title>
      <PopularFoodItems>
        {popularMenu.map((item) => (
          <FoodCard item={item} key={item.id} />
        ))}
      </PopularFoodItems>
    </StyledPopularFood>
  );
}

export default PopularFood;
