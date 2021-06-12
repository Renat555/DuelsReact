import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk from "redux-thunk";
import gameReducer from "./gameReducer";
import profileReducer from "./profileReducer";

let reducers = combineReducers({
  game: gameReducer,
  profile: profileReducer,
});

const store = createStore(reducers, applyMiddleware(thunk));

export function showChange() {
  console.log(store.getState());
}

store.subscribe(showChange);

export default store;
