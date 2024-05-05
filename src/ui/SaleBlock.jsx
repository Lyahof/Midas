import { Link } from "react-router-dom";
import styled from "styled-components";
import DiscountTitle from "./DiscountTitle";

const Sale = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  align-self: start;
  gap: 3rem;
  padding: 1.5rem 2rem;
  background-color: var(--red-color);

  @media (max-width: 55em) {
    grid-column: 1 / -1;
    flex-direction: row;
    justify-content: space-between;
  }
`;

const Text = styled.p`
  display: flex;
  align-items: center;
  gap: 3px;
  font-size: 2rem;
  text-transform: uppercase;
  transition: all 0.3s;

  &:hover {
    color: var(--yellow-color);
  }
`;

function SaleBlock() {
  return (
    <>
      <Sale>
        <DiscountTitle>30%</DiscountTitle>
        <Text>
          <Link to="/promotions">Акции</Link>
          <img src="/logo-fier.svg" alt="f" />
        </Text>
        <DiscountTitle>20%</DiscountTitle>
      </Sale>
    </>
  );
}

export default SaleBlock;
