import { useSelector } from "react-redux";
import Breadcrumbs from "../ui/Breadcrumbs";
import Title from "../ui/Title";
import {
  getCart,
  getPromocode,
  getTotalCartPrice,
  getUpdatedTotalPrice,
} from "../features/cart/CartSlice";
import OrderItemsBlock from "../features/order/OrderItemsBlock";
import styled from "styled-components";
import PersonalDataForm from "../features/order/PersonalDataForm";
import DeliveryDataForm from "../features/order/DeliveryDataForm";
import Form from "../ui/Form";
import ChoosePayment from "../features/order/ChoosePayment";
import HiddenOrder from "../features/order/HiddenOrder";
import { useForm } from "react-hook-form";
import { useActivateDelivery } from "../contexts/ActivateDeliveryContext";

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: 3fr 2fr;
  gap: 2rem;
  position: relative;

  @media (max-width: 64em) {
    grid-template-columns: 1fr;
  }
`;

function PlacingOrder() {
  const {
    handleSubmit,
    register,
    watch,
    setValue,
    required,
    reset,
    formState,
  } = useForm({
    defaultValues: {
      paymentMethod: "cards",
    },
  });
  const { errors } = formState;
  const order = useSelector(getCart);
  const updatedTotalPrice = useSelector(getUpdatedTotalPrice) || 0;
  const totalCartPrice = useSelector(getTotalCartPrice);
  const promocode = useSelector(getPromocode);
  const discount =
    updatedTotalPrice > 0 ? totalCartPrice - updatedTotalPrice : 0;
  const { deliveryPrice } = useActivateDelivery();
  const finalPrice =
    updatedTotalPrice > 0
      ? updatedTotalPrice + deliveryPrice
      : totalCartPrice + deliveryPrice;

  const selectedPaymentMethod = watch("paymentMethod");

  function onSubmit(data) {
    const orderItem = {
      ...data,
      deliveryPrice,
      order,
      totalCartPrice,
      updatedTotalPrice,
      promocode,
      discount,
      finalPrice,
    };
    console.log(orderItem);
  }

  function onError(errors) {}

  return (
    <>
      <Title align="left" size="small">
        Оформление заказа
      </Title>
      <Breadcrumbs />

      <HiddenOrder />

      <GridContainer>
        <Form onSubmit={handleSubmit(onSubmit, onError)}>
          <PersonalDataForm
            register={register}
            required={required}
            errors={errors}
          />

          <DeliveryDataForm
            register={register}
            required={required}
            errors={errors}
          />

          <ChoosePayment
            register={register}
            selectedPaymentMethod={selectedPaymentMethod}
            setValue={setValue}
          />
        </Form>

        {order && totalCartPrice > 0 && (
          <OrderItemsBlock
            order={order}
            updatedTotalPrice={updatedTotalPrice}
            totalCartPrice={totalCartPrice}
          />
        )}
      </GridContainer>
    </>
  );
}

export default PlacingOrder;
