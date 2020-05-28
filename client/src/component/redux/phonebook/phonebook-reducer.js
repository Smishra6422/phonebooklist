import { phonebookTypes } from "./phonebook-types";
// import { updateJob } from "./job-utils";

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
      return {
        ...state,
      };
    case phonebookTypes.FETCH_ADD_PHONEBOOK_LIST_SUCCESS:
      return {
        ...state,
      };
    case phonebookTypes.FETCH_ADD_PHONEBOOK_LIST_FAILURE:
      return {
        ...state,
        error: action.payload,
      };

    // case jobTypes.FETCH_REJECTED_JOB_START:
    //   return {
    //     ...state,
    //     isFetchingRejectedJobs: true,
    //     rejectedJobs: [],
    //   };
    // case jobTypes.FETCH_REJECTED_JOB_SUCCESS:
    //   return {
    //     ...state,
    //     isFetchingRejectedJobs: false,
    //     rejectedJobs: state.rejectedJobs.concat(action.payload),
    //   };
    // case jobTypes.FETCH_REJECTED_JOB_FAILURE:
    //   return {
    //     ...state,
    //     isFetchingRejectedJobs: false,
    //     rejectedJobs: [],
    //     error: action.payload,
    //   };

    // case jobTypes.ADD_ACCEPTED_JOB_START:
    //   return {
    //     ...state,
    //   };

    default:
      return {
        state,
      };
  }
};

export default phonebookReducer;
