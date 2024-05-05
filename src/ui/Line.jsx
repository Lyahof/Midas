import styled from "styled-components";

const Line = styled.p`
  max-width: ${(props) => props.width || "auto"};
  margin: 0 auto;
  height: 1px;
  background-color: #ffffff49;
`;

export default Line;
