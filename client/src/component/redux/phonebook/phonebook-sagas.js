import { takeLatest, put, call, all } from "redux-saga/effects";
import axios from "axios";

import { actions } from "react-redux-form";

import { phonebookTypes } from "./phonebook-types";

import {
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

    //Plying with redux-form
    // yield put(
    //   actions.change("phonebook", {
    //     name: "Shubham",
    //     email: "Gmail.com",
    //   })
    // );
  } catch (error) {
    yield put(fetchPhonebookListFailure(error));
  }
}

export function* fetchAddPhonebookAsync({ payload }) {
  try {
    console.log(payload);
    const fetchResult = yield call(axios.post, "/api/addphonebook", payload);
    console.log(fetchResult.data);

    //TODO Handle Error and Alert it ...

    yield put(fetchAddPhonebookListSuccess());
    yield put(actions.reset("phonebook"));
  } catch (error) {
    yield put(fetchAddPhonebookListFailure(error));
  }
}

export function* fetchDeletePhonebookAsync({ payload }) {
  try {
    console.log(payload);
    const fetchResult = yield call(
      axios.post,
      "/api/deletephonebook/" + payload
    );
    console.log(fetchResult.data);

    //TODO Handle Error and Alert it ...

    yield put(fetchDeletePhonebookListSuccess());
  } catch (error) {
    yield put(fetchDeletePhonebookListFailure(error));
  }
}

export function* fetchUpdatePhonebookAsync({ payload }) {
  try {
    const { _id, ...otherProps } = payload;
    const fetchResult = yield call(
      axios.post,
      "/api/updatephonebook/" + _id,
      otherProps
    );

    //TODO Handle Error and Alert it ...

    yield put(fetchUpdatePhonebookListSuccess());
    // yield put(actions.reset("phonebook"));
  } catch (error) {
    yield put(fetchUpdatePhonebookListFailure(error));
  }
}

// export function* fetchRejectedJobAsync() {
//   try {
//     const fetchResult = yield call(axios, "/user/getrejectjob");
//     const Jobs = yield fetchResult.data;
//     yield put(fetchRejectedJobSuccess(Jobs));
//   } catch (error) {
//     yield put(fetchRejectedJobFailure(error));
//   }
// }

// export function* fetchLiveJobRestart() {
//   try {
//     yield put(fetchLiveJobStart());
//   } catch (error) {
//     yield put(fetchLiveJobFailure(error));
//   }
// }

// export function* addAcceptedJobAsync({ payload }) {
//   try {
//     const fetchResult = yield call(axios.post, "/admin/addacceptjob", payload);
//     // console.log(fetchResult);

//     if (fetchResult.data.errmsg) {
//       alert("This Job is already exists");
//     } else {
//       alert(fetchResult.data + " Job Added to Accecpted Category !");
//     }
//     // yield call(fetchLiveJobRestart);
//   } catch (error) {
//     alert(error);
//   }
// }

// export function* addRejectedJobAsync({ payload }) {
//   try {
//     const fetchResult = yield call(axios.post, "/admin/addrejectjob", payload);
//     // console.log(fetchResult);

//     if (fetchResult.data.errmsg) {
//       alert("This Job is already exists");
//     } else {
//       alert(fetchResult.data + " Job Added to Rejected Category !");
//     }

//     // yield call(fetchLiveJobRestart);
//   } catch (error) {
//     alert(error);
//   }
// }

export function* fetchPhonebookListStart() {
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

// export function* fetchRejectedJobStarts() {
//   yield takeLatest(jobTypes.FETCH_REJECTED_JOB_START, fetchRejectedJobAsync);
// }

// export function* addAcceptedJobStart() {
//   yield takeLatest(jobTypes.ADD_ACCEPTED_JOB_START, addAcceptedJobAsync);
// }

// export function* addRejectedJobStart() {
//   yield takeLatest(jobTypes.ADD_REJECTED_JOB_START, addRejectedJobAsync);
// }

export function* jobSaga() {
  yield all([
    call(fetchPhonebookListStart),
    call(fetchAddPhonebookStart),
    call(fetchDeletePhonebookStart),
    call(fetchUpdatePhonebookStart),
    // call(addRejectedJobStart),
  ]);
}
