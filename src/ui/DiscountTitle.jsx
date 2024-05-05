import styled, { css } from "styled-components";

const sizes = {
  big: css`
    font-size: 5.5rem;
  `,
  small: css`
    font-size: 3.8rem;
  `,
};

const DiscountTitle = styled.p`
  color: var(--sale-black);
  ${(props) => sizes[props.size]}
  letter-spacing: 5px;
`;

DiscountTitle.defaultProps = {
  size: "big",
};

export default DiscountTitle;
