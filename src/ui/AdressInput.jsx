import styled from "styled-components";

const StyledAdressInput = styled.div`
  height: 4.5rem;
`;

const InputLabel = styled.label`
  position: relative;
`;

const InputTitle = styled.span`
  font-size: 1rem;
  position: absolute;
  top: -12px;
  left: 4px;
  white-space: nowrap;
  color: #000;
`;

function AdressInput({ title, children }) {
  return (
    <StyledAdressInput>
      <InputLabel>
        <InputTitle>{title}</InputTitle>
        {children}
      </InputLabel>
    </StyledAdressInput>
  );
}

export default AdressInput;
