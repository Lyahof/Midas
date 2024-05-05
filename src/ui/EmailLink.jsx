import styled, { css } from "styled-components";

const sizes = {
  small: css`
    font-size: 1.2rem;
  `,
  big: css`
    font-size: 1.8rem;
    max-width: 18.5rem;
  `,
};

const EmailLink = styled.a`
  ${(props) => sizes[props.size]}
  justify-self: end;
  transition: all 0.3s;
  border-bottom: 1px solid #ffffffa9;
  &:hover,
  &:active {
    color: var(--yellow-color);
    border-bottom: 1px solid transparent;
  }

  @media (max-width: 44em) {
    justify-self: start;
  }
`;

EmailLink.defaultProps = {
  size: "small",
};

export default EmailLink;
