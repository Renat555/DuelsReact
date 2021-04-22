import { combineReducers, createStore } from "redux";
import chooseElementReducer from "./chooseElementsReducer";
import chooseFormsReducer from "./chooseFormsReducer";

let reducers = combineReducers({
  elements: chooseElementReducer,
  forms: chooseFormsReducer,
});

const store = createStore(reducers);

function showChange() {
  console.log(store.getState().elements.isElementsEnough);
  console.log(store.getState().forms.isFormsEnough);
}

store.subscribe(showChange);

export default store;
