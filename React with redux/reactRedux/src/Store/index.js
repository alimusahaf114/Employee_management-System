import { createStore } from "redux";

const INITIAL_VALUE = {
  counter: 0,
};
const counterReducer = (store = INITIAL_VALUE, actions) => {
  if (actions.type === "INCREAMENT") {
    return { counter: store.counter + 1 };
  } else if (actions.type === "DECREAMENT") {
    return { counter: store.counter - 1 };
  }
  return store;
};
const counterStore = createStore(counterReducer);

export default counterStore;
