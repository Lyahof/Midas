import { useEffect, useState } from "react";
import styled from "styled-components";
import Title from "../../ui/Title";
import FormRow from "../../ui/FormRow";
import Input from "../../ui/Input";
import useLogin from "./useLogin";
import Button from "../../ui/Button";
import SpinnerMini from "../../ui/SpinnerMini";
import Form from "../../ui/Form";
import { useOpenCloseModalContext } from "../../contexts/OpenCloseModalContext";

const ButtonTextContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
`;

function Login() {
  const [email, setEmail] = useState("");
  const { isOpenModal, setIsOpenModal } = useOpenCloseModalContext();
  const { mutate, isPending, isSuccess } = useLogin(); //Записывает нового

  useEffect(
    function () {
      isSuccess && setIsOpenModal(false);
    },
    [isOpenModal, setIsOpenModal, isSuccess]
  );

  function handleSubmit(e) {
    e.preventDefault();
    if (!email) return;
    mutate(email);
  }
  return (
    <Form onSubmit={handleSubmit}>
      <Title align="left" size="extraSmall">
        Вход
      </Title>
      <FormRow label="ваша почта" direction="column">
        <Input
          type="email"
          placeholder="Email *"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </FormRow>
      <Button disabled={isPending}>
        {isPending ? (
          <ButtonTextContainer>
            <span>Войти</span> <SpinnerMini />
          </ButtonTextContainer>
        ) : (
          "Войти"
        )}
      </Button>
    </Form>
  );
}

export default Login;
