const ADD_PLAYERS = "ADD_PLAYERS";

let initialState = {
  user: null,
  enemy: null,
};

const gameReducer = (state = initialState, action) => {
  if (action.type === ADD_PLAYERS) {
    return {
      ...state,
      user: action.user,
      enemy: action.enemy,
    };
  }
  return state;
};

export const addPlayers = (user, enemy) => ({ type: ADD_PLAYERS, user, enemy });

export default gameReducer;
