import React from "react";
import { Outlet } from "react-router-dom";
import NavBar from "./NavBar";
import { Provider } from "react-redux";
import store from "./Store/Store";

function RootLayout() {
  return (
    <div>
      <Provider store={store}>
        <NavBar />
        <main>
          <Outlet />
        </main>
      </Provider>
    </div>
  );
}

export default RootLayout;
