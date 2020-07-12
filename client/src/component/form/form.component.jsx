import React from "react";
import { connect } from "react-redux";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";
import "./form.style.scss";

class FormContainer extends React.Component {
  constructor(props) {
    super(props);
    this.singlePhonebook = "";
    if (props.phonebookLists) {
      this.singlePhonebook = props.phonebookLists.find(
        (phonebook) => phonebook._id == props.match.params.id
      );
    }
    this.state = {
      name: this.singlePhonebook.name || "",
      dob: this.singlePhonebook.dob || "",
      mobile: this.singlePhonebook.mobile || "",
      alternate_mobile: this.singlePhonebook.alternate_mobile || "",
      email: this.singlePhonebook.email || "",
      alternate_email: this.singlePhonebook.alternate_email || "",

      invalidName: true,
      invalidEmail: true,
      invalidMobile: true,

      errName: "",
      errMobile: "",
      errAlternateMobile: "",
      errEmail: "",
      errAlternateEmail: "",
    };
  }

  validateName = (name) => {
    if (name.length < 3 || name.length > 15) {
      this.setState({
        errName: "Please enter name between 3-15 character",
        invalidName: true,
      });
    } else {
      this.setState({
        errName: "",
        invalidName: false,
      });
    }
  };

  validateEmail = (email, alternateEmail) => {
    if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email)) {
      this.setState({ errEmail: "Invalid Email", invalidEmail: true });
    } else {
      this.setState({ errEmail: "", invalidEmail: false });
    }
    if (alternateEmail.length > 0) {
      if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email)) {
        this.setState({
          errAlternateEmail: "Invalid Alternate Email",
          invalidForm: true,
        });
      }
    } else {
      this.setState({
        errAlternateEmail: "",
        invalidForm: false,
      });
    }
  };

  validateMobile = (mobile, alternateMobile) => {
    if (!/(91)[6-9][0-9]{9}$/.test(mobile)) {
      this.setState({
        errMobile: "Please enter 10 digit number with 91 code",
        invalidMobile: true,
      });
    } else {
      this.setState({
        errMobile: "",
        invalidMobile: false,
      });
    }
    if (alternateMobile.length > 0) {
      if (!/(91)[6789][0-9]{9}$/i.test(alternateMobile)) {
        this.setState({
          errAlternateMobile: "Please enter 10 digit number with 91 code",
          invalidForm: true,
        });
      }
    } else {
      this.setState({
        errAlternateMobile: "",
        invalidForm: false,
      });
    }
  };

  handleSubmit = async (event) => {
    const {
      invalidName,
      invalidEmail,
      invalidMobile,
      name,
      dob,
      email,
      mobile,
      alternate_email,
      alternate_mobile,
    } = this.state;
    event.preventDefault();

    if (
      invalidName === false &&
      invalidEmail === false &&
      invalidMobile === false
    ) {
      if (this.props.update) {
        this.props.updatePhonebookLists({
          history: this.props.history,
          _id: this.props.match.params.id,
          name: name,
          dob: dob,
          mobile: mobile,
          alternate_mobile: alternate_mobile,
          email: email,
          alternate_email: alternate_email,
        });
      } else {
        this.props.fetchAddPhonebookListStart({
          history: this.props.history,
          name: name,
          dob: dob,
          mobile: mobile,
          alternate_mobile: alternate_mobile,
          email: email,
          alternate_email: alternate_email,
        });
      }
    }
  };

  handleChange = (event) => {
    const { name, value } = event.target;

    this.setState({ [name]: value }, () => {
      this.validateName(this.state.name);
      this.validateEmail(this.state.email, this.state.alternate_email);
      this.validateMobile(this.state.mobile, this.state.alternate_mobile);
    });
  };

  render() {
    const { phonebookLists, match, update } = this.props;
    const {
      errName,
      errMobile,
      errAlternateMobile,
      errEmail,
      errAlternateEmail,
      name,
      dob,
      email,
      alternate_email,
      mobile,
      alternate_mobile,
    } = this.state;

    return (
      <div className="container">
        <div className="row">
          <Form onSubmit={this.handleSubmit}>
            <FormGroup>
              <Label for="exampleEmail">Name</Label>
              <Input
                type="text"
                name="name"
                id="exampleEmail"
                placeholder="Enter Name"
                value={name}
                onChange={this.handleChange}
                required={true}
              />
            </FormGroup>
            <p style={{ color: "red" }}>{errName}</p>
            <FormGroup>
              <Label for="exampleEmail">D.O.B</Label>
              <Input
                type="date"
                name="dob"
                id="exampleEmail"
                placeholder="Enter D.O.B"
                value={dob}
                onChange={this.handleChange}
                required={true}
              />
            </FormGroup>

            <FormGroup>
              <Label for="exampleEmail">Mobile</Label>
              <Input
                type="mobile"
                name="mobile"
                id="exampleEmail"
                placeholder="Enter Mobile"
                value={mobile}
                onChange={this.handleChange}
                required={true}
                inputMode="tel"
              />
            </FormGroup>
            <p style={{ color: "red" }}>{errMobile}</p>
            <FormGroup>
              <Label for="exampleEmail">Alternate Mobile</Label>
              <Input
                type="text"
                name="alternate_mobile"
                id="exampleEmail"
                placeholder="Enter Alternate Mobile"
                value={alternate_mobile}
                onChange={this.handleChange}
                inputMode="tel"
              />
            </FormGroup>
            <p style={{ color: "red" }}>{errAlternateMobile}</p>
            <FormGroup>
              <Label for="exampleEmail">Email</Label>
              <Input
                type="email"
                name="email"
                id="exampleEmail"
                placeholder="Enter Email"
                value={email}
                onChange={this.handleChange}
                required={true}
                inputMode="email"
              />
            </FormGroup>
            <p style={{ color: "red" }}>{errEmail}</p>
            <FormGroup>
              <Label for="exampleEmail">Alternate Email</Label>
              <Input
                type="email"
                name="alternate_email"
                id="exampleEmail"
                placeholder="Enter Alternate Email"
                value={alternate_email}
                onChange={this.handleChange}
                inputMode="email"
              />
            </FormGroup>
            <p style={{ color: "red" }}>{errAlternateEmail}</p>
            {update ? (
              <Button color="primary">Update PhoneBook</Button>
            ) : (
              <Button color="primary">Add PhoneBook</Button>
            )}
          </Form>
        </div>
      </div>
    );
  }
}

// const mapStateToProps = (state) => ({
//   initialData: { ...state.phonebook, name: InitialPhonebookDetail.name },
// });

// const mapDispatchToProps = (dispatch) => ({
//   updateInitialState: (data) => dispatch(updateInitialState(data)),
// });

export default connect(null, null)(FormContainer);
