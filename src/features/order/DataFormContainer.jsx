import styled from "styled-components";

const DataFormContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5rem;
  align-items: center;
  position: relative;
  margin-bottom: 6rem;
  & h1 {
    &::after {
      content: "";
      position: absolute;

      top: 4rem;
      left: 0;
      height: 1px;
      width: 100%;
      background-color: #3d3d3d;
    }
  }
`;

export default DataFormContainer;
