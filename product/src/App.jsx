import React, { useEffect } from "react";
import { Route, Routes } from "react-router-dom";

import "./index.scss";
import ProductLists from "./Components/ProductLists";
import ProductPage from "./Components/ProductPage";
import ProtectedRoutes from "./Components/ProtectedRoutes";
import { Provider } from "react-redux";
import store from "./redux/store";
const App = () => {
  return (
    <div className="border-4  border-red-700">
      <Provider store={store}>
        <ProtectedRoutes>
          <Routes>
            <Route path="/" element={<ProductLists />} />
            <Route path=":productId" element={<ProductPage />} />
          </Routes>
        </ProtectedRoutes>
      </Provider>
    </div>
  );
};

export default App;
