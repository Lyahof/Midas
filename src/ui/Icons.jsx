import { useState } from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { useMediaQuery } from "@uidotdev/usehooks";
import { LuPhoneOutgoing } from "react-icons/lu";
import { PiMagnifyingGlass } from "react-icons/pi";
import { RiUserLine } from "react-icons/ri";
import HeaderInput from "./HeaderInput";
import CartIcon from "../features/cart/CartIcon";
import Modal from "./Modal";
import Login from "../features/authentication/Login";
import { useUser } from "../features/authentication/useUser";
import { useOpenCloseModalContext } from "../contexts/OpenCloseModalContext";

const StyledIcons = styled.div`
  display: flex;
  align-items: center;
  gap: 4rem;

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
    color: #fbd13e;
  }
`;

const PhoneLink = styled.a`
  & svg {
    width: 2.4rem;
    height: 2.4rem;
    transition: all 0.3s;
  }
`;

const PiMagnifyingGlassCont = styled.div`
  position: absolute;
  left: -2rem;
  top: 50%;
  transform: translateY(-50%);
`;

function Icons() {
  const [isInput, setIsInput] = useState(false);
  const { isOpenModal, setIsOpenModal } = useOpenCloseModalContext();
  const { isAuthenticated } = useUser();
  const isMobileDevice = useMediaQuery("only screen and (max-width : 37em)");

  return (
    <StyledIcons>
      {isMobileDevice ? (
        <PhoneLink href="tel:+74998416729">
          <LuPhoneOutgoing />
        </PhoneLink>
      ) : (
        <ToggleInput onClick={() => setIsInput(true)}>
          {!isInput ? (
            <PiMagnifyingGlassCont>
              <PiMagnifyingGlass />
            </PiMagnifyingGlassCont>
          ) : (
            <HeaderInput setIsInput={setIsInput} />
          )}
        </ToggleInput>
      )}

      {isAuthenticated ? (
        <StyledNavLink to="/main/account">
          <RiUserLine />
        </StyledNavLink>
      ) : (
        <StyledNavLink
          onClick={() => setIsOpenModal((isOpenModal) => !isOpenModal)}
        >
          <RiUserLine />
        </StyledNavLink>
      )}

      {isOpenModal && (
        <Modal onClose={() => setIsOpenModal(false)}>
          <Login />
        </Modal>
      )}
      <CartIcon />
    </StyledIcons>
  );
}

export default Icons;
