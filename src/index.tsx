import React from "react";
import ReactDOM from "react-dom/client";
import SetupApp from "./app/SetupApp";
import { Provider } from "react-redux";
import { store } from "./redux/ReduxStore";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <Provider store={store}>
    <SetupApp />
  </Provider>
);
