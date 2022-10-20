import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Link as ReactScrollLink } from "react-scroll";
import { GlobalContext } from "../GlobalContextComponent";
import Hamburger from "hamburger-react";

const MobileMenu = () => {
  const { mobileMenu, setMobileMenu } = useContext(GlobalContext);

  const toggleMobileMenu = () => {
    setMobileMenu(!mobileMenu);
    document.querySelector("body").style.overflow = "auto";
  };

  return mobileMenu ? (
    <div
      className={`
        absolute top-0 right-0 z-20
        w-60 
        flex flex-col justify-between items-end gap-y-2
        mb:p-3
        border-2 border-slate-300 rounded-xl
        translate-y-0 duration-500
        bg-slate-50 text-neutral-500 shadow-md
      `}
    >
      <Hamburger
        toggled={mobileMenu}
        toggle={toggleMobileMenu}
        color="rgb(115 115 115)"
        size={26}
        rounded
      />
      <div className="w-full flex flex-col items-center mb:gap-y-4 tl:gap-y-10">
        <Link
          className="font-font-Montserrat border-b mb:text-2xl tl:text-3xl"
          to="недвижимость"
          onClick={toggleMobileMenu}
        >
          Недвижимость
        </Link>
        <ReactScrollLink
          className="font-font-Montserrat border-b mb:text-2xl tl:text-3xl"
          to="introducing-text-section"
          spy={true}
          smooth={true}
          onClick={toggleMobileMenu}
        >
          Обо мне
        </ReactScrollLink>
        <ReactScrollLink
          className="font-font-Montserrat border-b  mb:text-2xl tl:text-3xl"
          to="services-section"
          spy={true}
          smooth={true}
          onClick={toggleMobileMenu}
        >
          Услуги
        </ReactScrollLink>
        <ReactScrollLink
          className="font-font-Montserrat border-b  mb:text-2xl tl:text-3xl"
          to="партнеры"
          spy={true}
          smooth={true}
          onClick={toggleMobileMenu}
        >
          Партнеры
        </ReactScrollLink>
        <Link
          to="контакты"
          className="font-Montserrat border-b  mb:text-2xl tl:text-3xl"
          onClick={toggleMobileMenu}
        >
          Контакты
        </Link>
      </div>
    </div>
  ) : (
    <></>
  );
};

export default MobileMenu;
