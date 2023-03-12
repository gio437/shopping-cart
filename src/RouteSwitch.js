import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import ShopPage from './ShopPage';

const RouteSwitch = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/shopping-cart" element={<App />} />
        <Route path="/shop" element={<ShopPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default RouteSwitch;