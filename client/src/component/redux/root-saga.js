import { all, call } from "redux-saga/effects";

import { jobSaga } from "./phonebook/phonebook-sagas";

export function* rootSaga() {
  yield all([call(jobSaga)]);
}
