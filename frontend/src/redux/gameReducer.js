const ADD_PLAYERS = "ADD_PLAYERS";
const ADD_FORM = "ADD_FORM";
const ADD_ELEMENT = "ADD_ELEMENT";
const DELETE_FORM = "DELETE_FORM";
const DELETE_ELEMENT = "DELETE_ELEMENT";
const ENEMY_TYPE = "ENEMY_TYPE";
const ADD_NAME = "ADD_NAME";
const IS_ELEMENTS_ENOUGH_TOGGLE = "ELEMENTS_ENOUGH_TOGGLE";
const IS_FORMS_ENOUGH_TOGGLE = "FORMS_ENOUGH_TOGGLE";

function randomString() {
  let string = "qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM0123456789";
  let result = "";

  for (let i = 0; i < 10; i++) {
    result += string[Math.floor(Math.random() * Math.floor(62))];
  }

  return result;
}

let initialState = {
  user: {
    name: "",
    id: randomString(),
    actionPoints: 5,
    energyPoints: 5,
    position: {
      user: [],
      enemy: [],
    },
    battlefield: [],
    maxHealth: "200",
    health: "200",
    muve: "",
    elements: [],
    forms: [],
    buffs: [],
    debuffs: [],
    enemyType: "",
    idGame: "",
  },
  enemy: null,
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
  isElementsEnough: true,
  isFormsEnough: true,
};

const gameReducer = (state = initialState, action) => {
  if (action.type === ADD_ELEMENT) {
    let elements = [...state.user.elements];
    elements.push(action.element);

    return {
      ...state,
      user: {
        ...state.user,
        elements: elements,
      },
    };
  } else if (action.type === DELETE_ELEMENT) {
    let index = state.user.elements.indexOf(action.element);
    let elements = [...state.user.elements];
    elements.splice(index, 1);

    return {
      ...state,
      user: {
        ...state.user,
        elements: elements,
      },
    };
  } else if (action.type === ADD_FORM) {
    let forms = [...state.user.forms];
    forms.push(action.form);

    return {
      ...state,
      user: {
        ...state.user,
        forms: forms,
      },
    };
  } else if (action.type === DELETE_FORM) {
    let index = state.user.forms.indexOf(action.form);
    let forms = [...state.user.forms];
    forms.splice(index, 1);

    return {
      ...state,
      user: {
        ...state.user,
        forms: forms,
      },
    };
  } else if (action.type === ENEMY_TYPE) {
    return {
      ...state,
      user: {
        ...state.user,
        enemyType: action.enemyType,
      },
    };
  } else if (action.type === ADD_NAME) {
    return {
      ...state,
      user: {
        ...state.user,
        name: action.name,
      },
    };
  } else if (action.type === ADD_PLAYERS) {
    return {
      ...state,
      user: action.user,
      enemy: action.enemy,
    };
  } else if (action.type === IS_ELEMENTS_ENOUGH_TOGGLE) {
    return {
      ...state,
      isElementsEnough: action.bool,
    };
  } else if (action.type === IS_FORMS_ENOUGH_TOGGLE) {
    return {
      ...state,
      isFormsEnough: action.bool,
    };
  }
  return state;
};

export const addName = (name) => ({ type: ADD_NAME, name });
export const addPlayers = (user, enemy) => ({ type: ADD_PLAYERS, user, enemy });
export const addForm = (form) => ({ type: ADD_FORM, form });
export const deleteForm = (form) => ({ type: DELETE_FORM, form });
export const addElement = (element) => ({ type: ADD_ELEMENT, element });
export const deleteElement = (element) => ({ type: DELETE_ELEMENT, element });
export const setEnemyType = (enemyType) => ({ type: ENEMY_TYPE, enemyType });
export const isElementsEnoughToggle = (bool) => ({
  type: IS_ELEMENTS_ENOUGH_TOGGLE,
  bool,
});
export const isFormsEnoughToggle = (bool) => ({
  type: IS_FORMS_ENOUGH_TOGGLE,
  bool,
});

export default gameReducer;
