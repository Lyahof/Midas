import { useMediaQuery } from "@uidotdev/usehooks";
import styled from "styled-components";

const StyledPaymentIcons = styled.div`
  display: flex;
  gap: 2rem;
  align-items: center;
  @media (max-width: 37em) {
    gap: 1rem;
  }
`;

function PaymentIcons() {
  const isMobileDevice = useMediaQuery("only screen and (max-width : 37em)");
  return (
    <StyledPaymentIcons>
      <img
        src="/payment-icons/master-card.png"
        alt="master-card"
        height={isMobileDevice ? "17.5px" : "28px"}
      />
      <img
        src="/payment-icons/visa.png"
        alt="visa"
        height={isMobileDevice ? "12.5px" : "20px"}
      />
      <img
        src="/payment-icons/mir.png"
        alt="mir"
        height={isMobileDevice ? "12px" : "19px"}
      />
      <img
        src="/payment-icons/a-pay.png"
        alt="a-pay"
        height={isMobileDevice ? "14px" : "24px"}
      />
      <img
        src="/payment-icons/g-pay.png"
        alt="g-pay"
        height={isMobileDevice ? "16px" : "26px"}
      />
    </StyledPaymentIcons>
  );
}

export default PaymentIcons;
