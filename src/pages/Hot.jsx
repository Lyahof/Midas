import { useQuery } from "@tanstack/react-query";
import styled from "styled-components";

import Title from "../ui/Title";
import Spinner from "../ui/Spinner";
import MenuBlock from "../ui/MenuBlock";
import FoodCard from "../ui/FoodCard";
import Breadcrumbs from "../ui/Breadcrumbs";
import { GetMenuItems } from "../services/APIMenu";

const StyledMenuContainer = styled.div`
  padding-bottom: 12rem;
  padding-top: 1rem;
`;

const StyledContainer = styled.div`
  margin-bottom: 5rem;
`;

function Hot() {
  const { isLoading, data: menu } = useQuery({
    queryKey: ["hot-menu"],
    queryFn: () => GetMenuItems("hot"),
  });

  if (isLoading) return <Spinner />;

  return (
    <StyledMenuContainer>
      <Title align="left">Горячие блюда</Title>
      <StyledContainer>
        <Breadcrumbs />
      </StyledContainer>
      <MenuBlock>
        {menu.map((item) => (
          <FoodCard item={item} key={item.id} />
        ))}
      </MenuBlock>
    </StyledMenuContainer>
  );
}

export default Hot;
