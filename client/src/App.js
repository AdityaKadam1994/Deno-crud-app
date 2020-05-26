import React from "react";
import { Provider } from "react-redux";
import store from "../src/store";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import ShoppingHome from "../src/components/ShoppingHome";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <ShoppingHome />
      </div>
    </Provider>
  );
}

export default App;
