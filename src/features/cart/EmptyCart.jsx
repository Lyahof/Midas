import styled from "styled-components";
import Button from "../../ui/Button";
import { useNavigate } from "react-router-dom";

const StyledEmptyCart = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 4rem;
  margin-top: 8rem;
`;
const EmptyCartTitle = styled.p`
  font-size: 4rem;
  opacity: 50%;
  text-align: center;
  @media (max-width: 28em) {
    font-size: 2.5rem;
  }
`;

function EmptyCart() {
  const navigate = useNavigate();

  return (
    <StyledEmptyCart>
      <EmptyCartTitle>Ваша корзина пока пустая...</EmptyCartTitle>
      <Button onClick={() => navigate("/main")}>Перейти в меню</Button>
    </StyledEmptyCart>
  );
}

export default EmptyCart;
