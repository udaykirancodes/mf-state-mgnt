import React, { Suspense, useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";

import "./index.scss";

import Header from "./Components/Header";
import Home from "./Components/Home";
import Loader from "./Components/Loader";
import NotFound from "./Components/NotFound";
import ProtectedRoutes from "./Components/ProtectedRoutes";

const RemoteProductApp = React.lazy(() => import("product/ProductApp"));
const RemoteOrderApp = React.lazy(() => import("order/OrderApp"));
const RemoteDeliveryApp = React.lazy(() => import("delivery/DeliveryApp"));

import { Provider } from "react-redux";

import store from "./redux/store";

const App = () => {
  const [loading, setLoading] = useState(false);
  return (
    <div>
      <Header />
      <Suspense fallback={<Loader />}>
        <Provider store={store}>
          <ProtectedRoutes>
            <Routes>
              <Route
                path="/"
                element={<Home loading={loading} setLoading={setLoading} />}
              />
              <Route path="/products/*" element={<RemoteProductApp />} />
              <Route path="/orders/*" element={<RemoteOrderApp />} />
              <Route path="/delivery/*" element={<RemoteDeliveryApp />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </ProtectedRoutes>
        </Provider>
      </Suspense>
    </div>
  );
};

export default App;
