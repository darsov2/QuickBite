import {Menu, MenuItem, Sidebar} from "react-pro-sidebar";
import {GiHamburgerMenu} from "react-icons/gi";
import {MdRestaurant, MdSoupKitchen} from "react-icons/md";
import {BiSolidFoodMenu} from "react-icons/bi";
import {BiSolidCategory} from "react-icons/bi";
import '../OrderPage.css'

import React from "react";
import {Button, Col, Container, FormControl, FormGroup, Image, Row} from "react-bootstrap";
import useFormData from "../Hooks/useFormData";
import ShoppingCart from "./ShoppingCart";

const OrderMenu = (props) => {
    const [collapsed, setCollapsed] = React.useState(true);
    const {formData, setFormData, onFormChange} = useFormData({qty: 0})
    return (
        <>
            <Col md={4}>


                <Container>

                    <div className={"mt-5 mb-5 shadow p-3 mb-5 bg-white rounded-lg"}
                         style={{border: "1 px solid black"}}>
                        <Row>
                            <Image fluid src={encodeURI('http://localhost:8080/download?fileName=' + props.data.images[0].imageUrl)}></Image>
                        </Row>
                        <Row>
                            <h3>{props.data.name}</h3>
                        </Row>
                        <Row>
                            <Col>
                                <h3>{props.data.price} $</h3>
                            </Col>
                        </Row>
                        <Row className={'gx-0'}>
                            <Col className={"mt-2"}>
                                <Button className={"btn-circle"}
                                        style={{backgroundColor: "#9dcb2c", textAlign: "center"}}
                                        onClick={() => {
                                            setFormData({qty: ++formData.qty})
                                            props.addToCart(props.data.id)
                                        }}>+</Button>
                            </Col>
                            <Col className={'d-flex align-items-center justify-content-center'}>
                                <FormGroup className={'m-auto mx-auto'}>
                                    <FormControl type={'text'} onChange={onFormChange} value={formData.qty} name={'qty'}
                                                 className={'w-50 m-auto text-center'} disabled></FormControl>
                                </FormGroup>
                            </Col>
                            <Col className={"mt-2"}>
                                <Button size={'sm'} className={"btn-circle"}
                                        style={{backgroundColor: "#9dcb2c"}}
                                        onClick={() => {
                                            setFormData({qty: (--formData.qty > 0 ? --formData.qty : 0) })
                                        }}>-</Button>
                            </Col>
                        </Row>
                    </div>
                </Container>
            </Col>

        </>
    )
}
export default OrderMenu;