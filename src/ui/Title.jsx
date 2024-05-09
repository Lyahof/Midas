import styled, { css } from "styled-components";

const positions = {
  left: css`
    align-self: flex-start;
  `,
  center: css`
    align-self: center;
  `,
};

const Title = styled.h1`
  font-size: 8rem;
  ${(props) => positions[props.align]};

  & span {
    position: relative;
    left: -24%;
    transform: translateX(-24%);
  }

  @media (max-width: 48em) {
    align-self: flex-start;
    font-size: 6rem;
  }

  @media (max-width: 31em) {
    font-size: 4rem;
  }
`;

Title.defaultProps = {
  align: "left",
};

export default Title;
