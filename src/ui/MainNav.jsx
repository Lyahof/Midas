import { useState } from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowUp } from "react-icons/io";

const NavList = styled.ul`
  display: flex;
  gap: 3.5rem;

  @media (max-width: 86em) {
    gap: 2.5rem;
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
  margin-bottom: -3.2rem;
  font-size: 1.4rem;
  cursor: pointer;

  & span {
    display: flex;
    align-items: center;
    gap: 0.5rem;

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
  top: 3rem;
  left: 0;
  width: 22rem;
  background-color: black;
  z-index: 999;
`;

const DropDownList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 2.3rem;
  padding: 2rem 0 2rem 2rem;
  text-transform: uppercase;
`;

function MainNav() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav>
      <NavList>
        <li>
          <StyledNavLink to="/promotions">
            <span>АКЦИИ</span>
            <img src="/logo-fier.svg" alt="f" />
          </StyledNavLink>
        </li>
        <li>
          <DropDownHeader onClick={() => setIsOpen((isOpen) => !isOpen)}>
            <div>
              <span>
                ГОРЯЧЕЕ {!isOpen ? <IoIosArrowDown /> : <IoIosArrowUp />}
              </span>
            </div>
            {isOpen && (
              <DropDownListContainer>
                <DropDownList>
                  <StyledNavLink to="hot">Горячие блюда</StyledNavLink>
                  <StyledNavLink to="soups">Супы</StyledNavLink>
                  <StyledNavLink to="hinkali">Хинкали</StyledNavLink>
                </DropDownList>
              </DropDownListContainer>
            )}
          </DropDownHeader>
        </li>
        <li>
          <StyledNavLink to="/cold">ХОЛОДНОЕ</StyledNavLink>
        </li>
        <li>
          <StyledNavLink to="/bakery">ВЫПЕЧКА</StyledNavLink>
        </li>
        <li>
          <StyledNavLink to="/deserts">ДЕСЕРТЫ</StyledNavLink>
        </li>
        <li>
          <StyledNavLink to="/drinks">НАПИТКИ</StyledNavLink>
        </li>
      </NavList>
    </nav>
  );
}

export default MainNav;
