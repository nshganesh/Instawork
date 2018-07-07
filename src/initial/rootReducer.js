import { combineReducers } from 'redux';
import dialogUtil from "../reducers/dialogUtil";
import users from "../reducers/users";
import formReducer from "../reducers/formReducer";

const rootReducer = combineReducers({
  dialogUtil,
  users,
  formReducer,
});

export default rootReducer;
