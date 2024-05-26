import styled, { css } from "styled-components";

const sizes = {
  big: css`
    width: 32rem;
  `,
  small: css`
    width: 14rem;
  `,
};

const Input = styled.input`
  color: #9ea2aa;
  text-transform: uppercase;
  border: none;
  outline: none;
  padding: 1.3rem 1rem;
  ${(props) => sizes[props.size]};
`;

Input.defaultProps = {
  size: "big",
};

export default Input;
