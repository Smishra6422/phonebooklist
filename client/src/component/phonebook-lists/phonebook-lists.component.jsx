import React from "react";
import "./phonebook-lists.style.scss";
import PhonebookPreview from "../phonebook-preview/phonebook-preview.component";

const PhonebookLists = () => {
  return (
    <div className="phonebook-container">
      <div className="phonebook-heading">
        <h3 style={{ marginTop: "0" }}>RM-PHONEBOOK</h3>
      </div>
      <PhonebookPreview />
    </div>
  );
};

export default PhonebookLists;
