import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import {
  decreaseItemQuantity,
  getCurrentQuantityById,
  increaseItemQuantity,
} from "./CartSlice";

const QuantityBlock = styled.div`
  width: 8.2rem;
  height: 4.6rem;
  border: 1px solid #9ea2aa;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const BtnPlus = styled.button`
  background-color: #000;
  border: none;
  color: white;
  cursor: pointer;
  font-size: 2.5rem;
  font-weight: 400;
  line-height: 0.9;
  transition: all 0.3s;
  margin-right: -8px;

  &:hover {
    color: var(--yellow-color);

    & div {
      border: 1px solid var(--yellow-color);
    }
  }
`;

const BtnMinus = styled.button`
  background-color: #000;
  border: none;
  color: white;
  cursor: pointer;
  font-size: 2.5rem;
  line-height: 0.9;
  font-weight: 400;
  transition: all 0.3s;
  margin-left: -6px;

  &:hover {
    color: var(--yellow-color);
  }
`;

const Quantity = styled.p`
  font-size: 1.3rem;
`;

function UpdateItemQuantity({ foodId }) {
  const dispatch = useDispatch();
  const currentQuantity = useSelector(getCurrentQuantityById(foodId));

  return (
    <QuantityBlock>
      <BtnMinus onClick={() => dispatch(decreaseItemQuantity(foodId))}>
        -
      </BtnMinus>
      <Quantity>{currentQuantity} шт</Quantity>
      <BtnPlus onClick={() => dispatch(increaseItemQuantity(foodId))}>
        +
      </BtnPlus>
    </QuantityBlock>
  );
}

export default UpdateItemQuantity;
