import { createSelector } from "reselect";

const selectPhonebook = (state) => state.phonebbok;

export const selectPhonebookList = createSelector(
  [selectPhonebook],
  (phonebook) => phonebook.phonebookList
);
export const selectPhonebookListFetching = createSelector(
  [selectPhonebook],
  (phonebook) => phonebook.isFetchingphonebook
);
