import React from "react";
import { connect } from "react-redux";
import { fetchDeletePhonebookListStart } from "../redux/phonebook/phonebook-action";
import { withRouter } from "react-router-dom";

import {
  MDBContainer,
  MDBCollapse,
  MDBCard,
  MDBCardBody,
  MDBBtn,
} from "mdbreact";
import "./phonebook-overview.style.scss";

class PhonebookOverview extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      collapseID: "collapse4",
      searchFilter: "",
    };
  }

  toggleCollapse = (collapseID) => () =>
    this.setState((prevState) => ({
      collapseID: prevState.collapseID !== collapseID ? collapseID : "",
    }));

  handleChange = (e) => {
    this.setState({ searchFilter: e.target.value });
  };

  render() {
    const { collapseID, searchFilter } = this.state;
    const {
      phonebboLists,
      fetchDeletePhonebookListStart,
      match,
      history,
    } = this.props;

    const filteredPhonebookList = phonebboLists.filter((phonebook) =>
      phonebook.name.toLowerCase().includes(searchFilter.toLowerCase())
    );

    return (
      <MDBContainer className="list-overview">
        <div className="form-group searchBar">
          <input
            type="search"
            placeholder="Search Phonebook List"
            className="form-control"
            id="formGroupExampleInput"
            onChange={this.handleChange}
          />
        </div>
        <MDBContainer className="mt-3 phonebook-details">
          {filteredPhonebookList.length !== 0 ? (
            filteredPhonebookList.map((phonebook, index) => (
              <MDBCard className="mt-3" key={index}>
                <div
                  className="phonebook-item-heading"
                  onClick={this.toggleCollapse("collapse" + index + 1)}
                >
                  <h6>{phonebook.name}</h6>
                  <span>
                    <i
                      className={
                        collapseID === "collapse"
                          ? "fa fa-angle-down rotate-icon"
                          : "fa fa-angle-down"
                      }
                    />
                  </span>
                </div>
                <MDBCollapse id={"collapse" + index + 1} isOpen={collapseID}>
                  <MDBCardBody>
                    <div className="button-dob-container">
                      <div className="dob">
                        D.O.B : {phonebook.dob ? phonebook.dob : "null"}
                      </div>

                      <div className="edit-buttons">
                        <div>
                          <MDBBtn
                            color="primary"
                            onClick={() => {
                              history.push(
                                match.path + "addphonebook/" + phonebook._id
                              );
                            }}
                          >
                            Edit
                          </MDBBtn>
                          <MDBBtn
                            color="danger"
                            onClick={() =>
                              fetchDeletePhonebookListStart(phonebook._id)
                            }
                          >
                            Delete
                          </MDBBtn>
                        </div>
                      </div>
                    </div>
                    <div className="mobile-email-container">
                      <div className="mobile-number-container">
                        <p>
                          <a href={"tel:" + phonebook.mobile}>
                            <i className="fa fa-mobile"></i>
                            <span>{phonebook.mobile}</span>
                          </a>
                        </p>
                        <p>
                          {phonebook.alternate_mobile ? (
                            <a href={"tel:" + phonebook.alternate_mobile}>
                              <i className="fa fa-mobile"></i>
                              <span>{phonebook.alternate_mobile}</span>
                            </a>
                          ) : null}
                        </p>
                      </div>
                      <div className="email-container">
                        <p>
                          {" "}
                          <a href={"mailto:" + phonebook.email}>
                            <i className="fa fa-envelope"></i>
                            <span>{phonebook.email}</span>
                          </a>
                        </p>
                        <p>
                          {phonebook.alternate_email ? (
                            <a href={"mailto:" + phonebook.alternate_email}>
                              <i className="fa fa-envelope"></i>
                              <span>{phonebook.alternate_email}</span>
                            </a>
                          ) : null}
                        </p>
                      </div>
                    </div>
                  </MDBCardBody>
                </MDBCollapse>
              </MDBCard>
            ))
          ) : (
            <h5>No Phonebook List Found</h5>
          )}
        </MDBContainer>
      </MDBContainer>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  fetchDeletePhonebookListStart: (id) =>
    dispatch(fetchDeletePhonebookListStart(id)),
});

export default withRouter(connect(null, mapDispatchToProps)(PhonebookOverview));
