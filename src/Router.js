import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import GlobalContextComponent from "./GlobalContextComponent";
import Home from "./pages/Home";
import AllRealEstate from "./pages/AllRealEstate";
import RealEstate from "./pages/RealEstate";
import Contacts from "./pages/Contacts";
import Partners from "./pages/Partners";

const Router = () => {
  return (
    <GlobalContextComponent>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/%D0%BD%D0%B5%D0%B4%D0%B2%D0%B8%D0%B6%D0%B8%D0%BC%D0%BE%D1%81%D1%82%D1%8C"
            element={<AllRealEstate />}
          />
          <Route
            path="/%D0%BD%D0%B5%D0%B4%D0%B2%D0%B8%D0%B6%D0%B8%D0%BC%D0%BE%D1%81%D1%82%D1%8C/:id"
            element={<RealEstate />}
          />
          <Route
            path="/%D0%BA%D0%BE%D0%BD%D1%82%D0%B0%D0%BA%D1%82%D1%8B"
            element={<Contacts />}
          />
          <Route
            path="/%D0%BF%D0%B0%D1%80%D1%82%D0%BD%D0%B5%D1%80%D1%8B"
            element={<Partners />}
          />
        </Routes>
      </BrowserRouter>
    </GlobalContextComponent>
  );
};

export default Router;
