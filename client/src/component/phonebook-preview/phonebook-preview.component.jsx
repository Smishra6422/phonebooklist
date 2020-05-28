import React, { useEffect } from "react";
import { connect } from "react-redux";
import "./phonebook-preview.style.scss";
import PhonebookOverview from "../phonebook-overview/phonebook-overview.component";
import {
  selectPhonebookList,
  selectPhonebookListFetching,
} from "../redux/phonebook/phonebook-selector";

import { fetchPhonebookListStart } from "../redux/phonebook/phonebook-action";
import { createStructuredSelector } from "reselect";

const PhonebookPreview = ({
  fetchPhonebookListStart,
  selectPhonebookList,
  isFetchingphonebook,
}) => {
  useEffect(() => {
    fetchPhonebookListStart();
  }, [fetchPhonebookListStart]);
  return (
    <div className="row phonebook-items">
      {isFetchingphonebook !== false ? (
        <h1>Loading ...</h1>
      ) : (
        <PhonebookOverview phonebboLists={selectPhonebookList} />
      )}
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  fetchPhonebookListStart: () => dispatch(fetchPhonebookListStart()),
});

const mapStateToProps = createStructuredSelector({
  selectPhonebookList: selectPhonebookList,
  isFetchingphonebook: selectPhonebookListFetching,
});

export default connect(mapStateToProps, mapDispatchToProps)(PhonebookPreview);
