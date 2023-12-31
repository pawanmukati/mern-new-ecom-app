import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

const reducer = combineReducers({});

let initialState = {};

const middleware = [thunk];

const store = createStore(
  reducer, // Use the combined rootReducer
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
