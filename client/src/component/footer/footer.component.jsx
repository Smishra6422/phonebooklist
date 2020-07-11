import React from "react";
import { MDBCol, MDBContainer, MDBRow, MDBFooter, MDBIcon } from "mdbreact";
import "./footer.style.scss";

const FooterPage = () => {
  return (
    <MDBFooter color="blue" className="font-small pt-4 mt-4">
      <MDBContainer fluid className="text-center text-md-left">
        <MDBRow className="contact-heading-container">
          <MDBCol md="2">
            <h5 className="title">Contact Me</h5>
          </MDBCol>

          <MDBCol md="12">
            <hr className="hr-white division-line" />
            <ul className="row link-container">
              <li className="list-unstyled">
                <a href="mailto:ks6422@hotmail.com" className="link-color">
                  Email
                  <span className="contact-icon">
                    <i
                      className="fa fa-envelope"
                      style={{ color: "#fff !important" }}
                    ></i>
                  </span>
                </a>
              </li>
              <li className="list-unstyled">
                <a
                  href="https://www.instagram.com/shubham_mishra_6422/"
                  className="link-color"
                >
                  Instagram{" "}
                  <span className="contact-icon">
                    <MDBIcon icon="instagram" />
                  </span>
                </a>
              </li>
              <li className="list-unstyled">
                <a
                  href="https://www.facebook.com/profile.php?id=100005679348460"
                  className="link-color"
                >
                  Facebook{" "}
                  <span className="contact-icon">
                    <MDBIcon icon="facebook-square" />
                  </span>
                </a>
              </li>
              <li className="list-unstyled">
                <a href="https://github.com/Smishra6422" className="link-color">
                  Github{" "}
                  <span className="contact-icon">
                    <MDBIcon icon="github" />
                  </span>
                </a>
              </li>
            </ul>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
      <div className="footer-copyright text-center py-3">
        <MDBContainer fluid>
          <a href="/" className="brand-name">
            {" "}
            Phonebook{" "}
          </a>
        </MDBContainer>
      </div>
    </MDBFooter>
  );
};

export default FooterPage;
