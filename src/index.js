import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import { Provider } from "react-redux";
import { combineReducers, createStore } from "redux";

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
    case "Add":
      let copyyy = [...state];
      copyyy = [...state, action.payload];
      return copyyy;
    case "Sub":
      let copyyyy = [...state];
      copyyyy.pop();
      return copyyyy;
    default:
      return state;
  }
};

//Modal state같은 경우는 Cart.js에서만 필요한 state기 때문에
//굳이 리덕스를 사용할 필요없고 해당 컴포넌트에서 useState를 사용하면 된다
const initialModalState = true;

const modalReducer = (state = initialModalState, action) => {
  if (action.type === "Open") {
    state = true;
    return state;
  } else if (action.type === "Close") {
    state = false;
    return state;
  } else {
    return state;
  }
};

const store = createStore(combineReducers({ reducer, modalReducer }));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
