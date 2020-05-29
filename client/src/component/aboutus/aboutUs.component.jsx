import React from "react";
import "./about.style.scss";

import { MDBMask, MDBRow, MDBCol, MDBView, MDBContainer } from "mdbreact";

class AboutUsPage extends React.Component {
  render() {
    return (
      <div id="parallaxintro">
        <MDBView src="/asset/images/back.jpg" fixed>
          <MDBMask className="rgba-white-light" />
          <MDBContainer
            className="d-flex justify-content-center align-items-center"
            style={{ height: "100%", width: "100%", paddingTop: "15rem" }}
          >
            <MDBRow>
              <MDBCol md="12" className="mb-4 white-text text-center">
                <h1
                  style={{ color: "#fff" }}
                  className="display-3 mb-0 pt-md-5 pt-5 white-text font-weight-bold"
                >
                  Shubham{" "}
                  <span className="indigo-text font-weight-bold">Kumar</span>
                </h1>
                <hr className="hr-light my-4" />
              </MDBCol>
            </MDBRow>
          </MDBContainer>
        </MDBView>
        <main>
          <MDBContainer>
            <div style={{ background: "#fff" }} className=" description">
              <MDBCol md="12" className="text-center">
                <h2 style={{ color: "#111" }}>About Me</h2>
                <h6 style={{ color: "#111" }}>
                  I am a full stack developer with node.js and I seeking
                  challenges related to web development where I can work on real
                  life projects, enhance my knowledge and put my 100 % in
                  organization’s growth . Currently I am learning mern stack
                  development.
                </h6>
                <h3>Projects that I have done</h3>
                <div className="projects">
                  <a href="http://theshopperking.herokuapp.com/">
                    The Shopper King
                  </a>{" "}
                  <a href="http://corona-help-desk.herokuapp.com/">
                    Corona Help Desk
                  </a>{" "}
                  <a href="https://lineupx-job-portal.herokuapp.com/">
                    Job Portal
                  </a>{" "}
                </div>
                .
                <h5 style={{ color: "#fff" }}>
                  I would like to thank my friend E.Ajay Bharath .
                </h5>
              </MDBCol>
            </div>
          </MDBContainer>
        </main>
      </div>
    );
  }
}

export default AboutUsPage;
