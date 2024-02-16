import React from "react";
import {Col, Container, Image, Row} from "react-bootstrap";
import {FaFacebook} from "react-icons/fa";
import {FaInstagram} from "react-icons/fa";
import {PiHamburgerFill} from "react-icons/pi";
import {AiFillTwitterCircle} from "react-icons/ai";
import "mdb-react-ui-kit/dist/css/mdb.min.css";
// import "@fortawesome/fontawesome-free/css/all.min.css";
import "../homePage.css";

const Footer = () => {
    return (
        <>
            <Container
                className="py-5 mb-3 "
                fluid
                style={{backgroundColor: "#28282b", minHeight: "50vh"}}

            >
                <Row className="gx-0">
                    <Col className="">
                        <hr
                            className="ms-5"
                            style={{
                                maxWidth: "100%",
                                marginTop: "15%",
                                border: "1px solid #ffffff",
                                opacity: "1",
                            }}
                        />
                    </Col>
                    <Col>
                        <PiHamburgerFill className={'py-3'} size={'10rem'} color={'#f3f0ec'}/>
                    </Col>
                    <Col>
                        <hr
                            className="me-5"
                            style={{
                                maxWidth: "100%",
                                marginTop: "15%",
                                border: "1px solid #ffffff",
                                opacity: "1",
                            }}
                        />
                    </Col>
                </Row>

                <Row className="my-5 align-items-center justify-content-between">
                    <Col className={'my-md-3 my-4'} md={4}>
                        <h1
                            className="blabla"
                            style={{
                                color: "white",
                                fontWeight: 600,
                                fontFamily: "Archivo Black !important",
                                fontSize: "3.5rem",
                                lineHeight: "3rem",

                            }}
                        >
                            QUICK<br></br>BITE
                        </h1>
                    </Col>
                    <Col className={'my-md-3 my-5'} md={4}>
                        <Row className="mx-auto justify-content-around">
                            <Col className="col-auto">
                                <FaFacebook color="white" size="3.5em"
                                            onClick={() => window.location = "https://www.facebook.com/"}/>
                            </Col>
                            <Col className="col-auto">
                                <FaInstagram color="white" size="3.5em"/>
                            </Col>
                            <Col className="col-auto">
                                <AiFillTwitterCircle color="white" size="3.5em"/>
                            </Col>
                        </Row>
                    </Col>
                    <Col className={'my-md-3 my-4'} md={4}>
                        <Container className="mx-auto w-50" style={{color: "white"}}>
                            <h5 className="text-md-start text-center">ABOUT US</h5>
                            <h5 className="text-md-start text-center"><a href={"/about"}
                                                                         style={{color: "white"}}>About</a></h5>
                            <h5 className="text-md-start text-center"><a href={"/"}
                                                                         style={{color: "white"}}>Contacts</a></h5>
                            <h5 className="text-md-start text-center"><a href={"/"} style={{color: "white"}}>Cookie
                                policy</a></h5>
                        </Container>
                    </Col>
                </Row>

                <Row>
                    <Container>
                        <h5 style={{color: "white"}}> &copy; ALL RIGHTS RESERVED</h5>
                        <h5 style={{color: "white"}}>DIGIT 2023</h5>
                        <h5 style={{color: "white"}}></h5>
                    </Container>
                </Row>
            </Container>
        </>
    );
};

export default Footer;
