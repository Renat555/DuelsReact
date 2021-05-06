import { combineReducers, createStore } from "redux";
import createGameReducer from "./createGameReducer";
import gameReducer from "./gameReducer";

let reducers = combineReducers({
  createGame: createGameReducer,
  game: gameReducer,
});

const store = createStore(reducers);

export function showChange() {
  console.log(store.getState().game);
}

store.subscribe(showChange);

export default store;
