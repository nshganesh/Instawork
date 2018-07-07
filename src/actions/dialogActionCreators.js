import * as types from "./actionTypes/dialogTypes";

export const toggleUserModal = () => ({
  type: types.TOGGLE_USER_MODAL,
});

export const addUserSuccess = (user) => ({
  type: types.ADD_USER_SUCCESS,
  user,
});

export const addUserFailure = (error) => ({
  type: types.ADD_USER_FAILURE,
  error,
});

export const validateUserFormStart = (user) => ({
  type: types.VALIDATE_USER_FORM_START,
  user,
});

export const clearFormData = () => ({
  type: types.CLEAR_FORM_DATA,
});

export const changeInUserForm = (key, value) => ({
  type: types.CHANGE_IN_USER_FORM,
  key,
  value,
});

export const prefillFormData = (user) => ({
  type: types.PREFILL_FORM_DATA,
  user,
});

export const createFormData = (id) => ({
  type: types.CREATE_FORM_DATA,
  id,
});

export const deleteUser = (id) => ({
  type: types.DELETE_USER,
  id,
});
