import { createContext, useContext, useState } from "react";

const HiddenOrderContext = createContext();

function HiddenOrderContextProvider({ children }) {
  const [isShowOrder, setIsShowOrder] = useState(false);

  return (
    <HiddenOrderContext.Provider value={{ isShowOrder, setIsShowOrder }}>
      {children}
    </HiddenOrderContext.Provider>
  );
}

function useHiddenOrderContext() {
  const hiddenOrderContext = useContext(HiddenOrderContext);
  if (!hiddenOrderContext)
    throw new Error("useCartIcon was used outside of CartIconProvider");
  return hiddenOrderContext;
}

export { HiddenOrderContextProvider, useHiddenOrderContext };
