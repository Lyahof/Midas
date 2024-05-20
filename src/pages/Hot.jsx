import Title from "../ui/Title";
import Spinner from "../ui/Spinner";
import MenuBlock from "../ui/MenuBlock";
import FoodCard from "../ui/FoodCard";
import Breadcrumbs from "../ui/Breadcrumbs";
import FoodPageContainer from "../ui/FoodPageContainer";
import useGetMenuItems from "../hooks/useGetMenuItems";

function Hot() {
  const { isLoading, menu } = useGetMenuItems("hot");

  if (isLoading) return <Spinner />;

  return (
    <FoodPageContainer>
      <Title align="left">Горячие блюда</Title>
      <Breadcrumbs />
      <MenuBlock>
        {menu.map((item) => (
          <FoodCard item={item} key={item.id} />
        ))}
      </MenuBlock>
    </FoodPageContainer>
  );
}

export default Hot;
