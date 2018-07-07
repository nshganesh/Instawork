import * as types from "../actions/actionTypes/dialogTypes";

const users = (state=[], action) => {
  let index;
  switch (action.type) {
    case types.ADD_USER_SUCCESS:
      index = state.findIndex((el) => el.id === action.user.id);

      if (index !== -1) {
        return [
          ...state.slice(0, index),
          action.user,
          ...state.slice(index + 1),
        ];
      } else {
        return [...state, action.user];
      }
    case types.DELETE_USER:
      index = state.findIndex((el) => el.id === action.id);

      if (index !== -1) {
       return [
         ...state.slice(0, index),
         ...state.slice(index + 1),
       ]
      } else {
        return state;
      }
    default:
      return state;
  }
};

export default users;
