import styled from "styled-components";

const CheckboxContainer = styled.div`
  display: inline-block;
  vertical-align: middle;
  position: relative;
`;

const HiddenCheckbox = styled.input.attrs({ type: "radio" })`
  border: 0;
  clip: rect(0 0 0 0);
  clippath: inset(50%);
  height: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
  white-space: nowrap;
  width: 1px;
`;

const StyledCheckbox = styled.div`
  display: inline-block;
  width: 2.5rem;
  height: 2.5rem;
  border: 1px solid
    ${(props) => (props.checked ? "var(--yellow-color)" : "#9ea2aa")};
  border-radius: 50%;
  transition: all 150ms;
  position: relative;

  &::after {
    content: ${(props) => (props.checked ? '""' : "none")};
    display: block;
    width: 1.5rem;
    height: 1.5rem;
    border-radius: 50%;
    background: var(--yellow-color);
    position: absolute;
    top: 50.5%;
    left: 52.5%;
    transform: translate(-50%, -50%);
  }
`;

const Checkbox = ({ isActivePaymentCard }) => (
  <CheckboxContainer>
    <HiddenCheckbox checked={isActivePaymentCard} readOnly />
    <StyledCheckbox checked={isActivePaymentCard} />
  </CheckboxContainer>
);

export default Checkbox;
