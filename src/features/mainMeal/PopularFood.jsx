import styled from "styled-components";
import { useQuery } from "@tanstack/react-query";
import Title from "../../ui/Title";
import FoodCard from "../../ui/FoodCard";
import Spinner from "../../ui/Spinner";
import { GetPopularMenu } from "../../services/APIMenu";
import MenuBlock from "../../ui/MenuBlock";

const StyledPopularFood = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4rem;
  margin-bottom: 12rem;
  @media (max-width: 48em) {
    margin-bottom: 7rem;
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
      <MenuBlock>
        {popularMenu.map((item) => (
          <FoodCard item={item} key={item.id} />
        ))}
      </MenuBlock>
    </StyledPopularFood>
  );
}

export default PopularFood;
