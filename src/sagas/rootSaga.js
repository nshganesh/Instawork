import {all} from "redux-saga/effects";
import {formSagas} from "./formSagas";

export default function* rootSaga() {
  yield all([
    ...formSagas,
  ])
}
