import React, { createContext} from "react";

export const GlobalContext = createContext();
const getViewPort = () => {
  const viewPortSize = document.documentElement.clientWidth;
  if (viewPortSize <= 767) return "mobile";
  if (viewPortSize >= 768 && viewPortSize <= 1199) return "tablet";
  return "desktop";
};

const GlobalContextComponent = ({ children }) => {
  return <GlobalContext.Provider value={{}}>{children}</GlobalContext.Provider>;
};

export default GlobalContextComponent;
