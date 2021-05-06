const ADD_FORM = "ADD_FORM";
const ADD_ELEMENT = "ADD_ELEMENT";
const DELETE_FORM = "DELETE_FORM";
const DELETE_ELEMENT = "DELETE_ELEMENT";
const IS_FORMS_ENOUGH = "IS_FORMS_ENOUGH";
const IS_ELELEMENTS_ENOUGH = "IS_ELELEMENTS_ENOUGH";
const ENEMY_TYPE = "ENEMY_TYPE";
const NAME = "NAME";

let initialState = {
  name: "",
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
  forms: [
    {
      id: 1,
      name: "spear",
      russianName: "Копье",
    },
    {
      id: 2,
      name: "shild",
      russianName: "Щит",
    },
    {
      id: 3,
      name: "crown",
      russianName: "Корона",
    },
    {
      id: 4,
      name: "source",
      russianName: "Источник",
    },
    {
      id: 5,
      name: "sphere",
      russianName: "Сфера",
    },
    {
      id: 6,
      name: "stamp",
      russianName: "Печать",
    },
    {
      id: 7,
      name: "key",
      russianName: "Ключ",
    },
    {
      id: 8,
      name: "flow",
      russianName: "Поток",
    },
    {
      id: 9,
      name: "power",
      russianName: "Власть",
    },
  ],
  choosenElements: [],
  choosenForms: [],
  enemyType: "",
  isFormsEnough: true,
  isElementsEnough: true,
};

const createGameReducer = (state = initialState, action) => {
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
  } else if (action.type === ADD_FORM) {
    let newChoosenForms = [...state.choosenForms];
    newChoosenForms.push(action.form);

    return {
      ...state,
      choosenForms: [...newChoosenForms],
    };
  } else if (action.type === DELETE_FORM) {
    let index = state.choosenForms.indexOf(action.form);
    let newChoosenForms = [...state.choosenForms];
    newChoosenForms.splice(index, 1);

    return {
      ...state,
      choosenForms: [...newChoosenForms],
    };
  } else if (action.type === IS_FORMS_ENOUGH) {
    return {
      ...state,
      isFormsEnough: action.bool,
    };
  } else if (action.type === ENEMY_TYPE) {
    return {
      ...state,
      enemyType: action.enemyType,
    };
  } else if (action.type === NAME) {
    return {
      ...state,
      name: action.name,
    };
  }

  return state;
};

export const addForm = (form) => ({ type: ADD_FORM, form });
export const deleteForm = (form) => ({ type: DELETE_FORM, form });
export const isFormsEnoughToggle = (bool) => ({ type: IS_FORMS_ENOUGH, bool });
export const addElement = (element) => ({ type: ADD_ELEMENT, element });
export const deleteElement = (element) => ({ type: DELETE_ELEMENT, element });
export const isElementsEnoughToggle = (bool) => ({
  type: IS_ELELEMENTS_ENOUGH,
  bool,
});
export const setEnemyType = (enemyType) => ({ type: ENEMY_TYPE, enemyType });
export const setName = (name) => ({ type: NAME, name });

export default createGameReducer;
