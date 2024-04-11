import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import "./index.scss";
import ProtectedRoutes from "./Components/ProtectedRoutes";
import Delivery from "./Components/Delivery";
// import Header from "./Components/Header";
// import Delivery from "./Components/Delivery";

const App = () => {
  return (
    <div className="border-4  border-blue-700">
      <ProtectedRoutes>
        <Routes>
          <Route path="/" element={<Delivery />} />
        </Routes>
      </ProtectedRoutes>
    </div>
  );
};

export default App;
