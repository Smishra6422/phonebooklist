import React from "react";
import { connect } from "react-redux";
import FormContainer from "../form/form.component";
import { fetchAddPhonebookListStart } from "../redux/phonebook/phonebook-action";
import "./add-phonebook.style.scss";

const AddPhonebookList = ({ fetchAddPhonebookListStart }) => {
  return (
    <div className="phonebook-container">
      <div className="phonebook-heading">
        <h3>RM-PHONEBOOK</h3>
      </div>
      <FormContainer fetchAddPhonebookListStart={fetchAddPhonebookListStart} />
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  // resetPhonebookForm: () => dispatch(actions.reset("phonebook")),
  fetchAddPhonebookListStart: (phonebookData) =>
    dispatch(fetchAddPhonebookListStart(phonebookData)),
});

export default connect(null, mapDispatchToProps)(AddPhonebookList);
