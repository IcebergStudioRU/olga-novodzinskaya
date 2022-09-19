import React, { useContext } from "react";
import Hamburger from "hamburger-react";
import { GlobalContext } from "../GlobalContextComponent";

const HamBtn = () => {
  const { mobileMenu, setMobileMenu } = useContext(GlobalContext);
  return (
    <Hamburger
      toggled={mobileMenu}
      toggle={() => {
        setMobileMenu((prev) => !prev);
      }}
      color="#A06554"
      size={26}
      rounded
    />
  );
};

export default HamBtn;
