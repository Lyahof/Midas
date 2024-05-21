import { useQuery } from "@tanstack/react-query";
import Breadcrumbs from "../ui/Breadcrumbs";
import Spinner from "../ui/Spinner";
import FoodPageContainer from "../ui/FoodPageContainer";
import Title from "../ui/Title";
import MenuBlock from "../ui/MenuBlock";
import FoodCard from "../ui/FoodCard";
import { GetPromotions } from "../services/APIMenu";

function Promotions() {
  const { isLoading, data } = useQuery({
    queryKey: ["promotions"],
    queryFn: GetPromotions,
  });

  if (isLoading) return <Spinner />;

  return (
    <FoodPageContainer>
      <Title align="left">Акции</Title>
      <Breadcrumbs />
      <MenuBlock>
        {data.map((item) => (
          <FoodCard item={item} key={item.id} />
        ))}
      </MenuBlock>
    </FoodPageContainer>
  );
}

export default Promotions;
