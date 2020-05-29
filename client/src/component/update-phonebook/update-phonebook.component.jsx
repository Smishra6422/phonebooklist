import React, { useEffect } from "react";
import { connect } from "react-redux";
import FormContainer from "../form/form.component";
// import { fetchAddPhonebookListStart } from "../redux/phonebook/phonebook-action";
import { createStructuredSelector } from "reselect";

import {
  selectPhonebookList,
  selectPhonebookListFetching,
} from "../redux/phonebook/phonebook-selector";
import {
  fetchPhonebookListStart,
  fetchUpdatePhonebookListStart,
} from "../redux/phonebook/phonebook-action";
import "./update-phonebook.style.scss";

const UpdatePhonebookList = ({
  fetchPhonebookListStart,
  selectPhonebookList,
  isFetchingphonebook,
  fetchUpdatePhonebookListStart,
  match,
  history,
}) => {
  useEffect(() => {
    fetchPhonebookListStart();
  }, [fetchPhonebookListStart]);

  //   const singlePhonebook = "";
  //   if (isFetchingphonebook) {
  //     // singlePhonebook = selectPhonebookList.filter(
  //     //   (phonebook) => phonebook._id == match.params.id
  //     // );
  //     console.log(singlePhonebook);
  //   }
  return (
    <div className="phonebook-container">
      <div className="phonebook-heading">
        <h3 style={{ marginTop: "0" }}>RM-PHONEBOOK </h3>
      </div>

      {isFetchingphonebook ? (
        <h1>Loading ...</h1>
      ) : (
        <FormContainer
          phonebookLists={selectPhonebookList}
          updatePhonebookLists={fetchUpdatePhonebookListStart}
          match={match}
          history={history}
          update
        />
      )}
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  // resetPhonebookForm: () => dispatch(actions.reset("phonebook")),
  fetchUpdatePhonebookListStart: (updatePhonebookData) =>
    dispatch(fetchUpdatePhonebookListStart(updatePhonebookData)),
  fetchPhonebookListStart: () => dispatch(fetchPhonebookListStart()),
});

const mapStateToProps = createStructuredSelector({
  selectPhonebookList: selectPhonebookList,
  isFetchingphonebook: selectPhonebookListFetching,
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UpdatePhonebookList);
