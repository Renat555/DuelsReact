const ADD_FORM = "ADD_FORM";
const DELETE_FORM = "DELETE_FORM";
const IS_FORMS_ENOUGH = "IS_FORMS_ENOUGH";

let initialState = {
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
  choosenForms: [],
  isFormsEnough: true,
};

const chooseFormReducer = (state = initialState, action) => {
  if (action.type === ADD_FORM) {
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
  }

  return state;
};

export const addForm = (form) => ({ type: ADD_FORM, form });
export const deleteForm = (form) => ({ type: DELETE_FORM, form });
export const isFormsEnoughToggle = (bool) => ({ type: IS_FORMS_ENOUGH, bool });

export default chooseFormReducer;
