import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import shoppingReducer from "../store/reducer/shoppingReducer";

const reducer = combineReducers({
  list: shoppingReducer,
});

const store = createStore(
  (state, action) => reducer(state, action),
  {},
  applyMiddleware(thunk)
);

export default store;
