import { Link } from "react-router-dom";
import styled from "styled-components";

const StyledLink = styled(Link)`
  display: block;
  width: 17rem;
  @media (max-width: 37em) {
    width: 10rem;
  }
`;

function Logo() {
  return (
    <StyledLink to="/">
      <img src="/logo.svg" alt="logo" />
    </StyledLink>
  );
}

export default Logo;
