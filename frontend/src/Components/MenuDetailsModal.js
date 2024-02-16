import React from "react";
import MenuItem from "./MenuItem";
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

const MenuDetailsModal = (props) =>{
    return (
        <>
            <Modal
                show={props.show}
                onHide={props.handleClose}
                size={'xl'}
                dialogClassName="w-75"
                keyboard={false}
                style={{minWidth: '75%'}}
            >
                <ModalHeader closeButton>
                </ModalHeader>
                <ModalBody>
                    <Container>
                        <Row>
                            <Col className={'justify-content-center d-flex flex-col'} style={{overflow: 'hidden'}}>
                                <Image fluid style={{maxWidth:"60vh"}}
                                       src={props.img}></Image>
                            </Col>
                            <Col style={{marginTop: '10%'}} className={'ps-5'}>
                                <Row className={'mb-3'}>
                                    <h2 className={'h2 text-start'}>{props.title}</h2>
                                </Row>

                                <hr style={{
                                    display: "block",
                                    border: "3px solid black",
                                    borderRadius: '3px',
                                    margin: "1em 0",
                                    maxWidth: "100px",
                                    width: "100%"}}/>

                                <Row className={'mb-3'}>
                                    <h2 className={'h2 text-start'}>{props.price}</h2>
                                </Row>
                                {/*<Row>*/}
                                {/*    <Col md={4}>*/}
                                {/*        <FormControl type="number" min="0" placeholder="1"/>*/}
                                {/*    </Col>*/}
                                {/*    <Col md={8}>*/}
                                {/*        <Button className={'w-100'} style={{backgroundColor: 'gray'}}>Add to cart</Button>*/}
                                {/*    </Col>*/}

                                {/*</Row>*/}
                                <Row>
                                    <hr className={'my-5'}/>
                                    <Col>
                                        <p className={'text-start'}>{props.ingredients}</p>
                                    </Col>
                                </Row>
                            </Col>


                        </Row>
                    </Container>
                </ModalBody>
            </Modal>
        </>
)
}
export default MenuDetailsModal;