import React from "react";
import { Button, Row, Col, Label } from "reactstrap";

import { Control, Form, Errors } from "react-redux-form";

import "./form.style.scss";

const required = (val) => val && val.length;
const maxLength = (len) => (val) => !val || val.length <= len;
const minLength = (len) => (val) => val && val.length >= len;
const isNumber = (val) => !isNaN(Number(val));
const validEmail = (val) =>
  /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(val);

class FormContainer extends React.Component {
  handleSubmit = (values) => {
    if (this.props.update) {
      this.props.updatePhonebookLists({
        history: this.props.history,
        _id: this.props.match.params.id,
        name: values.name,
        dob: values.dob,
        mobile: values.mobile,
        alternate_mobile: values.alternate_mobile,
        email: values.email,
        alternate_email: values.alternate_email,
      });
    } else {
      this.props.fetchAddPhonebookListStart({
        history: this.props.history,
        name: values.name,
        dob: values.dob,
        mobile: values.mobile,
        alternate_mobile: values.alternate_mobile,
        email: values.email,
        alternate_email: values.alternate_email,
      });
    }
  };

  render() {
    const { phonebookLists, match, update, history } = this.props;
    console.log(history);
    let singlePhonebook = "";
    if (phonebookLists) {
      singlePhonebook = phonebookLists.find(
        (phonebook) => phonebook._id == match.params.id
      );
    }

    return (
      <div className="container">
        <div className="row">
          <Form
            model="phonebook"
            onSubmit={(values) => this.handleSubmit(values)}
          >
            <Row className="form-group">
              <Label htmlFor="name" md={4}>
                Your Name
              </Label>
              <Col md={8}>
                <Control.text
                  model=".name"
                  id="name"
                  name="name"
                  placeholder="Your Name"
                  className="form-control"
                  value={singlePhonebook.name}
                  validators={{
                    required,
                    minLength: minLength(3),
                    maxLength: maxLength(15),
                  }}
                />
                <Errors
                  className="text-danger"
                  model=".name"
                  show="touched"
                  messages={{
                    required: "Required",
                    minLength: "Must be greater than 2 characters",
                    maxLength: "Must be 15 characters or less",
                  }}
                />
              </Col>
            </Row>

            <Row className="form-group">
              <Label htmlFor="dob" md={4}>
                D.O.B
              </Label>
              <Col md={8}>
                <Control.text
                  type="date"
                  model=".dob"
                  id="dob"
                  name="dob"
                  placeholder="Enetr D.O.B"
                  className="form-control"
                  value={singlePhonebook.dob}
                />
              </Col>
            </Row>

            <Row className="form-group">
              <Label htmlFor="mobile" md={4}>
                Mobile
              </Label>
              <Col md={8}>
                <Control.text
                  model=".mobile"
                  id="mobile"
                  name="mobile"
                  placeholder="Enter Mobile Number"
                  className="form-control"
                  value={singlePhonebook.mobile}
                  validators={{
                    required,
                    minLength: minLength(3),
                    maxLength: maxLength(15),
                    isNumber,
                  }}
                />
                <Errors
                  className="text-danger"
                  model=".mobile"
                  show="touched"
                  messages={{
                    required: "Required",
                    minLength: "Must be greater than 2 numbers",
                    maxLength: "Must be 15 numbers or less",
                    isNumber: "Must be a number",
                  }}
                />
              </Col>
            </Row>

            <Row className="form-group">
              <Label htmlFor="alternate_mobile" md={4}>
                Alternate Mobile
              </Label>
              <Col md={8}>
                <Control.text
                  model=".alternate_mobile"
                  id="alternate_mobile"
                  name="alternate_mobile"
                  placeholder="Enter Alternate Mobile Number"
                  className="form-control"
                  value={singlePhonebook.alternate_mobile}
                  // validators={{
                  //   minLength: minLength(3),
                  //   maxLength: maxLength(15),
                  //   isNumber,
                  // }}
                />
              </Col>
            </Row>

            <Row className="form-group">
              <Label htmlFor="email" md={4}>
                Email
              </Label>
              <Col md={8}>
                <Control.text
                  model=".email"
                  id="email"
                  name="email"
                  placeholder="Enter Your Email"
                  className="form-control"
                  value={singlePhonebook.email}
                  validators={{
                    required,
                    validEmail,
                  }}
                />
                <Errors
                  className="text-danger"
                  model=".email"
                  show="touched"
                  messages={{
                    required: "Required",
                    validEmail: "Invalid Email Address",
                  }}
                />
              </Col>
            </Row>

            <Row className="form-group">
              <Label htmlFor="alternate_email" md={4}>
                Alternate Email
              </Label>
              <Col md={8}>
                <Control.text
                  model=".alternate_email"
                  id="alternate_email"
                  name="alternate_email"
                  placeholder="Enter Your Email"
                  className="form-control"
                  value={singlePhonebook.alternate_email}
                  // validators={{
                  //   required,
                  //   validEmail,
                  // }}
                />
              </Col>
            </Row>

            {update ? (
              <Row className="form-group">
                <Col md={{ size: 10, offset: 2 }}>
                  <Button type="submit" color="warning">
                    Update Phonebook Detail
                  </Button>
                </Col>
              </Row>
            ) : (
              <Row className="form-group">
                <Col md={{ size: 10, offset: 2 }}>
                  <Button type="submit" color="primary">
                    Add Phonebook Detail
                  </Button>
                </Col>
              </Row>
            )}
          </Form>
        </div>
      </div>
    );
  }
}

export default FormContainer;
