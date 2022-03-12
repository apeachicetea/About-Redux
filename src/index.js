import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import { Provider } from "react-redux";
import { createStore } from "redux";

const initialState = [
  { id: 0, name: "멋진신발", quan: 2 },
  { id: 1, name: "웃긴신발", quan: 1 },
  { id: 2, name: "예쁜신발", quan: 0 },
];

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "Plus":
      let copy = [...state];
      copy[0].quan++;
      return copy;
    case "Minus":
      let copyy = [...state];
      copyy[0].quan--;
      return copyy;
    default:
      return state;
  }
};

const store = createStore(reducer);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
