import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import "./phonebook-preview.style.scss";
import PhonebookOverview from "../phonebook-overview/phonebook-overview.component";
import {
  selectPhonebookList,
  selectPhonebookListFetching,
} from "../redux/phonebook/phonebook-selector";

import { fetchPhonebookListStart } from "../redux/phonebook/phonebook-action";
import { createStructuredSelector } from "reselect";
import Pagination from "../pagination/pagination.component";

const PhonebookPreview = ({
  fetchPhonebookListStart,
  selectPhonebookList,
  isFetchingphonebook,
}) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [listPerPage, setListPerPage] = useState(3);
  useEffect(() => {
    fetchPhonebookListStart();
  }, []);

  const indexOfLastList = currentPage * listPerPage;
  const indexOfFirstList = indexOfLastList - listPerPage;
  let currentList = "";
  if (selectPhonebookList !== undefined) {
    currentList = selectPhonebookList.slice(indexOfFirstList, indexOfLastList);
  }

  const paginate = (page) => setCurrentPage(page);
  return (
    <div className="row phonebook-items">
      {isFetchingphonebook !== false ? (
        <h1>Loading ...</h1>
      ) : (
        <div className="row list-pagination-container">
          <PhonebookOverview phonebboLists={currentList} />
          <Pagination
            listPerPage={listPerPage}
            totalLists={selectPhonebookList.length}
            paginate={paginate}
          />
        </div>
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
