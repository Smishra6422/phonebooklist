import { takeLatest, put, call, all } from "redux-saga/effects";
import axios from "axios";

import { actions } from "react-redux-form";

import { phonebookTypes } from "./phonebook-types";

import {
  fetchPhonebookListStart,
  fetchPhonebookListSuccess,
  fetchPhonebookListFailure,
  fetchAddPhonebookListSuccess,
  fetchAddPhonebookListFailure,
  fetchDeletePhonebookListSuccess,
  fetchDeletePhonebookListFailure,
  fetchUpdatePhonebookListSuccess,
  fetchUpdatePhonebookListFailure,
} from "./phonebook-action";

export function* fetchPhonebookListAsync() {
  try {
    const fetchResult = yield call(axios, "/api/phonebookdetail");
    const phonebook = yield fetchResult.data;

    yield put(fetchPhonebookListSuccess(phonebook.phonebooks));
  } catch (error) {
    yield put(fetchPhonebookListFailure(error));
  }
}

export function* fetchAddPhonebookAsync({ payload }) {
  try {
    const { history, ...otherProps } = payload;
    const fetchResult = yield call(axios.post, "/api/addphonebook", otherProps);

    if (fetchResult.data.err) {
      const ERROR = fetchResult.data.err.keyValue;

      if (ERROR.email) {
        alert(ERROR.email + " already exist please try with a different one");
      } else if (ERROR.mobile) {
        alert(ERROR.mobile + " already exist please try with a different one");
      }
    } else {
      yield put(actions.reset("phonebook"));
      yield call(history.push, "/");
      yield put(fetchAddPhonebookListSuccess());
    }
  } catch (error) {
    yield put(fetchAddPhonebookListFailure(error));
  }
}

export function* fetchDeletePhonebookAsync({ payload }) {
  try {
    const fetchResult = yield call(
      axios.post,
      "/api/deletephonebook/" + payload
    );

    //TODO Handle Error and Alert it ...

    yield put(fetchDeletePhonebookListSuccess());
    yield call(fetchPhonebookListRestart);
  } catch (error) {
    yield put(fetchDeletePhonebookListFailure(error));
  }
}

export function* fetchUpdatePhonebookAsync({ payload }) {
  try {
    const { history, _id, ...otherProps } = payload;
    const fetchResult = yield call(
      axios.post,
      "/api/updatephonebook/" + _id,
      otherProps
    );

    //TODO Handle Error and Alert it ...

    yield call(history.push, "/");
    yield put(fetchUpdatePhonebookListSuccess());
    yield put(actions.reset("phonebook"));
  } catch (error) {
    yield put(fetchUpdatePhonebookListFailure(error));
  }
}

export function* fetchPhonebookListRestart() {
  try {
    yield put(fetchPhonebookListStart());
  } catch (error) {
    yield put(fetchPhonebookListFailure(error));
  }
}

export function* fetchPhonebookListStarts() {
  yield takeLatest(
    phonebookTypes.FETCH_PHONEBOOK_LIST_START,
    fetchPhonebookListAsync
  );
}

export function* fetchAddPhonebookStart() {
  yield takeLatest(
    phonebookTypes.FETCH_ADD_PHONEBOOK_LIST_START,
    fetchAddPhonebookAsync
  );
}

export function* fetchDeletePhonebookStart() {
  yield takeLatest(
    phonebookTypes.FETCH_DELETE_PHONEBOOK_LIST_START,
    fetchDeletePhonebookAsync
  );
}

export function* fetchUpdatePhonebookStart() {
  yield takeLatest(
    phonebookTypes.FETCH_UPDATE_PHONEBOOK_LIST_START,
    fetchUpdatePhonebookAsync
  );
}

export function* phonebookSaga() {
  yield all([
    call(fetchPhonebookListStarts),
    call(fetchAddPhonebookStart),
    call(fetchDeletePhonebookStart),
    call(fetchUpdatePhonebookStart),
  ]);
}
