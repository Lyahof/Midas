import styled from "styled-components";
import Title from "../../ui/Title";
import DataFormContainer from "./DataFormContainer";
import DeliveryCard from "./DeliveryCard";
import FormRow from "../../ui/FormRow";
import Input from "../../ui/Input";
import Textarea from "../../ui/Textarea";
import { useActivateDelivery } from "../../contexts/ActivateDeliveryContext";
import { useMediaQuery } from "@uidotdev/usehooks";

const deliveryData = [
  {
    title: "Доставка по городу",
    deliveryPrice: "300",
    text: "Доставка по Москве в пределах МКАД Осуществляется: ежедневно с 12:00 до 00:00, Диапозон времени: от 1 до 1.5 часовДоступен с 12:00 до 00:00 По адресу ул. Улофа Пальме 5с2",
  },
  {
    title: "Самовывоз",
    deliveryPrice: "0",
    text: "Доступен с 12:00 до 00:00 По адресу ул. Улофа Пальме 5с2",
  },
];

const DeliveryCardBox = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 3rem;
  align-self: start;
  @media (max-width: 37em) {
    grid-template-columns: 1fr;
    gap: 1rem;
  }
`;

const InputsBlock = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  gap: 2rem;
`;

function DeliveryDataForm({ register, required, errors }) {
  const { isActiveCard, setIsActiveCard } = useActivateDelivery();
  const isMobileDevice = useMediaQuery("only screen and (max-width : 31em)");

  return (
    <DataFormContainer>
      <Title align="left" size="extraSmall">
        02. Способ доставки
      </Title>

      <DeliveryCardBox>
        {deliveryData.map((card, index) => (
          <DeliveryCard
            key={card.title}
            card={card}
            onClick={() => setIsActiveCard(index)}
            isActiveCard={isActiveCard === index}
          />
        ))}
      </DeliveryCardBox>

      {isActiveCard === 0 && (
        <InputsBlock>
          <FormRow label="улица *" error={errors?.street?.message}>
            <Input
              type="text"
              placeholder={isMobileDevice ? "улица *" : null}
              id="street"
              {...register("street", {
                required: "Поле обязательно",
              })}
            />
          </FormRow>
          <FormRow label="дом *" error={errors?.house?.message}>
            <Input
              type="text"
              size="small"
              placeholder={isMobileDevice ? "дом *" : null}
              id="house"
              {...register("house", {
                required: "Поле обязательно",
              })}
            />
          </FormRow>
          <FormRow label="квартира">
            <Input
              type="text"
              size="small"
              placeholder={isMobileDevice ? "квартира" : null}
              id="apartmentNum"
              {...register("apartmentNum")}
            />
          </FormRow>
          <FormRow label="комментарий">
            <Textarea
              rows="5"
              cols="40"
              placeholder={isMobileDevice ? "комментарий" : null}
              id="comment"
              {...register("comment")}
            />
          </FormRow>
        </InputsBlock>
      )}
    </DataFormContainer>
  );
}

export default DeliveryDataForm;
