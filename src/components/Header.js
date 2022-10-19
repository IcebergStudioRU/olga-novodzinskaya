import React from "react";
import { ReactComponent as Logo } from "../assets/logo.svg";
import HamBtn from "./HamBtn";
import MobileMenu from "./MobileMenu";
import { Link as ReactScrollLink } from "react-scroll";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="container py-4 flex justify-between items-center">
      <Link to="/">
        <Logo className="mb:h-12 tl:h-16 dt:h-20" />
      </Link>
      <div className="dt:hidden">
        <HamBtn />
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
          <ReactScrollLink to="reviews-section" spy={true} smooth={true}>
            Отзывы
          </ReactScrollLink>
        </li>
        <li className="text-orange-900 text-base mr-10">
          <Link to="/партнеры">Партнеры</Link>
        </li>
        <li className="text-orange-900 text-base">
          <Link to="/контакты">Контакты</Link>
        </li>
      </ul>
      {/* <MobileMenu isOpen={test} setIsOpen={setTest} /> */}
    </div>
  );
};

export default Header;
