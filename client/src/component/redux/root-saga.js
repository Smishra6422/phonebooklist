import { all, call } from "redux-saga/effects";

import { phonebookSaga } from "./phonebook/phonebook-sagas";

export function* rootSaga() {
  yield all([call(phonebookSaga)]);
}
