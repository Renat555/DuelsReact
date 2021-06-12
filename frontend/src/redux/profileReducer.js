let initialState = {
  user: {
    friends: [],
    history: [],
  },
  users: [],
};

const profileReducer = (state = initialState, action) => {
  if (action.type) {
    return {
      ...state,
    };
  }
  return state;
};

export const registrationThunk = (user) => async (dispatch) => {
  delete user.confirm;
  let response = await fetch("http://localhost:3002/reg", {
    method: "POST",
    headers: {
      "Content-Type": "application/json;charset=utf-8",
    },
    body: JSON.stringify(user),
  });
  let result = await response.text();
  console.log(result);
};

export default profileReducer;
