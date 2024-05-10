import styled from "styled-components";

const MenuBlock = styled.div`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  gap: 4rem 2rem;

  @media (max-width: 86em) {
    grid-template-columns: repeat(4, 1fr);
  }

  @media (max-width: 64em) {
    grid-template-columns: repeat(3, 1fr);
    justify-items: center;
  }

  @media (max-width: 31em) {
    grid-template-columns: repeat(2, 1fr);
    justify-items: center;
  }
`;

export default MenuBlock;
