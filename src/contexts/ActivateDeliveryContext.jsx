import { createContext, useContext, useState } from "react";

const ActivateDeliveryContext = createContext();

function ActivateDeliveryContextProvider({ children }) {
  const [isActiveCard, setIsActiveCard] = useState(0);

  return (
    <ActivateDeliveryContext.Provider value={{ isActiveCard, setIsActiveCard }}>
      {children}
    </ActivateDeliveryContext.Provider>
  );
}

function useActivateDelivery() {
  const deliveryContext = useContext(ActivateDeliveryContext);
  if (!deliveryContext)
    throw new Error("useCartIcon was used outside of CartIconProvider");
  return deliveryContext;
}

export { ActivateDeliveryContextProvider, useActivateDelivery };
