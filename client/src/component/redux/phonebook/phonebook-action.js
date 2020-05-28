import { phonebookTypes } from "./phonebook-types";

export const fetchPhonebookListStart = () => ({
  type: phonebookTypes.FETCH_PHONEBOOK_LIST_START,
});

export const fetchPhonebookListSuccess = (phonebookDetail) => ({
  type: phonebookTypes.FETCH_PHONEBOOK_LIST_SUCCESS,
  payload: phonebookDetail,
});

export const fetchPhonebookListFailure = (err) => ({
  type: phonebookTypes.FETCH_PHONEBOOK_LIST_FAILURE,
  payload: err,
});

export const fetchAddPhonebookListStart = (data) => ({
  type: phonebookTypes.FETCH_ADD_PHONEBOOK_LIST_START,
  payload: data,
});

export const fetchAddPhonebookListSuccess = (phonebookData) => ({
  type: phonebookTypes.FETCH_ADD_PHONEBOOK_LIST_SUCCESS,
  payload: phonebookData,
});

export const fetchAddPhonebookListFailure = (err) => ({
  type: phonebookTypes.FETCH_ADD_PHONEBOOK_LIST_FAILURE,
  payload: err,
});

// export const fetchRejectedJobStart = (data) => ({
//   type: jobTypes.FETCH_REJECTED_JOB_START,
//   payload: data,
// });

// export const fetchRejectedJobSuccess = (data) => ({
//   type: jobTypes.FETCH_REJECTED_JOB_SUCCESS,
//   payload: data,
// });

// export const fetchRejectedJobFailure = (err) => ({
//   type: jobTypes.FETCH_REJECTED_JOB_FAILURE,
//   payload: err,
// });

// export const addAcceptedJobStart = (jobdata) => ({
//   type: jobTypes.ADD_ACCEPTED_JOB_START,
//   payload: jobdata,
// });

// export const addRejectedJobStart = (jobdata) => ({
//   type: jobTypes.ADD_REJECTED_JOB_START,
//   payload: jobdata,
// });
