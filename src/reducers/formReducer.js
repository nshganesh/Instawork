import {combineReducers} from "redux";
import * as types from "../actions/actionTypes/dialogTypes";

const initialState = {
  id: "",
  firstName: "",
  location: "",
  email: "",
  contactNo: "",
  isAdmin: "0", //regular user
};

const userForm = (state=initialState, action) => {
  switch (action.type) {
    case types.CHANGE_IN_USER_FORM:
      return {
        ...state,
        [action.key]:action.value,
      };
    case types.CLEAR_FORM_DATA:
      return initialState;
    case types.PREFILL_FORM_DATA:
      return action.user;
    case types.CREATE_FORM_DATA:
      return {
        ...initialState,
        id: action.id
      };
    default:
      return state;
  }
};

const formErrors = (state="", action) => {
  switch (action.type) {
    case types.ADD_USER_FAILURE:
      return action.error;
    case types.ADD_USER_SUCCESS:
      return "";
    default:
      return state;
  }
};

const formReducer = combineReducers({ userForm, formErrors });
export default formReducer;
