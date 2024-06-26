import { Link } from "react-router-dom";
import styled from "styled-components";
import { useOpenCloseModalContext } from "../../contexts/OpenCloseModalContext";
import { useUser } from "../authentication/useUser";

const StyledRegistration = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
  max-width: 33rem;
`;

const StyledRegistrationLink = styled(Link)`
  font-size: 1.5rem;
  border-bottom: 1px solid #fff;
  transition: all 0.3s;
  align-self: start;
  &:hover {
    color: var(--yellow-color);
    border-bottom: 1px solid var(--yellow-color);
  }
`;

const RegistrationText = styled.p`
  font-size: 1.2rem;
  color: #9ea2aa;
`;

function Registration() {
  const { user } = useUser();
  const { setIsOpenModal } = useOpenCloseModalContext();

  return (
    <StyledRegistration>
      {!user ? (
        <StyledRegistrationLink onClick={() => setIsOpenModal(true)}>
          Уже покупали у нас?
        </StyledRegistrationLink>
      ) : (
        <StyledRegistrationLink to="/main/account">
          Уже покупали у нас?
        </StyledRegistrationLink>
      )}
      <RegistrationText>
        Войдите в личный кабинет, и все ваши данный автоматически заполнятся
      </RegistrationText>
    </StyledRegistration>
  );
}

export default Registration;
