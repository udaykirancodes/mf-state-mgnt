import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import "./index.scss";
import Orders from "./Components/Orders";
import Checkout from "./Components/Checkout";
import ProtectedRoutes from "./Components/ProtectedRoutes";

const App = () => {
  return (
    <div className="border-4  border-green-700">
      <ProtectedRoutes>
        <Routes>
          <Route path="/" element={<Orders />} />
          <Route path=":productId/checkout" element={<Checkout />} />
        </Routes>
      </ProtectedRoutes>
    </div>
  );
};

export default App;
