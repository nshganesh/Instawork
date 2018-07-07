import {put, takeLatest} from "redux-saga/effects";
import * as dialogAction from "../actions/dialogActionCreators";
import * as types from "../actions/actionTypes/dialogTypes";

function* validateUser(action) {

  const isValid = validate(action.user);

  if (isValid) {
    yield put(dialogAction.addUserSuccess(action.user));
    yield put(dialogAction.clearFormData());
    yield put(dialogAction.toggleUserModal());
  } else {
    yield put(dialogAction.addUserFailure("Incomplete fields!"));
  }

}

const validate = (user) =>
  !!(user && user.firstName && user.location && user.email && user.contactNo);

export const formSagas = [
  takeLatest(types.VALIDATE_USER_FORM_START, validateUser),
];
