import styled from "styled-components";
import Logo from "./Logo";
import MobileButton from "./MobileButton";
import Icons from "./Icons";

const StyledMobileHeader = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 2.5rem 0;
`;

function MobileHeader() {
  return (
    <StyledMobileHeader>
      <Logo />
      <MobileButton />
      <Icons />
    </StyledMobileHeader>
  );
}

export default MobileHeader;
