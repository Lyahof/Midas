import styled from "styled-components";
import { useMediaQuery } from "@uidotdev/usehooks";
import { RxHamburgerMenu } from "react-icons/rx";
import { MdClose } from "react-icons/md";
import { useMobBtnContent } from "../contexts/MobBtnContext";

const StyledMobileNav = styled.div`
  display: none;
  margin-right: ${({ isMobileDevice }) => (isMobileDevice ? "0" : "12rem")};
  transform: translateY(-2px);
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
`;

const BurgerText = styled.p`
  font-size: 1.2rem;
  text-transform: uppercase;
  color: ${(props) => props.isopenmenu};
`;

function MobileButton() {
  const { isOpenMenu, setIsOpenMenu } = useMobBtnContent();
  const isMobileDevice = useMediaQuery("only screen and (max-width : 37em)");

  return (
    <>
      <StyledMobileNav
        onClick={() => setIsOpenMenu((isOpenMenu) => !isOpenMenu)}
        isopenmenu={isOpenMenu ? "var(--yellow-color)" : "inherit"}
        isMobileDevice={isMobileDevice}
      >
        {!isOpenMenu ? <RxHamburgerMenu /> : <MdClose />}

        {!isMobileDevice && (
          <BurgerText
            isopenmenu={isOpenMenu ? "var(--yellow-color)" : "inherit"}
          >
            {!isOpenMenu ? "меню" : "закрыть"}
          </BurgerText>
        )}
      </StyledMobileNav>
    </>
  );
}

export default MobileButton;
