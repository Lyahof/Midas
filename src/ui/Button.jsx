import styled, { css } from "styled-components";

const sizes = {
  large: css`
    padding: 1.2rem 2.5rem;
    border: none;
  `,
  small: css`
    padding: 0.8rem 2rem;
    border: 1px solid var(--yellow-color);
  `,
};

const variations = {
  primary: css`
    color: #000;
    background-color: var(--yellow-color);
    &:hover {
      background-color: #e2bc38;
    }
  `,
  secondary: css`
    color: var(--yellow-color);
    background-color: #000;
    &:hover {
      color: #e2bc38;
      border: 1px solid #e2bc38;
    }
  `,
};

const Button = styled.button`
  font-size: 1.3rem;
  line-height: 1.8;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 2px;
  ${(props) => sizes[props.size]};
  ${(props) => variations[props.variation]};
`;

Button.defaultProps = {
  variation: "primary",
  size: "large",
};

export default Button;
