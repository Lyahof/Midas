import { useForm } from "react-hook-form";
import { useMediaQuery } from "@uidotdev/usehooks";
import styled from "styled-components";
import Breadcrumbs from "../ui/Breadcrumbs";
import Form from "../ui/Form";
import FormRow from "../ui/FormRow";
import Input from "../ui/Input";
import Title from "../ui/Title";
import Button from "../ui/Button";
import AdressInput from "../ui/AdressInput";
import useUpdateUserData from "../features/authentication/useUpdateUserData";
import useUserOrders from "../features/order/useUserOrders";
import OrderHistoryTable from "../features/account/OrderHistoryTable";
import { useUserProfileData } from "../features/authentication/useUserProfileData";

const StyledAccount = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6rem;
  margin-bottom: 6rem;
  position: relative;

  &::after {
    content: "";
    position: absolute;
    background-image: url("/background-images/plate-1.webp");
    top: 8rem;
    right: -32rem;
    width: 40rem;
    height: 40rem;
    background-size: cover;
    background-repeat: no-repeat;
    transform: rotate(45deg);
    z-index: -1;
  }

  &::before {
    content: "";
    position: absolute;
    background-image: url("/background-images/plate-2.webp");
    top: 26rem;
    right: 25rem;
    width: 40rem;
    height: 40rem;
    background-size: cover;
    background-repeat: no-repeat;
    transform: rotate(45deg);
    z-index: -1;
  }
`;

const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  padding-top: 2rem;
  @media (max-width: 31em) {
    align-items: center;
    padding-top: 0rem;
  }
`;

const AdressBlock = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  max-width: 32rem;
  gap: 8px;
  transform: translateX(16rem);
  @media (max-width: 31em) {
    transform: translateX(0);
  }
`;

function Account() {
  const isMobileDevice = useMediaQuery("only screen and (max-width : 31em)");
  const {
    handleSubmit,
    register,
    setValue,
    formState: { errors },
  } = useForm();

  const { updateData, isPending } = useUpdateUserData();
  const { user, userProfile, isLoading } = useUserProfileData(setValue);
  const { userOrders, isReceivingOrders } = useUserOrders(user?.id);

  function onSubmit(data) {
    updateData(data);
  }

  return (
    <StyledAccount>
      <div>
        <Title align="left" size="small">
          Персональные данные
        </Title>
        <Breadcrumbs />
        <FormContainer>
          <Form onSubmit={handleSubmit(onSubmit)}>
            <Input hidden {...register("userId")} />
            <FormRow label="Почта *">
              <Input type="text" disabled {...register("email")} />
            </FormRow>
            <FormRow label="имя *" error={errors?.name?.message}>
              <Input
                type="text"
                placeholder={isMobileDevice ? "имя *" : null}
                id="name"
                {...register("name", {
                  required: "Поле обязательно",
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
            <AdressBlock>
              <AdressInput title="дом *">
                <Input
                  type="text"
                  size="none"
                  id="house"
                  {...register("house", {
                    required: "Поле обязательно",
                  })}
                />
              </AdressInput>
              <AdressInput title="квартира">
                <Input
                  type="text"
                  size="none"
                  id="apartmentNum"
                  {...register("apartmentNum")}
                />
              </AdressInput>
              <AdressInput title="подъезд">
                <Input
                  type="text"
                  size="none"
                  id="entranceNum"
                  {...register("entranceNum")}
                />
              </AdressInput>
              <AdressInput title="этаж">
                <Input
                  type="text"
                  size="none"
                  id="floor"
                  {...register("floor")}
                />
              </AdressInput>
            </AdressBlock>
            <Button>Сохранить изменения</Button>
          </Form>
        </FormContainer>
      </div>
      <OrderHistoryTable userOrders={userOrders} />
    </StyledAccount>
  );
}

export default Account;
