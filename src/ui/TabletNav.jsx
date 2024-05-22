import styled, { css } from "styled-components";
import { Link } from "react-router-dom";

import SaleBlock from "./SaleBlock";
import MobNavBlock from "./MobNavBlock";
import { useMobBtnContent } from "../contexts/MobBtnContext";

const transforms = {
  left: css`
    transform: translateX(-1.6rem);
  `,
};

const StyledTabletNav = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr 2fr;
  gap: 4rem;
  padding: 6rem 0 0 2rem;

  position: fixed;
  top: 8rem;
  left: 0;
  align-content: start;

  background-color: rgba(15, 15, 17, 0.92);
  backdrop-filter: blur(8px);
  -webkit-backdrop-filter: blur(8px);
  width: 100%;
  height: 100vh;
  z-index: 9999;
  transition: all 0.5s;

  @media (max-width: 55em) {
    grid-template-columns: 1fr 1fr;
    padding: 4rem 3.5rem 0 3.5rem;
    gap: 3rem;
  }
`;

const FoodNameBlock = styled.div`
  display: flex;
  align-items: center;
  gap: 4rem;
`;

const FoodName = styled(Link)`
  ${(props) => transforms[props.transform]}
  font-size: 2rem;
  transition: all 0.3s;
  &:hover {
    color: var(--yellow-color);
  }
`;

function TabletNav() {
  const { setIsOpenMenu } = useMobBtnContent();

  return (
    <StyledTabletNav>
      <SaleBlock />

      <div>
        <MobNavBlock subtitle="Горячее:" paddingLeft="11rem">
          <FoodNameBlock>
            <img src="/icons/fish.webp" alt="f" />
            <FoodName
              to="main/hot"
              onClick={() => setIsOpenMenu((open) => !open)}
            >
              Горячие блюда
            </FoodName>
          </FoodNameBlock>
          <FoodNameBlock>
            <img src="/icons/soup.webp" alt="f" />
            <FoodName
              to="main/soups"
              onClick={() => setIsOpenMenu((open) => !open)}
            >
              Супы
            </FoodName>
          </FoodNameBlock>
          <FoodNameBlock>
            <img src="/icons/hinkali.webp" alt="f" />
            <FoodName
              to="main/hinkali"
              onClick={() => setIsOpenMenu((open) => !open)}
            >
              Хинкали
            </FoodName>
          </FoodNameBlock>
        </MobNavBlock>

        <MobNavBlock subtitle="Холодное:" paddingLeft="11rem">
          <FoodNameBlock>
            <img src="/icons/cold.webp" alt="f" />
            <FoodName
              to="main/cold"
              onClick={() => setIsOpenMenu((open) => !open)}
            >
              Холодные закуски
            </FoodName>
          </FoodNameBlock>
          <FoodNameBlock>
            <img src="/icons/salad.webp" alt="f" />
            <FoodName
              to="main/salads"
              onClick={() => setIsOpenMenu((open) => !open)}
            >
              Салаты
            </FoodName>
          </FoodNameBlock>
          <FoodNameBlock>
            <img src="/icons/sauce.webp" alt="f" />
            <FoodName
              to="main/sauces"
              onClick={() => setIsOpenMenu((open) => !open)}
            >
              Соусы
            </FoodName>
          </FoodNameBlock>
        </MobNavBlock>
      </div>

      <MobNavBlock subtitle="Любимое:" paddingLeft="9rem">
        <FoodNameBlock>
          <img src="/icons/vipechka.webp" alt="f" />
          <FoodName
            transform="left"
            to="main/bakery"
            onClick={() => setIsOpenMenu((open) => !open)}
          >
            Свежая выпечка
          </FoodName>
        </FoodNameBlock>
        <FoodNameBlock>
          <img src="/icons/desert.webp" alt="f" />
          <FoodName
            to="main/deserts"
            onClick={() => setIsOpenMenu((open) => !open)}
          >
            Десерты
          </FoodName>
        </FoodNameBlock>
        <FoodNameBlock>
          <img src="/icons/drink.webp" alt="f" />
          <FoodName
            to="main/drinks"
            onClick={() => setIsOpenMenu((open) => !open)}
          >
            Напитки
          </FoodName>
        </FoodNameBlock>
      </MobNavBlock>
    </StyledTabletNav>
  );
}

export default TabletNav;
