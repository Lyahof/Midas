import { createPortal } from "react-dom";
import { IoCloseOutline } from "react-icons/io5";
import styled from "styled-components";

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background-color: transparent;
  backdrop-filter: blur(6px);
  z-index: 1000;
  transition: all 0.5s;
`;

const StyledModal = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: #111;
  padding: 3rem 6rem 6rem 6rem;
  transition: all 0.5s;
  @media (max-width: 37em) {
    padding: 3rem 0;
    background-color: transparent;
  }
`;

const Button = styled.button`
  background: none;
  border: none;
  padding: 0.4rem;
  transform: translate(-1rem, 1.3rem);
  transition: all 0.2s;
  position: absolute;
  top: 1.2rem;
  right: 1.9rem;

  @media (max-width: 37em) {
    transform: translate(2rem, 1.3rem);
  }

  & svg {
    transition: all 0.3s;
    width: 2.8rem;
    height: 2.8rem;
    color: grey;
    &:hover {
      background-color: var(--yellow-color);
      border-radius: 3px;
    }
  }
`;

function Modal({ children, onClose }) {
  return createPortal(
    <Overlay>
      <StyledModal>
        <Button onClick={onClose}>
          <IoCloseOutline />
        </Button>

        {children}
      </StyledModal>
    </Overlay>,
    document.body
  );
}

export default Modal;
