import { Link } from "react-router-dom";
import styled from "styled-components";

const StyledLogo = styled.div`
  & img {
    @media (max-width: 37em) {
      width: 80%;
    }
  }
`;

function Logo() {
  return (
    <Link to="/">
      <StyledLogo>
        <img src="/logo.svg" alt="logo" />
      </StyledLogo>
    </Link>
  );
}

export default Logo;
