import React from "react";
import { Row, Container, Col, Button } from "react-bootstrap";
// import "@fontawesome/css/all.min.css";
// import "../../../../../../Desktop/trip2mk/src/HomePage/homePage.css";
import Nav from "react-bootstrap/Nav";
import { CgProfile } from "react-icons/cg";

import NavDropdown from "react-bootstrap/NavDropdown";
import Counter from "./Counter";
// import Counter from "../../../../../../Desktop/trip2mk/src/HomePage/Counter";
// import Navbar from "../Layout/Navbar;
// import NavbarCustom from "../Layout/Navbar";


const Hero = (props) => {
  return (
    <>
      <Container style={{ marginTop: "13%" }}>
        <h1
          className="visit-macedonia"
          dangerouslySetInnerHTML={{ __html: props.text }}
        ></h1>
        <h1 className="visit-macedonia"></h1>
      </Container>

      <Container style={{ marginTop: "20%", marginRight: "3%" }}>
        <Row >
          <Col md="auto" className="my-auto">
            <Button hidden={true} className="button-white" href={'/plan#destinations'}>VIEW DESTINATIONS</Button>
          </Col>
          <Col id={'stats-placeholder'}></Col>
          {props.showStats === "true" && (
            <>
              <Col>
                <Counter start={0} end={1000}></Counter>
                {/* <span className="footer-number">5345</span> */}
                <br />
                <span className="footer-numbers">happy customers</span>
              </Col>
              <Col
                style={{
                  borderRight: "2px solid white",
                  borderLeft: "2px solid white",
                }}
              >
                <Counter start={0} end={20}></Counter>
                {/* <span className="footer-number">1234</span> */}
                <br />
                <span className="footer-numbers">unique burgers</span>
              </Col>
              <Col>
                <Counter start={0} end={10}></Counter>
                {/* <span className="footer-number">1234</span> */}
                <br />
                <span className="footer-numbers">restaurants</span>
              </Col>
            </>
          )}
        </Row>
      </Container>
    </>
  );
};

export default Hero;
