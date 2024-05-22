import styled from "styled-components";
import Logo from "./Logo";
import MobileButton from "./MobileButton";
import Icons from "./Icons";

const StyledMobileHeader = styled.header`
  &.sticky {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    background-color: rgba(0, 0, 0, 0.95);
    z-index: 1000;
    &.sticky {
      padding: 0 2rem;
    }
  }
`;

const MobileHeaderContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 2.5rem 0;
  &.sticky {
    padding: 1rem 2rem;
  }
`;

function MobileHeader() {
  return (
    <StyledMobileHeader id="mobile-header">
      <MobileHeaderContainer>
        <Logo />
        <MobileButton />
        <Icons />
      </MobileHeaderContainer>
    </StyledMobileHeader>
  );
}

export default MobileHeader;
