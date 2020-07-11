import React from "react";
import { connect } from "react-redux";
import FormContainer from "../form/form.component";
import { fetchAddPhonebookListStart } from "../redux/phonebook/phonebook-action";
import "./add-phonebook.style.scss";

const AddPhonebookList = ({ fetchAddPhonebookListStart, history }) => {
  return (
    <div className="add-phonebook-container">
      <div className="phonebook-heading">
        <h3 style={{ marginTop: "0" }}>RM-PHONEBOOK</h3>
      </div>
      <FormContainer
        fetchAddPhonebookListStart={fetchAddPhonebookListStart}
        history={history}
      />
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  fetchAddPhonebookListStart: (phonebookData) =>
    dispatch(fetchAddPhonebookListStart(phonebookData)),
});

export default connect(null, mapDispatchToProps)(AddPhonebookList);
