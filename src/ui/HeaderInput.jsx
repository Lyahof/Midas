import { useEffect, useRef } from "react";
import styled from "styled-components";

const StyledHeaderInput = styled.input`
  padding: 1.7rem 0 1.7rem 1rem;
  border: none;
  color: #333;
  max-width: 18rem;
  position: absolute;
  height: 100%;
  top: -1.7rem;
  right: -1rem;

  @media (max-width: 86em) {
    width: 15rem;
  }

  &:focus {
    outline: none;
  }
  &::placeholder {
    color: #999;
    font-size: 1.4rem;
  }
`;

function HeaderInput({ setIsInput }) {
  const ref = useRef();

  useEffect(
    function () {
      function handleClick(e) {
        console.log(ref.current);
        if (ref.current && !ref.current.contains(e.target)) {
          setIsInput(false);
        }
      }
      document.addEventListener("click", handleClick, true);

      return () => document.removeEventListener("click", handleClick, true);
    },
    [setIsInput]
  );

  return <StyledHeaderInput placeholder="Поиск" type="text" ref={ref} />;
}

export default HeaderInput;
