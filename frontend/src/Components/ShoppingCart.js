import {useState} from 'react';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import {Col, Container, Row} from "react-bootstrap";
import useGet from "../Hooks/useGet";
import {MDBTable} from "mdb-react-ui-kit";

const ShoppingCart = (props) => {

    const handleClose = () => props.setShow(false);
    const {
        data: menuItems,
        isLoading: menuItemsLoading
    } = useGet('/api/menu/1')
    const cartItems = JSON.parse(localStorage.getItem('items')) ? JSON.parse(localStorage.getItem('items')) : []
    console.log('od storage')
    console.log(cartItems)


    return (
        <>
            <Offcanvas placement={'end'} show={props.show} onHide={handleClose}>
                <Offcanvas.Header closeButton>
                    <Offcanvas.Title>Your Order</Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                    <MDBTable>
                        <thead>
                        <tr>
                            <th className={'text-center'}>Name</th>
                            <th className={'text-center'}>Qty</th>
                            <th className={'text-center'}>Price</th>
                        </tr>
                        </thead>
                    </MDBTable>
                    {(!menuItemsLoading && cartItems.length > 0) && cartItems.map(x => {
                        console.log(x.item)
                        console.log(menuItems.filter(y => y.id === x.item))
                        const menu = menuItems.filter(y => y.id === x.item)[0]
                        return (<Container>
                            <Row className={'border rounded-5 mb-3 py-2'}>
                                <Col>
                                    {menu.name}
                                </Col>
                                <Col>
                                    <h5 className={'text-center'}>{x.qty}</h5>
                                </Col>
                                <Col>
                                    <h5 className={'text-center'}>{menu.price * x.qty}$</h5>

                                </Col>
                            </Row>
                        </Container>)
                    })}
                    <Container className={'pt-2'} style={{borderTop: '1px solid black'}}>
                        <Row className={'mb-3'}>
                            <Col>
                                Total:
                            </Col>
                            <Col className={'align-self-end pe-5'}>
                                <h5 className={'text-end'}>                                {(!menuItemsLoading && cartItems.length > 0) && cartItems.reduce((acc, x) => {
                                    const menu = menuItems.filter(y => y.id === x.item)[0]
                                    return acc + menu.price * x.qty
                                }, 0)}$</h5>
                            </Col>
                        </Row>
                        <Row>
                            <Button onClick={() => {
                                window.location.href = '/confirm/'+props.params.table+'/'+props.params.rest
                            }} className={'rounded-9'}>PROCEED WITH ORDER</Button>
                        </Row>
                    </Container>
                </Offcanvas.Body>
            </Offcanvas>
        </>
    );
}

export default ShoppingCart;