import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Link as ReactScrollLink } from "react-scroll";
import HamBtn from "./HamBtn";
import { GlobalContext } from "../GlobalContextComponent";

const MobileMenu = () => {
  const { mobileMenu, setMobileMenu } = useContext(GlobalContext);

  const closeMobileMenu = () => {
    setMobileMenu(false);
    document.querySelector("body").style.overflow = "auto";
  };

  return (
    <div className={mobileMenu ? "mobileMenu_opened" : "mobileMenu_closed"}>
      <div className="mb:max-w-mobileContainer tl:max-w-tabletContainer mx-auto mb:p-5 tl:p-5">
        <div className="hamMobMenu flex flex-col items-end mb:mb-28 tl:mb-14">
          <HamBtn />
        </div>
        <div className="flex flex-col items-center">
          <ReactScrollLink
            className="text-white font-font-Montserrat border-b  mb:text-2xl tl:text-3xl mb:mb-4 tl:mb-10 mb:pb-1 tl:pb-2"
            to="недвижимость"
            spy={true}
            smooth={true}
            onClick={closeMobileMenu}
          >
            Недвижимость
          </ReactScrollLink>
          <ReactScrollLink
            className="text-white font-font-Montserrat border-b  mb:text-2xl tl:text-3xl mb:mb-4 tl:mb-10 mb:pb-1 tl:pb-2"
            to="обо мне"
            spy={true}
            smooth={true}
            onClick={closeMobileMenu}
          >
            Обо мне
          </ReactScrollLink>
          <ReactScrollLink
            className="text-white font-font-Montserrat border-b  mb:text-2xl tl:text-3xl mb:mb-4 tl:mb-10 mb:pb-1 tl:pb-2"
            to="услуги"
            spy={true}
            smooth={true}
            onClick={closeMobileMenu}
          >
            Услуги
          </ReactScrollLink>
          <ReactScrollLink
            className="text-white font-font-Montserrat border-b  mb:text-2xl tl:text-3xl mb:mb-4 tl:mb-10 mb:pb-1 tl:pb-2"
            to="партнеры"
            spy={true}
            smooth={true}
            onClick={closeMobileMenu}
          >
            Партнеры
          </ReactScrollLink>
          <Link
            to="/контакты"
            className="text-white font-font-Montserrat border-b  mb:text-2xl tl:text-3xl mb:mb-4 tl:mb-10 mb:pb-1 tl:pb-2"
            onClick={closeMobileMenu}
          >
            Контакты
          </Link>
        </div>
      </div>
    </div>
  );
};

export default MobileMenu;
