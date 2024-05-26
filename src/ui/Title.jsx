import styled, { css } from "styled-components";

const positions = {
  left: css`
    align-self: flex-start;
  `,
  center: css`
    align-self: center;
  `,
};

const sizes = {
  big: css`
    font-size: 7rem;
    @media (max-width: 48em) {
      align-self: flex-start;
      font-size: 6rem;
    }

    @media (max-width: 31em) {
      font-size: 4rem;
    }
  `,
  small: css`
    font-size: 5rem;
    @media (max-width: 31em) {
      font-size: 3rem;
    }
  `,
  extraSmall: css`
    font-size: 2.5rem;
    @media (max-width: 31em) {
      font-size: 2rem;
    }
  `,
};

const Title = styled.h1`
  ${(props) => sizes[props.size]};
  ${(props) => positions[props.align]};
  line-height: 1;
  //position: relative;

  & span {
    position: relative;
    left: -24%;
    transform: translateX(-24%);
  }

  /*   @media (max-width: 48em) {
    align-self: flex-start;
    font-size: 6rem;
  }

  @media (max-width: 31em) {
    font-size: 4rem;
  } */
`;

Title.defaultProps = {
  align: "left",
  size: "big",
};

export default Title;
