import { useState } from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowUp } from "react-icons/io";

const NavList = styled.ul`
  display: flex;
  gap: 5rem;
  line-height: 2.4;

  @media (max-width: 86em) {
    gap: 2.5rem;
    margin-right: 7rem;
  }

  @media (max-width: 64em) {
    display: none;
  }
`;

const StyledNavLink = styled(NavLink)`
  &:link,
  &:visited {
    font-size: 1.4rem;
    display: flex;
    align-items: center;
    transition: all 0.3s;

    @media (max-width: 86em) {
      font-size: 1.2rem;
    }
  }

  &:hover,
  &:active {
    color: var(--yellow-color);
  }

  & img {
    width: 1.4rem;
    height: 1.4rem;

    @media (max-width: 86em) {
      width: 1.2rem;
      height: 1.2rem;
    }
  }
`;

const DropDownHeader = styled.div`
  position: relative;
  font-size: 1.4rem;
  cursor: pointer;
  transition: all 0.3s ease;

  & span {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    transition: all 0.3s ease;

    &:hover {
      color: var(--yellow-color);
    }
  }

  @media (max-width: 86em) {
    font-size: 1.2rem;
  }
`;

const DropDownListContainer = styled.div`
  position: absolute;
  left: 0;
  width: 25rem;
  background-color: rgba(15, 15, 17, 0.92);
  z-index: 999;

  @media (max-width: 86em) {
    width: 19rem;
  }
`;

const DropDownList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 2.3rem;
  padding: 2rem 0 2rem 2rem;
  text-transform: uppercase;
  line-height: 1.2;
`;

function MainNav() {
  const [isOpenHot, setIsOpenHot] = useState(false);
  const [isOpenCold, setIsOpenCold] = useState(false);

  /*   const handleNavLinkClick = (e) => {
    if (e.target.tagName === "A") {
      setIsOpenHot(false);
      setIsOpenCold(false);
    }
  }; */

  return (
    <nav>
      <NavList>
        <li>
          <StyledNavLink to="main/promotions">
            <span>АКЦИИ</span>
            <img src="/logo-fier.svg" alt="f" />
          </StyledNavLink>
        </li>

        <DropDownHeader
          onMouseOver={() => setIsOpenHot(true)}
          onMouseOut={() => setIsOpenHot(false)}
        >
          <span>
            ГОРЯЧЕЕ {!isOpenHot ? <IoIosArrowDown /> : <IoIosArrowUp />}
          </span>

          {isOpenHot && (
            <DropDownListContainer>
              <DropDownList /* onClick={handleNavLinkClick} */>
                <StyledNavLink to="main/hot">Горячие блюда</StyledNavLink>
                <StyledNavLink to="main/soups">Супы</StyledNavLink>
                <StyledNavLink to="main/hinkali">Хинкали</StyledNavLink>
              </DropDownList>
            </DropDownListContainer>
          )}
        </DropDownHeader>

        <DropDownHeader
          onMouseOver={() => setIsOpenCold(true)}
          onMouseOut={() => setIsOpenCold(false)}
        >
          <span>
            ХОЛОДНОЕ {!isOpenCold ? <IoIosArrowDown /> : <IoIosArrowUp />}
          </span>

          {isOpenCold && (
            <DropDownListContainer>
              <DropDownList /* onClick={handleNavLinkClick} */>
                <StyledNavLink to="main/cold">Холоднык закуски</StyledNavLink>
                <StyledNavLink to="main/salads">Салаты</StyledNavLink>
                <StyledNavLink to="main/sauces">Соусы</StyledNavLink>
              </DropDownList>
            </DropDownListContainer>
          )}
        </DropDownHeader>

        <li>
          <StyledNavLink to="main/bakery">ВЫПЕЧКА</StyledNavLink>
        </li>
        <li>
          <StyledNavLink to="main/deserts">ДЕСЕРТЫ</StyledNavLink>
        </li>
        <li>
          <StyledNavLink to="main/drinks">НАПИТКИ</StyledNavLink>
        </li>
      </NavList>
    </nav>
  );
}

export default MainNav;
