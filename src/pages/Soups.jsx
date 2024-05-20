import useGetMenuItems from "../hooks/useGetMenuItems";
import Breadcrumbs from "../ui/Breadcrumbs";
import FoodCard from "../ui/FoodCard";
import FoodPageContainer from "../ui/FoodPageContainer";
import MenuBlock from "../ui/MenuBlock";
import Spinner from "../ui/Spinner";
import Title from "../ui/Title";

function Soups() {
  const { isLoading, menu } = useGetMenuItems("soups");

  if (isLoading) return <Spinner />;

  return (
    <FoodPageContainer>
      <Title align="left">Супы</Title>
      <Breadcrumbs />
      <MenuBlock>
        {menu.map((item) => (
          <FoodCard item={item} key={item.id} />
        ))}
      </MenuBlock>
    </FoodPageContainer>
  );
}

export default Soups;
