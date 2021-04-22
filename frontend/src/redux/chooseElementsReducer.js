const ADD_ELEMENT = "ADD_ELEMENT";
const DELETE_ELEMENT = "DELETE_ELEMENT";
const IS_ELELEMENTS_ENOUGH = "IS_ELELEMENTS_ENOUGH";

let initialState = {
  elements: [
    {
      id: 1,
      name: "fire",
      russianName: "Огонь",
    },
    {
      id: 2,
      name: "water",
      russianName: "Вода",
    },
    {
      id: 3,
      name: "earth",
      russianName: "Земля",
    },
    {
      id: 4,
      name: "air",
      russianName: "Воздух",
    },
    {
      id: 5,
      name: "life",
      russianName: "Жизнь",
    },
    {
      id: 6,
      name: "death",
      russianName: "Смерть",
    },
  ],
  choosenElements: [],
  isElementsEnough: true,
};

const chooseElementReducer = (state = initialState, action) => {
  if (action.type === ADD_ELEMENT) {
    let newChoosenElements = [...state.choosenElements];
    newChoosenElements.push(action.element);

    return {
      ...state,
      choosenElements: [...newChoosenElements],
    };
  } else if (action.type === DELETE_ELEMENT) {
    let index = state.choosenElements.indexOf(action.element);
    let newChoosenElements = [...state.choosenElements];
    newChoosenElements.splice(index, 1);

    return {
      ...state,
      choosenElements: [...newChoosenElements],
    };
  } else if (action.type === IS_ELELEMENTS_ENOUGH) {
    return {
      ...state,
      isElementsEnough: action.bool,
    };
  }

  return state;
};

export const addElement = (element) => ({ type: ADD_ELEMENT, element });
export const deleteElement = (element) => ({ type: DELETE_ELEMENT, element });
export const isElementsEnoughToggle = (bool) => ({
  type: IS_ELELEMENTS_ENOUGH,
  bool,
});

export default chooseElementReducer;
