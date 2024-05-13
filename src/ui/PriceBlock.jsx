import styled from "styled-components";
import { GrBasket } from "react-icons/gr";

const StyledPriceBlock = styled.div`
  display: flex;
  align-items: center;
  gap: 2rem;
  //margin-top: auto;
  margin-top: ${(props) => props.marginTop || "auto"};
  padding-left: 5px;
`;

const StyledBasket = styled.button`
  background-color: var(--yellow-color);
  padding: 9px 8px;
  transition: all, 0.3s;
  & svg {
    color: #000;
  }
  &:hover {
    background-color: #e2bc38;
  }
`;

const Price = styled.p`
  font-size: 2.3rem;
  font-weight: 800;
  width: 11rem; //Проверить в адаптиве
  @media (max-width: 48em) {
    font-size: 1.7rem;
    width: 7rem; //Проверить в адаптиве
  }
`;

function PriceBlock({ children, marginTop, onClick }) {
  return (
    <StyledPriceBlock marginTop={marginTop}>
      <Price>{children}</Price>
      <StyledBasket onClick={onClick}>
        <GrBasket />
      </StyledBasket>
    </StyledPriceBlock>
  );
}

export default PriceBlock;
