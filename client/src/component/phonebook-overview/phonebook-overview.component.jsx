import React from "react";
import {
  MDBContainer,
  MDBCollapse,
  MDBCard,
  MDBCardBody,
  MDBCol,
  MDBRow,
  MDBBtn,
} from "mdbreact";

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
    const { phonebboLists } = this.props;

    const filteredPhonebookList = phonebboLists.filter((phonebook) =>
      phonebook.name.toLowerCase().includes(searchFilter.toLowerCase())
    );
    console.log(filteredPhonebookList);

    return (
      <MDBContainer>
        <div className="form-group">
          <input
            type="search"
            className="form-control"
            id="formGroupExampleInput"
            onChange={this.handleChange}
          />
        </div>
        <MDBContainer className="mt-3">
          {filteredPhonebookList.length !== 0 ? (
            filteredPhonebookList.map((phonebook, index) => (
              <MDBCard className="mt-3">
                <div
                  className="phonebook-item-heading"
                  onClick={this.toggleCollapse("collapse" + index + 1)}
                >
                  <h5>{phonebook.name}</h5>
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
                    <MDBRow>
                      <MDBCol md="4">{phonebook.dob}</MDBCol>
                      <MDBCol md="4">{""}</MDBCol>
                      <MDBCol md="4">
                        <div className="button-container">
                          <MDBCol md="12">
                            <MDBBtn color="primary">Edit</MDBBtn>
                            <MDBBtn color="danger">Delete</MDBBtn>
                          </MDBCol>
                        </div>
                      </MDBCol>
                    </MDBRow>
                    <div className="mobile-email-container">
                      <MDBRow>
                        <MDBCol md="4">
                          <p>{phonebook.mobile}</p>
                          <p>{phonebook.alternate_mobile}</p>
                        </MDBCol>
                        <MDBCol md="4">
                          <p>{phonebook.email}</p>
                          <p>{phonebook.alternate_email}</p>
                        </MDBCol>
                        <MDBCol md="4"></MDBCol>
                      </MDBRow>
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

export default PhonebookOverview;
