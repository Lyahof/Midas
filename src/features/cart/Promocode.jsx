import { useDispatch } from "react-redux";
import styled from "styled-components";
import { useForm } from "react-hook-form";
import Button from "../../ui/Button";
import Form from "../../ui/Form";
import FormRow from "../../ui/FormRow";
import Input from "../../ui/Input";
import { setPromocode } from "./CartSlice";

const StyledPromocode = styled.div`
  display: flex;
  gap: 2rem;
  align-items: flex-end;
  @media (max-width: 48em) {
    gap: 1rem;
  }
`;

function Promocode({ totalCartQuantity, updatedTotalPrice }) {
  const { register, handleSubmit } = useForm();
  const dispatch = useDispatch();

  function onSubmit(data) {
    dispatch(setPromocode(data.enteredPromocode));
  }

  return (
    <>
      {totalCartQuantity > 0 && (
        <Form onSubmit={handleSubmit(onSubmit)}>
          <StyledPromocode>
            <FormRow label="применить промокод:" direction="column">
              <Input
                size="small"
                type="text"
                id="enteredPromocode"
                {...register("enteredPromocode")}
                disabled={updatedTotalPrice > 0}
              />
            </FormRow>
            <Button
              size="small"
              variation="secondary"
              disabled={updatedTotalPrice > 0}
            >
              Применить
            </Button>
          </StyledPromocode>
        </Form>
      )}
    </>
  );
}

export default Promocode;
