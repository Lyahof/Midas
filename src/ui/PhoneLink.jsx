import styled, { css } from "styled-components";

const sizes = {
  small: css`
    font-size: 2rem;
  `,
  big: css`
    font-size: 2.5rem;
  `,
};

const PhoneLink = styled.a`
  ${(props) => sizes[props.size]}
  transition: all 0.3s;
  &:hover,
  &:active {
    color: var(--yellow-color);
  }
`;

PhoneLink.defaultProps = {
  size: "small",
};

export default PhoneLink;
