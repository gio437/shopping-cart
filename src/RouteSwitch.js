import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import ShopPage from './ShopPage';

const RouteSwitch = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='https://gio437.github.io/shopping-cart/' element={<App />} />
        <Route path="https://gio437.github.io/shopping-cart/shop" element={<ShopPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default RouteSwitch;