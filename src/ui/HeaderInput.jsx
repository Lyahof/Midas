import styled from "styled-components";

const StyledHeaderInput = styled.input`
  display: block;
  padding: 1.8rem 0 1.8rem 1rem;
  border: none;
  color: #333;
  max-width: 22rem;
  position: absolute;
  height: 100%;
  top: -2rem;
  right: -1rem;

  @media (max-width: 86em) {
    width: 12rem;
  }

  &:focus {
    outline: none;
  }
  &::placeholder {
    color: #999;
    font-size: 1.4rem;
  }
`;

function HeaderInput() {
  return <StyledHeaderInput placeholder="Поиск" type="text" />;
}

export default HeaderInput;
