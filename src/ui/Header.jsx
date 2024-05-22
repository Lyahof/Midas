import styled from "styled-components";
import Logo from "./Logo";
import MainNav from "./MainNav";
import Icons from "./Icons";
import MobileButton from "./MobileButton";

const StyledHeader = styled.header`
  &.sticky {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    width: 100%;
    background-color: rgba(0, 0, 0, 0.95);
    z-index: 1000;
  }
`;

const HeaderContainer = styled.div`
  max-width: 154rem;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 4rem 0 3rem 0;

  &.sticky {
    margin: 0 auto;
    padding: 2.5rem 2rem;
  }

  @media (max-width: 86em) {
    gap: 3rem;
  }
  @media (max-width: 37em) {
    margin: 3rem 0 2rem 0;
  }
`;

function Header() {
  return (
    <StyledHeader id="header">
      <HeaderContainer>
        <Logo />
        <MainNav />
        <MobileButton />
        <Icons />
      </HeaderContainer>
    </StyledHeader>
  );
}

export default Header;
