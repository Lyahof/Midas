import { useMediaQuery } from "@uidotdev/usehooks";
import styled from "styled-components";
import Title from "../../ui/Title";
import Registration from "./Registration";
import FormRow from "../../ui/FormRow";
import Input from "../../ui/Input";
import DataFormContainer from "./DataFormContainer";

const FormFlexContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  max-width: 65rem;
  //max-width: 45rem;
  //width: 70%;
`;

const InputsBlock = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  gap: 2rem;
`;

function PersonalDataForm({ register, errors }) {
  const isMobileDevice = useMediaQuery("only screen and (max-width : 31em)");

  return (
    <DataFormContainer>
      <Title align="left" size="extraSmall">
        01. Контактные данные
      </Title>
      <FormFlexContainer>
        <Registration />

        <InputsBlock>
          <FormRow label="Email">
            <Input
              type="email"
              disabled
              placeholder={isMobileDevice ? "Email" : null}
              id="email"
              {...register("email")}
            />
          </FormRow>

          <FormRow label="имя *" error={errors?.name?.message}>
            <Input
              type="text"
              placeholder={isMobileDevice ? "имя *" : null}
              id="name"
              {...register("name", {
                required: "Поле обязательно ",
              })}
            />
          </FormRow>

          <FormRow label="телефон *" error={errors?.phoneNumber?.message}>
            <Input
              type="tel"
              placeholder={isMobileDevice ? "телефон *" : null}
              id="phoneNumber"
              {...register("phoneNumber", {
                required: "Поле обязательно",
              })}
            />
          </FormRow>

          <FormRow label="кол-во персон">
            <Input
              type="text"
              size="small"
              placeholder={isMobileDevice ? "кол-во персон" : null}
              id="peopleQuantity"
              {...register("peopleQuantity")}
            />
          </FormRow>
        </InputsBlock>
      </FormFlexContainer>
    </DataFormContainer>
  );
}

export default PersonalDataForm;
