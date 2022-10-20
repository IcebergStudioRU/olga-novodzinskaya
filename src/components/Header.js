import React, { useContext } from "react";
import { ReactComponent as Logo } from "../assets/logo.svg";
import MobileMenu from "./MobileMenu";
import { Link as ReactScrollLink } from "react-scroll";
import { Link } from "react-router-dom";
import Hamburger from "hamburger-react";
import { GlobalContext } from "../GlobalContextComponent";

const Header = () => {
  const { mobileMenu, setMobileMenu } = useContext(GlobalContext);

  return (
    <div className="container py-4 flex justify-between items-center">
      <Link to="/">
        <Logo className="mb:h-12 tl:h-16 dt:h-20" />
      </Link>
      <div className="dt:hidden">
        <Hamburger
          toggled={mobileMenu}
          toggle={() => {
            setMobileMenu((prev) => !prev);
          }}
          color="#A06554"
          size={26}
          rounded
        />
      </div>
      <ul className="mb:hidden dt:flex">
        <li className="text-orange-900 text-base mr-10">
          <Link to="/недвижимость">Недвижимость</Link>
        </li>
        <li className="text-orange-900 text-base mr-10">
          <ReactScrollLink
            to="introducing-text-section"
            spy={true}
            smooth={true}
          >
            Обо мне
          </ReactScrollLink>
        </li>
        <li className="text-orange-900 text-base mr-10">
          <ReactScrollLink to="services-section" spy={true} smooth={true}>
            Услуги
          </ReactScrollLink>
        </li>
        <li className="text-orange-900 text-base mr-10">
          <Link to="/партнеры">Партнеры</Link>
        </li>
        <li className="text-orange-900 text-base">
          <Link to="/контакты">Контакты</Link>
        </li>
      </ul>
      <MobileMenu />
    </div>
  );
};

export default Header;
