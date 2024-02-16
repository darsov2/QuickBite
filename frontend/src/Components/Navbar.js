import React, {useEffect, useState} from "react";
import {Navbar, Nav, Container, Button, ModalHeader, Modal, ModalBody, ModalTitle, Row, Col} from "react-bootstrap";
import {CgProfile} from "react-icons/cg";
// import Button from 'react-bootstrap/Button'
import '../navbar.css';
import { FaCartShopping } from "react-icons/fa6";


const NavbarCustom = (props) => {
    const [scroll, setScroll] = useState(0);
    const [background, setBackground] = useState(props.color)

    console.log(props.showCart)

    const handleScroll = () => {
        setScroll(window.scrollY);
        if(scroll > 120)
        {
            setBackground('#293b34');
        }
        else
        {
            setBackground('')
        }
    };

    props.color === '' && window.addEventListener('scroll', handleScroll);


    return (
        <>
            <Navbar expand="lg" className="bg-body-tertiary  nb-fix"
                    style={background == "" ? {
                    } : {backgroundColor: background}}>
                <Container>
                    <Navbar.Brand
                        className="blabla"
                        style={{
                            color: "white !important",
                            fontWeight: 800,
                            fontFamily: "Raleway!important",
                            fontSize: "2.1rem",
                            lineHeight: "2rem",
                            textDecoration: "bold",
                            textAlign: 'left'
                        }}
                        href="/"
                    >
                        QUICK
                        <br/>
                        BITES.
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav bg="light" className="mx-auto">
                            <Nav.Link
                                className="mx-3 nav-letters"
                                style={{color: "white"}}
                                href="/"
                            >
                                HOME
                            </Nav.Link>
                            <Nav.Link
                                className="mx-3 nav-letters"
                                style={{color: "white"}}
                                href="/plan"
                            >
                                MENU
                            </Nav.Link>
                            <Nav.Link
                                className="mx-3 nav-letters"
                                style={{color: "white"}}
                                href="/about"
                            >
                                LOYALTY
                            </Nav.Link>
                        </Nav>
                        <Nav>
                            {<Button size={"lg"}
                                     href="/dining"
                                     style={{
                                         backgroundColor: "#9dcb2c",
                                         borderRadius: "25px"
                                     }}>
                                NEW ORDER
                            </Button>}
                            {props.showCart !== undefined && <FaCartShopping size={'3em'} color={'white'} onClick={() => props.showCart(true)}/>}
                            {/*{props.showCart !== null && <Button variant="primary" onClick={() => props.showCart(true)}>*/}
                            {/*    Launch*/}
                            {/*</Button>}*/}
                        </Nav>
                        {/*<Navbar.Brand*/}
                        {/*    style={{*/}
                        {/*        color: "white",*/}
                        {/*        fontWeight: 800,*/}
                        {/*        fontSize: "2.1rem",*/}
                        {/*    }}*/}
                        {/*    href="/"*/}
                        {/*>*/}
                        {/*    <CgProfile onClick={() => window.location = "/login"}/>*/}
                        {/*</Navbar.Brand>*/}
                    </Navbar.Collapse>
                </Container>
            </Navbar>

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



        </>
    );
};

export default NavbarCustom;
