import { createStore } from "redux";
import reducer from "./reducer";
import data from "../data";

export const initialStore = {
  cart: data,
  total: 0,
  amount: 0,
};

export const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
