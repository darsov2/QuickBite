import React, {useState} from "react";
import Hero from "../Components/Hero";
import "mdb-react-ui-kit/dist/css/mdb.min.css";
import NavbarCustom from "../Components/Navbar";
import "../homePage.css";
import {TbTruckDelivery} from "react-icons/tb";
import {MdGrass} from "react-icons/md";
import {RxLapTimer} from "react-icons/rx";
import {GiHamburger} from "react-icons/gi";
import HomePage from "./HomePage";
import {
    Button,
    Col,
    Container,
    FormControl,
    Image,
    Modal, ModalBody,
    ModalHeader,
    ModalTitle,
    Nav,
    Navbar,
    Row
} from "react-bootstrap";
import Footer from "../Components/Footer";
import MenuItem from "../Components/MenuItem";
import {IoBagHandleSharp} from "react-icons/io5";
import { IoRestaurantSharp } from "react-icons/io5";
import {Link} from "react-router-dom";


const DiningLocationPage = () => {


    return (
        <>
            {/*<Modal>*/}
            {/*    <ModalHeader closeButton>*/}
            {/*        <ModalTitle>DINING LOCATION</ModalTitle>*/}
            {/*    </ModalHeader>*/}


            {/*    <ModalBody>*/}
            {/*        <Container>*/}
            {/*            <Row>*/}
            {/*                <Col></Col>*/}
            {/*                <Col></Col>*/}
            {/*            </Row>*/}
            {/*        </Container>*/}
            {/*    </ModalBody>*/}
            {/*</Modal>*/}


            <Container fluid style={{backgroundColor: "#293b34", height: '105%', justifyContent: "center"}}>
                <center>
                    <Row className={'pt-5'}>
                        <h2 className={'h1'} style={{color: 'white', fontSize: '5em'}}>Dining Location</h2>
                    </Row>


                    <Row style={{minHeight: '80vh', padding: '7% 15%'}}
                         className={'my-auto d-flex flex-row align-items-center'}>
                        <Link to={'/dinein'}>
                        <Col className={"col-lg-6"}>
                            <Container className={'d-flex align-items-center'} style={{padding: '10% 0'}}>
                                <Container onClick={() => console.log('click')} style={{width: "100%", backgroundColor: 'white', padding: '10% 0'}}
                                           className={'flex-row m-auto flex-wrap align-items-center rounded-5'}>
                                    <Row>
                                        <IoBagHandleSharp size={'10em'}/>
                                    </Row>
                                    <Row>

                                        <h1 className={'h1 m-auto'}>
                                            EAT IN
                                        </h1>
                                    </Row>
                                </Container>
                            </Container>
                        </Col>
                        </Link>
                        <Link to={'/takeaway'}>
                        <Col className={"col-lg-6"}>
                            <Container className={'d-flex align-items-center'} style={{padding: '10% 0'}}>
                                <Container style={{width: "100%", backgroundColor: 'white', padding: '10% 0'}}
                                           className={'flex-row m-auto flex-wrap align-items-center rounded-5'}>
                                    <Row>
                                        <IoRestaurantSharp size={'10em'}/>
                                    </Row>
                                    <Row>

                                        <h1 className={'h1 m-auto'}>
                                            TAKE AWAY
                                        </h1>
                                    </Row>
                                </Container>
                            </Container>
                        </Col>
                        </Link>
                    </Row>
                </center>

            </Container>


        </>
    )


}


export default DiningLocationPage;