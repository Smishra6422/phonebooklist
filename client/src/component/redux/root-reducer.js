import { combineReducers } from "redux";

import phonebookReducer from "./phonebook/phonebook-reducer";

// import { InitialPhonebookDetail } from "../form/form.component";

const rootReducer = combineReducers({
  phonebookLists: phonebookReducer,
});

export default rootReducer;
