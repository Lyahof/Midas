import { createContext, useContext, useState } from "react";

const OpenCloseModalContext = createContext();

function OpenCloseModalProvider({ children }) {
  const [isOpenModal, setIsOpenModal] = useState(false);

  return (
    <OpenCloseModalContext.Provider value={{ isOpenModal, setIsOpenModal }}>
      {children}
    </OpenCloseModalContext.Provider>
  );
}

function useOpenCloseModalContext() {
  const context = useContext(OpenCloseModalContext);
  if (context === "undefined")
    throw new Error("useSearchContext was used outside of context");
  return context;
}

export { useOpenCloseModalContext, OpenCloseModalProvider };
