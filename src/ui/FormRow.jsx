import styled, { css } from "styled-components";

const directions = {
  row: css`
    flex-direction: row;
    gap: 2rem;
  `,
  column: css`
    flex-direction: column;
    gap: 1rem;
  `,
};

const StyledFormRow = styled.div`
  display: flex;
  ${(props) => directions[props.direction]};
`;

const Label = styled.label`
  @media (max-width: 48em) {
    font-size: 1rem;
  }
`;

const Error = styled.span`
  font-size: 1.3rem;
  color: #b70000;
`;

function FormRow({ label, error, children, direction }) {
  return (
    <StyledFormRow direction={direction}>
      {label && <Label /* htmlFor={children.props.id} */>{label}</Label>}
      {children}
      {error && <Error>{error}</Error>}
    </StyledFormRow>
  );
}

StyledFormRow.defaultProps = {
  direction: "row",
};

export default FormRow;
