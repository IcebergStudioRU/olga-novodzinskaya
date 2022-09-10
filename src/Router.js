import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import GlobalContextComponent from "./GlobalContextComponent";
import Home from "./pages/Home";

const Router = () => {
  return (
    <GlobalContextComponent>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/недвижимость" />
        </Routes>
      </BrowserRouter>
    </GlobalContextComponent>
  );
};

export default Router;
