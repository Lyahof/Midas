import styled from "styled-components";
import { RxHamburgerMenu } from "react-icons/rx";
import { MdClose } from "react-icons/md";
import { useMobBtnContent } from "../contexts/MobBtnContext";

const StyledMobileNav = styled.div`
  display: none;
  & svg {
    width: 2.8rem;
    height: 2.8rem;
    color: ${(props) => props.isopenmenu};
  }

  @media (max-width: 64em) {
    display: flex;
    align-items: center;
    gap: 1.2rem;
  }
  @media (max-width: 37em) {
    transform: translateX(-10px);
  }
`;

const BurgerText = styled.p`
  font-size: 1.2rem;
  text-transform: uppercase;
  color: ${(props) => props.isopenmenu};

  @media (max-width: 37em) {
    display: none;
  }
`;

function MobileButton() {
  const { isOpenMenu, setIsOpenMenu } = useMobBtnContent();

  return (
    <>
      <StyledMobileNav
        onClick={() => setIsOpenMenu((isOpenMenu) => !isOpenMenu)}
        isopenmenu={isOpenMenu ? "var(--yellow-color)" : "inherit"}
      >
        {!isOpenMenu ? <RxHamburgerMenu /> : <MdClose />}

        <BurgerText isopenmenu={isOpenMenu ? "var(--yellow-color)" : "inherit"}>
          {!isOpenMenu ? "меню" : "закрыть"}
        </BurgerText>
      </StyledMobileNav>
    </>
  );
}

export default MobileButton;
