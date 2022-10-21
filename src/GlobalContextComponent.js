import React, { useState, createContext, useEffect } from "react";
import { getRealEstate } from "./utils/firebase";

export const GlobalContext = createContext();

const getViewPort = () => {
  const viewPortSize = document.documentElement.clientWidth;
  if (viewPortSize <= 767) return "mobile";
  if (viewPortSize >= 768 && viewPortSize <= 1199) return "tablet";
  return "desktop";
};

const GlobalContextComponent = ({ children }) => {
  const [mobileMenu, setMobileMenu] = useState(false);
  const [realEstate, setRealEstate] = useState([]);
  const [viewPort, setViewPort] = useState(getViewPort());

  useEffect(() => {
    const resizeHandler = () => {
      setViewPort(getViewPort());
    };
    window.addEventListener("resize", resizeHandler);
    return () => window.removeEventListener("resize", resizeHandler);
  }, []);

  useEffect(() => {
    getRealEstate().then((response) => setRealEstate([...response]));
  }, []);

  return (
    <GlobalContext.Provider value={{ mobileMenu, setMobileMenu, realEstate, viewPort }}>
      {children}
    </GlobalContext.Provider>
  );
};

export default GlobalContextComponent;
