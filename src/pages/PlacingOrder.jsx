import { useDispatch, useSelector } from "react-redux";
import Breadcrumbs from "../ui/Breadcrumbs";
import Title from "../ui/Title";
import {
  clearCart,
  clearSavedCart,
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
import { useUserProfileData } from "../features/authentication/useUserProfileData";
import Button from "../ui/Button";
import { useOpenCloseModalContext } from "../contexts/OpenCloseModalContext";
import useCreateOrder from "../features/order/useCreateOrder";
import { useNavigate } from "react-router-dom";
import SpinnerMini from "../ui/SpinnerMini";

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: 3fr 2fr;
  gap: 2rem;
  position: relative;
  margin-bottom: 5rem;

  @media (max-width: 64em) {
    grid-template-columns: 1fr;
  }
`;

const ButtonTextContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
`;

function PlacingOrder() {
  const {
    handleSubmit,
    register,
    reset,
    watch,
    setValue,
    required,
    formState: { errors },
  } = useForm({
    defaultValues: {
      paymentMethod: "cards",
    },
  });
  const { createOrder, isPending } = useCreateOrder();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { setIsOpenModal } = useOpenCloseModalContext();
  const { user, userProfile, isLoading } = useUserProfileData(setValue);
  const order = useSelector(getCart);
  const updatedTotalPrice = useSelector(getUpdatedTotalPrice) || 0;
  const totalCartPrice = useSelector(getTotalCartPrice);
  const promocode = useSelector(getPromocode);
  const { deliveryPrice } = useActivateDelivery();
  const discount =
    updatedTotalPrice > 0 ? totalCartPrice - updatedTotalPrice : 0;
  const finalPrice =
    updatedTotalPrice > 0
      ? updatedTotalPrice + deliveryPrice
      : totalCartPrice + deliveryPrice;

  const selectedPaymentMethod = watch("paymentMethod");

  function onSubmit(data) {
    if (!user) setIsOpenModal(true);
    if (!data) return;

    const newOrder = {
      ...data,
      deliveryPrice,
      order,
      totalCartPrice,
      updatedTotalPrice,
      promocode,
      discount,
      finalPrice,
      orderStatus: "Выполняется",
    };
    createOrder(newOrder, {
      onSuccess: () => {
        reset();
        dispatch(clearCart());
        dispatch(clearSavedCart(user.id));
        navigate("/main/account");
      },
    });
  }

  return (
    <>
      <Title align="left" size="small">
        Оформление заказа
      </Title>
      <Breadcrumbs />

      <HiddenOrder />

      <GridContainer>
        <Form onSubmit={handleSubmit(onSubmit)}>
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
          <Button align="flex-start" disabled={isPending}>
            {isPending ? (
              <ButtonTextContainer>
                <span>Подтвердить заказ</span> <SpinnerMini />
              </ButtonTextContainer>
            ) : (
              "Подтвердить заказ"
            )}
          </Button>
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
