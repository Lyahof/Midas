import Spinner from "../ui/Spinner";
import FoodPageContainer from "../ui/FoodPageContainer";
import Title from "../ui/Title";
import Breadcrumbs from "../ui/Breadcrumbs";
import MenuBlock from "../ui/MenuBlock";
import FoodCard from "../ui/FoodCard";
import useGetMenuItems from "../hooks/useGetMenuItems";

function Hinkali() {
  const { isLoading, menu } = useGetMenuItems("hinkali");

  if (isLoading) return <Spinner />;

  return (
    <FoodPageContainer>
      <Title align="left">Хинкали</Title>
      <Breadcrumbs />
      <MenuBlock>
        {menu.map((item) => (
          <FoodCard item={item} key={item.id} />
        ))}
      </MenuBlock>
    </FoodPageContainer>
  );
}

export default Hinkali;
