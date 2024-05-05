import styled, { css } from "styled-components";

const variations = {
  primary: css`
    background-color: #777;
  `,
  secondary: css`
    background-color: #cd4d4d;
  `,
};

const MealWeight = styled.div`
  max-width: 5rem;
  font-size: 1.3rem;
  border-radius: 4px;
  padding: 0.5rem 1rem 0.5rem 0.5rem;
  ${(props) => variations[props.variation]}
`;

MealWeight.defaultProps = {
  variation: "primary",
};

export default MealWeight;
