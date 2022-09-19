import React from "react";
import { ReactComponent as Logo } from "../assets/logo.svg";
import HamBtn from "./HamBtn";

const Header = () => {
  return (
    <div className="container py-4 flex justify-between items-center">
      <Logo className="mb:h-12 tl:h-16 dt:h-20" />
      <div className="dt:hidden">
        <HamBtn />
      </div>
      <ul className="mb:hidden dt:flex">
        <li className="text-orange-900 text-base mr-10">Недвижимость</li>
        <li className="text-orange-900 text-base mr-10">Обо мне</li>
        <li className="text-orange-900 text-base mr-10">Отзывы</li>
        <li className="text-orange-900 text-base mr-10">Партнёры</li>
        <li className="text-orange-900 text-base">Контакты</li>
      </ul>
    </div>
  );
};

export default Header;
