import { useMediaQuery } from "@uidotdev/usehooks";
import styled, { css } from "styled-components";

const directions = {
  row: css`
    flex-direction: row;
    gap: 2rem;
    align-items: center;
  `,
  column: css`
    flex-direction: column;
    gap: 1rem;
  `,
};

const StyledFormRow = styled.div`
  display: flex;
  ${(props) => directions[props.direction]};
  justify-content: space-between;
`;

const Label = styled.label`
  justify-self: start;
  color: #9ea2aa;
  @media (max-width: 48em) {
    font-size: 1rem;
  }
`;

const Error = styled.span`
  font-size: 1.3rem;
  color: #b70000;
`;

function FormRow({ label, error, children, direction }) {
  const isMobileDevice = useMediaQuery("only screen and (max-width : 31em)");

  return (
    <StyledFormRow direction={direction}>
      {label && !isMobileDevice && (
        <Label /* htmlFor={children.props.id} */>{label}</Label>
      )}
      {children}
      {error && <Error>{error}</Error>}
    </StyledFormRow>
  );
}

StyledFormRow.defaultProps = {
  direction: "row",
  size: "big",
};

export default FormRow;
