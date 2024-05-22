import { createContext, useContext, useRef } from "react";

const CartIconContext = createContext();

function CartIconProvider({ children }) {
  const cartIconRef = useRef(null);

  return (
    <CartIconContext.Provider value={{ cartIconRef }}>
      {children}
    </CartIconContext.Provider>
  );
}

function useCartIcon() {
  const cartContext = useContext(CartIconContext);
  if (!cartContext)
    throw new Error("useCartIcon was used outside of CartIconProvider");
  return cartContext;
}

export { CartIconProvider, useCartIcon };
