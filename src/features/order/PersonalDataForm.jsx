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
  max-width: 45rem;
`;

const InputsBlock = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

function PersonalDataForm() {
  const isMobileDevice = useMediaQuery("only screen and (max-width : 31em)");
  return (
    <DataFormContainer>
      <Title align="left" size="extraSmall">
        01. Контактные данные
      </Title>
      <FormFlexContainer>
        <Registration />
        <InputsBlock>
          <FormRow label="имя *">
            <Input type="text" placeholder={isMobileDevice ? "имя *" : null} />
          </FormRow>
          <FormRow label="телефон *">
            <Input
              type="text"
              placeholder={isMobileDevice ? "телефон *" : null}
            />
          </FormRow>
          <FormRow label="Email">
            <Input type="text" placeholder={isMobileDevice ? "Email" : null} />
          </FormRow>
          <FormRow label="кол-во персон">
            <Input
              type="text"
              size="small"
              placeholder={isMobileDevice ? "кол-во персон" : null}
            />
          </FormRow>
        </InputsBlock>
      </FormFlexContainer>
    </DataFormContainer>
  );
}

export default PersonalDataForm;
