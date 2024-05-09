import styled from "styled-components";
import Logo from "./Logo";
import MainNav from "./MainNav";
import Icons from "./Icons";
import MobileButton from "./MobileButton";

const StyledHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 4rem 0 3rem 0;

  @media (max-width: 86em) {
    gap: 3rem;
  }
  @media (max-width: 37em) {
    margin: 3rem 0 2rem 0;
  }
`;

function Header() {
  return (
    <StyledHeader>
      <Logo />
      <MainNav />
      <MobileButton />
      <Icons />
    </StyledHeader>
  );
}

export default Header;
