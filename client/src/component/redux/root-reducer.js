import { combineReducers } from "redux";

import phonebookReducer from "./phonebook/phonebook-reducer";
import { createForms } from "react-redux-form";
import { InitialPhonebookDetail } from "./form";

const rootReducer = combineReducers({
  phonebookLists: phonebookReducer,
  ...createForms({
    phonebook: InitialPhonebookDetail,
    // shubham: phonebookLists,
  }),
});

export default rootReducer;
