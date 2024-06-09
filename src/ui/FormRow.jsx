import { useMediaQuery } from "@uidotdev/usehooks";
import styled, { css } from "styled-components";

const directions = {
  row: css`
    flex-direction: row;
    align-items: center;
  `,
  column: css`
    flex-direction: column;
    //gap: 1rem;
    &:not(:first-child) {
      gap: 1rem;
    }
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
  margin-right: 2rem;
  min-width: 14rem;
`;

const ErrorPlaceholder = styled.div`
  min-width: 15rem; /* Зарезервировать место */
  margin-left: 2rem;
`;

const Error = styled.span`
  font-size: 1.3rem;
  color: var(--yellow-color);
`;

function FormRow({ label, error, children, direction }) {
  const isMobileDevice = useMediaQuery("only screen and (max-width : 31em)");
  const isTabletDevice = useMediaQuery("only screen and (max-width : 48em)");

  return (
    <>
      <StyledFormRow direction={direction}>
        {label /* && !isMobileDevice */ && (
          <Label htmlFor={children.props.id}>{label}</Label>
        )}
        {children}
        {!isTabletDevice && (
          <ErrorPlaceholder>{error && <Error>{error}</Error>}</ErrorPlaceholder>
        )}
      </StyledFormRow>
    </>
  );
}

StyledFormRow.defaultProps = {
  direction: "row",
  size: "big",
};

export default FormRow;
