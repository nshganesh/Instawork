import {combineReducers} from "redux";
import * as types from "../actions/actionTypes/dialogTypes";

const modalOpen = (state=false, action) => {
  switch (action.type) {
    case types.TOGGLE_USER_MODAL:
      return !state;
    default:
      return state;
  }
};

const showDelete = (state=false, action) => {
  switch (action.type) {
    case types.CREATE_FORM_DATA:
      return false;
    case types.PREFILL_FORM_DATA:
      return true;
    default:
      return state;
  }
};

const title = (state="", action) => {
  switch (action.type) {
    case types.CREATE_FORM_DATA:
      return "Add a team member";
    case types.PREFILL_FORM_DATA:
      return "Edit team member";
    default:
      return state;
  }
};

const subTitle = (state="", action) => {
  switch (action.type) {
    case types.CREATE_FORM_DATA:
      return "Set email, location and role";
    case types.PREFILL_FORM_DATA:
      return "Edit contact info, location and role";
    default:
      return state;
  }
};

const dialogUtil = combineReducers({ modalOpen, showDelete, title, subTitle });
export default dialogUtil;
