import { phonebookTypes } from "./phonebook-types";

const INITIAL_STATE = {
  phonebookList: [],
  isFetchingphonebook: true,

  error: "",
};

const phonebookReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case phonebookTypes.FETCH_PHONEBOOK_LIST_START:
      return {
        ...state,
        isFetchingphonebook: true,
        phonebookList: [],
      };
    case phonebookTypes.FETCH_PHONEBOOK_LIST_SUCCESS:
      return {
        ...state,
        isFetchingphonebook: false,
        phonebookList: state.phonebookList.concat(action.payload),
      };
    case phonebookTypes.FETCH_PHONEBOOK_LIST_FAILURE:
      return {
        ...state,
        isFetchingphonebook: false,
        phonebookList: [],
        error: action.payload,
      };

    case phonebookTypes.FETCH_ADD_PHONEBOOK_LIST_START:
    case phonebookTypes.FETCH_DELETE_PHONEBOOK_LIST_START:
    case phonebookTypes.FETCH_UPDATE_PHONEBOOK_LIST_START:
      return {
        ...state,
      };
    case phonebookTypes.FETCH_ADD_PHONEBOOK_LIST_SUCCESS:
    case phonebookTypes.FETCH_DELETE_PHONEBOOK_LIST_SUCCESS:
    case phonebookTypes.FETCH_UPDATE_PHONEBOOK_LIST_SUCCESS:
      return {
        ...state,
      };
    case phonebookTypes.FETCH_ADD_PHONEBOOK_LIST_FAILURE:
    case phonebookTypes.FETCH_DELETE_PHONEBOOK_LIST_FAILURE:
    case phonebookTypes.FETCH_UPDATE_PHONEBOOK_LIST_FAILURE:
      return {
        ...state,
        error: action.payload,
      };

    default:
      return {
        state,
      };
  }
};

export default phonebookReducer;
