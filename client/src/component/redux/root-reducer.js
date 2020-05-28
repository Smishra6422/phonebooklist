import { combineReducers } from "redux";

import phonebookReducer from "./phonebook/phonebook-reducer";
import { createForms } from "react-redux-form";
import { InitialPhonebookDetail } from "./form";

const rootReducer = combineReducers({
  phonebbok: phonebookReducer,
  ...createForms({
    phonebook: InitialPhonebookDetail,
  }),
});

export default rootReducer;
