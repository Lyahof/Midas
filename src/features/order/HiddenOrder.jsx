import styled from "styled-components";
import CartIcon from "../cart/CartIcon";
import { useHiddenOrderContext } from "../../contexts/HiddenOrderContext";

const HiddenOrderMenu = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 2.5rem;
  align-items: center;
  margin: -1.5rem auto 2.5rem auto;
  padding: 1.5rem 2rem;
  background-color: #000;
  text-align: center;
  display: none;

  @media (max-width: 64em) {
    display: flex;
  }
`;

const OpenListBlock = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  align-items: center;

  & p {
    color: #9ea2aa;
  }
`;

const Img = styled.img`
  transition: transform 0.3s ease;
  transform: ${(props) => (props.isShowOrder ? "rotate(180deg)" : "none")};
`;

function HiddenOrder() {
  const { isShowOrder, setIsShowOrder } = useHiddenOrderContext();
  return (
    <HiddenOrderMenu>
      <CartIcon />
      <p>Ваш заказ скрыт здесь :)</p>
      <OpenListBlock onClick={() => setIsShowOrder((show) => !show)}>
        <p>{isShowOrder ? "Свернуть Список" : "Раскрыть Список"}</p>
        <Img
          src="/arrow-icons/arrow.svg"
          alt="arrow"
          isShowOrder={isShowOrder}
        />
      </OpenListBlock>
    </HiddenOrderMenu>
  );
}

export default HiddenOrder;
