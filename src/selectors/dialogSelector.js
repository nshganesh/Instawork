import { createSelector } from 'reselect';

const getDialogUtil = (state) => state.dialogUtil;
const getFormErrors = (state) => state.formReducer.formErrors;
const getUserFormData = (state) => state.formReducer.userForm;

export const makeDialogUtilSelector = createSelector(
  [getDialogUtil],
  (dialogUtil) => dialogUtil
);

export const makeFormErrorSelector = createSelector(
  [getFormErrors],
  (formErrors) => formErrors
);

export const makeUserFormDataSelector = createSelector(
  [getUserFormData],
  (userFormData) => userFormData
);
