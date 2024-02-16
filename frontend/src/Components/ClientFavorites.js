import {Menu, MenuItem, Sidebar} from "react-pro-sidebar";
import {GiHamburgerMenu} from "react-icons/gi";
import {MdRestaurant, MdSoupKitchen} from "react-icons/md";
import {BiSolidFoodMenu} from "react-icons/bi";
import { BiSolidCategory } from "react-icons/bi";
import '../OrderPage.css'

import React from "react";
import {Button, Col, Container, Image, Row} from "react-bootstrap";

const ClientFavorites = (props) => {
    const [collapsed, setCollapsed] = React.useState(true);

    return (
        <>
            <Col md={4}>
                <Container>

                    <div className={"mt-5 mb-5 shadow p-3 mb-5 bg-white rounded-lg"} style={{border:"1 px solid black"}} >
                        <Row>
                            <Image fluid src={props.img}></Image>
                        </Row>
                        <Row>
                            <h3>{props.title}</h3>
                        </Row>
                        <Row>
                            <h3>{props.price}</h3>
                        </Row>
                    </div>
                </Container>
            </Col>
        </>
    )
}
export default ClientFavorites;