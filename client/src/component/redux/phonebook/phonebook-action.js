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

export const fetchDeletePhonebookListStart = (id) => ({
  type: phonebookTypes.FETCH_DELETE_PHONEBOOK_LIST_START,
  payload: id,
});

export const fetchDeletePhonebookListSuccess = () => ({
  type: phonebookTypes.FETCH_DELETE_PHONEBOOK_LIST_SUCCESS,
});

export const fetchDeletePhonebookListFailure = (err) => ({
  type: phonebookTypes.FETCH_DELETE_PHONEBOOK_LIST_FAILURE,
  payload: err,
});

export const fetchUpdatePhonebookListStart = (phonebookData) => ({
  type: phonebookTypes.FETCH_UPDATE_PHONEBOOK_LIST_START,
  payload: phonebookData,
});

export const fetchUpdatePhonebookListSuccess = () => ({
  type: phonebookTypes.FETCH_UPDATE_PHONEBOOK_LIST_SUCCESS,
});

export const fetchUpdatePhonebookListFailure = (err) => ({
  type: phonebookTypes.FETCH_UPDATE_PHONEBOOK_LIST_FAILURE,
  payload: err,
});
