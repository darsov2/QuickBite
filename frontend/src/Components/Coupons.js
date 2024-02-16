import React from "react";

import {
    Button,
    Col,
    Container,
    FormControl,
    Image,
    Modal,
    ModalBody,
    ModalHeader,
    ModalTitle,
    Row
} from "react-bootstrap";
import {GiHamburger} from "react-icons/gi";
import Footer from "./Footer";

const Coupons = (props) => {
    return (
        <>
            <Container className={'rounded-5'} style={{border: "1px solid black"}}>
                <Row>
                    <Col className={'justify-content-center d-flex flex-col px-5'} style={{overflow: 'hidden'}} md={4}>
                        <Row className={'d-flex flex-row align-items-end align-content-end'}>
                            <Col>
                                <h2 className={'h2 text-start'} style={{
                                    fontWeight: "500",
                                    fontSize: "3em",
                                    alignContent: "center",
                                }}>DISCOUNT</h2>
                            </Col>
                            <hr style={{borderTop: "1px dotted black"}}/>
                            <Col>
                                <h2 className={'h2 text-start'} style={{
                                    fontWeight: "800",
                                    fontSize: "5em",
                                    alignContent: "center",
                                }}>COUPON</h2>
                            </Col>
                        </Row>

                    </Col>


                    <Col style={{marginTop: '10%'}} className={'pe-0'} style={{backgroundColor: "#9dcb2c"}} md={8}>
                        <Row className={""}>
                            <Col className={'d-flex justify-content-center align-items-center'}>
                                <GiHamburger size={'15em'}/>
                            </Col>
                            <Col className={"text-center"}>
                                <Container fluid className={'mt-0 rounded-bottom-9'} style={{backgroundColor: 'white'}}>
                                    <h1 style={{fontSize: '10em'}}>50%</h1>
                                </Container>
                                <h2 className={'h2 text-start'}
                                    style={{fontWeight: "600", fontSize: "3em"}}>{props.title}</h2>
                                <h3 className={'h3 text-start'}
                                    style={{fontWeight: "400", fontSize: "2em"}}>{props.podtitle}</h3>
                                <h4></h4>
                            </Col>
                            <hr/>
                            <p>VALID THRU: 15.12.2023</p>
                        </Row>


                    </Col>


                </Row>
            </Container>
        </>
    )
}
export default Coupons;