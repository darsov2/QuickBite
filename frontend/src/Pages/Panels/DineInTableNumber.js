import React, {useState} from "react";
import "mdb-react-ui-kit/dist/css/mdb.min.css";
import {TbTruckDelivery} from "react-icons/tb";
import {MdGrass} from "react-icons/md";
import {RxLapTimer} from "react-icons/rx";
import {GiHamburger} from "react-icons/gi";
import {
    Button,
    Col,
    Container,
    FormControl, FormGroup,
    Image,
    Modal, ModalBody,
    ModalHeader,
    ModalTitle,
    Nav,
    Navbar,
    Row
} from "react-bootstrap";
import {IoBagHandleSharp} from "react-icons/io5";
import { IoRestaurantSharp } from "react-icons/io5";
import useFormData from "../../Hooks/useFormData";


const DineInTableNumber = () => {

    const {
        formData,
        onFormChange
    } = useFormData({tableNum: ''})
    return (
        <>
            <Container fluid style={{backgroundColor: "#293b34", height: '105%', justifyContent: "center"}}>
                <center>

                    <Row style={{minHeight: '80vh', padding: '7% 15%'}}
                         className={'my-auto d-flex flex-row align-items-center'}>
                        <Col className={"col-lg-12"}>
                            <Container className={'d-flex align-items-center'} style={{padding: '10% 0'}}>
                                <Container onClick={() => console.log('click')} style={{width: "100%", backgroundColor: 'white', padding: '10% 0'}}
                                           className={'flex-row m-auto flex-wrap align-items-center rounded-5'}>
                                    <Row>
                                        <h2 className={'h1'} style={{color: '#293b34', fontSize: '3em'}}>Enter your table number</h2>
                                    </Row>
                                    <Row>
                                        <FormGroup className={'pt-5'}>
                                            <FormControl value={formData.tableNum} onChange={onFormChange} style={{fontSize: '2.5em'}} size={'lg'} name={'tableNum'} type={'text'} className={'w-75'}></FormControl>
                                        </FormGroup>
                                    </Row>
                                    <Row>
                                        <FormGroup className={'mt-5'}>
                                            <Button onClick={() => {
                                                window.location.href = '/order/' + formData.tableNum + '/-1'
                                            }} size={'lg'} style={{fontSize: '2em', backgroundColor: '#293b34'}}>PROCEED TO ORDER</Button>
                                        </FormGroup>
                                    </Row>
                                </Container>
                            </Container>
                        </Col>

                    </Row>
                </center>

            </Container>


        </>
    )


}


export default DineInTableNumber;