import { useState } from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { GrBasket } from "react-icons/gr";
import { PiMagnifyingGlass } from "react-icons/pi";
import { LiaUserSolid } from "react-icons/lia";
import HeaderInput from "./HeaderInput";

const StyledIcons = styled.div`
  margin-left: auto;
  display: flex;
  align-items: center;
  gap: 3rem;

  @media (max-width: 86em) {
    gap: 2rem;
  }
`;

const StyledNavLink = styled(NavLink)`
  & svg {
    width: 2.4rem;
    height: 2.4rem;
    transition: all 0.3s;
  }

  &:hover svg,
  &:active svg {
    //&.active:link svg,
    //&.active:visited svg {
    color: var(--yellow-color);
  }
`;

const ToggleInput = styled.div`
  position: relative;
  cursor: pointer;

  & svg {
    width: 2.4rem;
    height: 2.4rem;
    transition: all 0.3s;
  }

  &:hover svg,
  &:active svg {
    //&.active:link svg,
    //&.active:visited svg {
    color: #fbd13e;
  }
  @media (max-width: 37em) {
    display: none;
  }
`;

function Icons() {
  const [isInput, setIsInput] = useState(false);

  return (
    <StyledIcons>
      <ToggleInput onClick={() => setIsInput(true)}>
        {!isInput ? <PiMagnifyingGlass /> : <HeaderInput />}
      </ToggleInput>

      <StyledNavLink to="login">
        <LiaUserSolid />
      </StyledNavLink>

      <StyledNavLink to="cart">
        <GrBasket />
      </StyledNavLink>
    </StyledIcons>
  );
}

export default Icons;
