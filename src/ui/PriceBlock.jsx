import styled from "styled-components";
import { GrBasket } from "react-icons/gr";

const StyledPriceBlock = styled.div`
  display: flex;
  align-items: center;
  gap: 2rem;
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
`;

function PriceBlock({ children }) {
  return (
    <StyledPriceBlock>
      <Price>{children}</Price>
      <StyledBasket>
        <GrBasket />
      </StyledBasket>
    </StyledPriceBlock>
  );
}

export default PriceBlock;
