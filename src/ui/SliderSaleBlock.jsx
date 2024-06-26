import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import DiscountTitle from "./DiscountTitle";

const Sale = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 6.2rem;
  justify-content: space-between;
  padding: 1.5rem 2rem;
  background-color: var(--red-color);
  width: 22rem;
  cursor: pointer;
  transition: all 0.3s;

  &:hover {
    background-color: #a50000;
  }

  @media (max-width: 30em) {
    max-width: 15rem;
    height: 20rem;
    gap: 0;
    padding: 0;
  }
`;

const Text = styled.div`
  display: flex;
  align-items: center;
  gap: 3px;
  font-size: 2rem;
  text-transform: uppercase;
  transition: all 0.3s;

  &:hover {
    color: var(--yellow-color);
  }
  @media (max-width: 30em) {
    font-size: 1.6rem;
  }
`;

function SliderSaleBlock() {
  const navigate = useNavigate();

  return (
    <Sale onClick={() => navigate("/main/promotions")}>
      <DiscountTitle>30%</DiscountTitle>
      <Text>
        <p>Акции</p>
        <img src="/logo-fier.svg" alt="f" />
      </Text>
      <DiscountTitle>20%</DiscountTitle>
    </Sale>
  );
}

export default SliderSaleBlock;
