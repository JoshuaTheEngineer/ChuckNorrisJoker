import { createStore } from "redux";
import joke_reducer from "./reducers/joke_reducer";

const store = createStore(
  joke_reducer
);

export { store };