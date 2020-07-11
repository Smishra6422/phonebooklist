import React, { useEffect } from "react";
import { connect } from "react-redux";
import FormContainer from "../form/form.component";
import "./update-phonebook.style.scss";
import Spinner from "../spinner/spinner.component";

//Redux File
import { createStructuredSelector } from "reselect";
import {
  selectPhonebookList,
  selectPhonebookListFetching,
} from "../redux/phonebook/phonebook-selector";
import {
  fetchPhonebookListStart,
  fetchUpdatePhonebookListStart,
} from "../redux/phonebook/phonebook-action";

//Functional Component
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

  return (
    <div className="update-phonebook-container">
      <div className="phonebook-heading">
        <h3 style={{ marginTop: "0" }}>RM-PHONEBOOK </h3>
      </div>

      {isFetchingphonebook ? (
        <Spinner />
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
