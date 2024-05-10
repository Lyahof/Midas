import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import Breadcrumbs from "../ui/Breadcrumbs";
import { GetMenuItem } from "../services/APIMenu";
import Spinner from "../ui/Spinner";

function FoodPage() {
  const { foodId } = useParams();

  const { isLoading, data } = useQuery({
    queryKey: ["menu-item"],
    queryFn: () => GetMenuItem(foodId),
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
    oldPrice,
  } = data;

  return (
    <div>
      <p>FoodPage</p>
      <Breadcrumbs foodName={foodName} />
    </div>
  );
}

export default FoodPage;
