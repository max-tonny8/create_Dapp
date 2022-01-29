import React from "react";
import ReactDOM from "react-dom";
import { store } from "./state/store";
import { Provider } from "react-redux";
import GlobalStyles from "./styles/GlobalStyles";
import Routing from "./Routing";

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <GlobalStyles />
      <Routing />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
