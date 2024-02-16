import React, {useState} from "react";
import {Button, Col, Container, FormControl, FormGroup, FormLabel, Row} from "react-bootstrap";
import {MDBTable} from "mdb-react-ui-kit";
import NavbarCustom from "../Components/Navbar";
import useGet from "../Hooks/useGet";
import useCreate from "../Hooks/useCreate";
import data from "bootstrap/js/src/dom/data";
import {useParams} from "react-router-dom";

const OrderConfirmPage = (props) => {

    const cart = JSON.parse(localStorage.getItem('items'))
    const [carts, setCarts] = useState(cart)
    const params = useParams();
    console.log('od confirm')
    const {
        data: menuItems,
        isLoading: menuItemsLoading
    } = useGet('/api/menu/1')

    const {
        createEntity
     } = useCreate();
    console.log(cart)
    return (
        <>
            <NavbarCustom color={'#28282b'}></NavbarCustom>
            <Container fluid className={'mt-3'}>
                <Row className={''}>
                    <Row >
                        <MDBTable hover={true}>
                            <thead>
                            <tr>
                                <th>Name</th>
                                <th>Price</th>
                                <th>Qty</th>
                                <th>Subtotal</th>
                            </tr>
                            </thead>
                            <tbody>
                            {(!menuItemsLoading && cart.length > 0) && cart.map((ci, i) => {
                                const menu = menuItems.filter(y => y.id === ci.item)[0]
                                return (
                                    <tr>
                                        <td>{menu.name}</td>
                                        <td>{menu.price}</td>
                                        <td>
                                            <Row className={'gx-0'}>
                                                <Col className={'d-flex align-items-center justify-content-center'}>
                                                    <FormGroup className={'m-auto mx-auto'}>
                                                        <FormControl type={'text'} value={ci.qty} name={'qty'}
                                                                     className={'m-auto text-center p-0'}
                                                                     style={{fontSize: '1em'}}
                                                                     disabled></FormControl>
                                                    </FormGroup>
                                                </Col>
                                        </Row></td>
                                        <td>{ci.qty * menu.price}</td>
                                    </tr>
                                )
                            })}
                            </tbody>
                        </MDBTable>
                    </Row>
                    <Row>
                        <Row className={'pb-3'} style={{borderBottom: '1px solid black'}}>
                            <Col>
                                <h2>Total in the cart</h2>
                            </Col>
                            <Col>
                                <h2>350$</h2>
                            </Col>
                        </Row>
                        <Row className={'pb-3 mt-3'} style={{borderBottom: '1px solid black'}}>
                            <Col>
                                <FormGroup>
                                    <FormLabel>Your Name</FormLabel>
                                    <FormControl className={'w-50 m-auto'} type={'text'}></FormControl>
                                </FormGroup>
                            </Col>
                        </Row>
                        <Row className={'my-3 justify-content-center'}>
                            <Button style={{backgroundColor: '#9dcb2c'}} color={'#9dcb2c'} onClick={() => {
                                const dataToSend = {cartItems: cart.map(x => x.id + ',' + x.qty).join(';'),
                                restaurantTableId: params.table,
                                restuarantId: params.rest,
                                orderType: (params.rest === -1 ? 'TAKE_AWAY' : 'DINE_IN'),}
                                console.log(dataToSend)
                                createEntity('/api/order/save', dataToSend)
                            }} className={'w-50'}>ORDER</Button>
                        </Row>
                        <Row className={'pb-3 mt-3'} style={{borderBottom: '1px solid black'}}>
                            <Col>
                                <FormGroup>
                                    <FormLabel>Coupon code</FormLabel>
                                    <FormControl className={'w-50 m-auto'} type={'text'}></FormControl>
                                </FormGroup>
                            </Col>
                        </Row>
                        <Row className={'my-3 justify-content-center'}>
                            <Button style={{backgroundColor: '#9dcb2c'}} color={'#9dcb2c'} className={'w-50'}>APPLY</Button>
                        </Row>
                    </Row>
                </Row>
            </Container>
        </>
    )
}

export default OrderConfirmPage;