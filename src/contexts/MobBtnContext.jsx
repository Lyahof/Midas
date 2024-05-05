import { createContext, useContext, useState } from "react";

const MobBtnContent = createContext();

function MobBtnProvider({ children }) {
  const [isOpenMenu, setIsOpenMenu] = useState(false);

  return (
    <MobBtnContent.Provider value={{ isOpenMenu, setIsOpenMenu }}>
      {children}
    </MobBtnContent.Provider>
  );
}

function useMobBtnContent() {
  const context = useContext(MobBtnContent);
  if (context === "undefined")
    throw new Error("useSearchContext was used outside of context");
  return context;
}

export { MobBtnProvider, useMobBtnContent };
