import { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { useMobBtnContent } from "../contexts/MobBtnContext";

const StyledMobileNav = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  padding: 1.5rem 2rem 1.5rem 7rem;
  height: 100vh;
  width: 100%;
  background-color: rgba(15, 15, 17, 0.92);
  backdrop-filter: blur(8px);
  -webkit-backdrop-filter: blur(8px);

  position: absolute;
  top: 7rem;
  left: 0;

  @keyframes slideDown {
    from {
      height: 0;
    }
    to {
      height: auto;
    }
  }
`;

const Input = styled.input`
  padding: 1rem 0 1rem 1.6rem;
  margin-left: -6rem;
  width: calc(100% + 7rem);
  color: #000;

  &:focus {
    outline: none;
  }

  &::placeholder {
    color: #999;
    font-size: 1.4rem;
  }
`;

const Promotion = styled.div`
  display: flex;
  align-items: center;
  gap: 3rem;

  & img {
    width: 3rem;
    height: 3rem;
  }

  &:hover {
    color: var(--yellow-color);
  }
`;

const FoodBlock = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  /*animation*/
  animation: ${({ isOpen }) => isOpen && "slideDown 0.15s linear forwards"};
`;

const FoodBlockTitle = styled.div`
  display: flex;
  align-items: center;
  color: #999999;
  gap: 3rem;
  padding: 0 9px;

  & p {
    text-transform: uppercase;
  }

  & span {
    font-size: 1rem;
    color: var(--yellow-color);
  }

  & svg {
    width: 20px;
    height: 17px;
    color: #999999;
  }
`;

const FoodNameBlock = styled.div`
  display: flex;
  align-items: center;
  gap: 2rem;
  transition: all 0.3s;
`;

const FoodName = styled(Link)`
  transition: all 0.3s;

  &:hover {
    color: var(--yellow-color);
  }
`;

const FoodImg = styled.img`
  width: 3.9rem;
  height: 3.9rem;
`;

const Line = styled.hr`
  margin-left: -6rem;
  width: calc(100% + 7rem);
  border-color: #3d3d3d;
  height: 1px;
`;

function MobileNav() {
  const [hotMenuOpen, setHotMenuOpen] = useState(false);
  const [coldMenuOpen, setColdMenuOpen] = useState(false);
  const { setIsOpenMenu } = useMobBtnContent();

  const toggleHotMenu = () => {
    setHotMenuOpen(!hotMenuOpen);
    if (coldMenuOpen) setColdMenuOpen(false);
  };

  const toggleColdMenu = () => {
    setColdMenuOpen(!coldMenuOpen);
    if (hotMenuOpen) setHotMenuOpen(false);
  };

  return (
    <>
      <StyledMobileNav>
        <Input type="text" placeholder="Поиск блюда" />
        <Promotion>
          <img src="/logo-fier.svg" alt="f" />
          <Link to="/promotions" onClick={() => setIsOpenMenu((open) => !open)}>
            Акции
          </Link>
        </Promotion>
        <Line />

        <FoodBlock isOpen={hotMenuOpen}>
          <FoodBlockTitle onClick={toggleHotMenu}>
            {hotMenuOpen ? <IoIosArrowUp /> : <IoIosArrowDown />}
            <p>Горячее</p>
            <span>3 шт</span>
          </FoodBlockTitle>

          {hotMenuOpen && (
            <>
              <FoodNameBlock>
                <FoodImg src="icons/fish.webp" alt="f" />
                <FoodName
                  to="/hot"
                  onClick={() => setIsOpenMenu((open) => !open)}
                >
                  Горячие блюда
                </FoodName>
              </FoodNameBlock>

              <FoodNameBlock>
                <FoodImg src="icons/soup.webp" alt="f" />
                <FoodName
                  to="/soups"
                  onClick={() => setIsOpenMenu((open) => !open)}
                >
                  Супы
                </FoodName>
              </FoodNameBlock>

              <FoodNameBlock>
                <FoodImg src="icons/hinkali.webp" alt="f" />
                <FoodName
                  to="/hinkali"
                  onClick={() => setIsOpenMenu((open) => !open)}
                >
                  Хинкали
                </FoodName>
              </FoodNameBlock>
            </>
          )}
        </FoodBlock>

        <Line />

        <FoodBlock isOpen={coldMenuOpen}>
          <FoodBlockTitle onClick={toggleColdMenu}>
            {hotMenuOpen ? <IoIosArrowUp /> : <IoIosArrowDown />}
            <p>Холодное</p>
            <span>3 шт</span>
          </FoodBlockTitle>

          {coldMenuOpen && (
            <>
              <FoodNameBlock>
                <FoodImg src="icons/cold.webp" alt="f" />
                <FoodName
                  to="/cold"
                  onClick={() => setIsOpenMenu((open) => !open)}
                >
                  Холодные закуски
                </FoodName>
              </FoodNameBlock>

              <FoodNameBlock>
                <FoodImg src="icons/salad.webp" alt="f" />
                <FoodName
                  to="/salads"
                  onClick={() => setIsOpenMenu((open) => !open)}
                >
                  Салаты
                </FoodName>
              </FoodNameBlock>

              <FoodNameBlock>
                <FoodImg src="icons/sauce.webp" alt="f" />
                <FoodName
                  to="/sauces"
                  onClick={() => setIsOpenMenu((open) => !open)}
                >
                  Соусы
                </FoodName>
              </FoodNameBlock>
            </>
          )}
        </FoodBlock>
        <Line />
        <FoodNameBlock>
          <FoodImg src="icons/vipechka.webp" alt="f" />
          <FoodName to="/bakery" onClick={() => setIsOpenMenu((open) => !open)}>
            Свежая выпечка
          </FoodName>
        </FoodNameBlock>
        <Line />
        <FoodNameBlock>
          <FoodImg src="icons/desert.webp" alt="f" />
          <FoodName
            to="/deserts"
            onClick={() => setIsOpenMenu((open) => !open)}
          >
            Десерты
          </FoodName>
        </FoodNameBlock>
        <Line />
        <FoodNameBlock>
          <FoodImg src="icons/drink.webp" alt="f" />
          <FoodName to="/drinks" onClick={() => setIsOpenMenu((open) => !open)}>
            Напитки
          </FoodName>
        </FoodNameBlock>
        <Line />
      </StyledMobileNav>
    </>
  );
}

export default MobileNav;
