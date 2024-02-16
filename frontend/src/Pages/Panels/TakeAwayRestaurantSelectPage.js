import React, {useState} from "react";
import "mdb-react-ui-kit/dist/css/mdb.min.css";
import {TbTruckDelivery} from "react-icons/tb";
import {MdGrass} from "react-icons/md";
import {RxLapTimer} from "react-icons/rx";
import {GiHamburger} from "react-icons/gi";
import {
    Button, ButtonToolbar,
    Col,
    Container,
    FormControl, FormGroup, FormSelect,
    Image,
    Modal, ModalBody,
    ModalHeader,
    ModalTitle,
    Nav,
    Navbar,
    Row
} from "react-bootstrap";
import {IoBagHandleSharp} from "react-icons/io5";
import {IoRestaurantSharp} from "react-icons/io5";
import useGet from "../../Hooks/useGet";


const TakeAwayRestaurantSelectPage = () => {

    const {
        data: restaurants,
        isLoading: restaurantsLoading
    } = useGet('/api/restaurant/')

    const [selectedRestaurant, setSelectedRestaurant] = useState(0)

    return (
        <>
            <Container fluid style={{backgroundColor: "#293b34", height: '100%', justifyContent: "center"}}>
                <center>

                    <Row style={{minHeight: '70vh', padding: '7% 15%'}}
                         className={'my-auto d-flex flex-row align-items-center'}>
                        <Col className={"col-lg-12"}>
                            <Container className={'d-flex align-items-center'} style={{padding: '10% 0'}}>
                                <Container onClick={() => console.log('click')}
                                           style={{width: "100%", backgroundColor: 'white', padding: '10% 0'}}
                                           className={'flex-row m-auto flex-wrap align-items-center rounded-5'}>
                                    <Row>
                                        <h2 className={'h1'} style={{color: '#293b34', fontSize: '3em'}}>Choose your restaurant</h2>
                                    </Row>
                                    <Row>
                                        <FormGroup className={'pt-5'}>
                                            <FormSelect style={{fontSize: '2.5em'}} size={'lg'} name={'tableNum'}
                                                        type={'text'} className={'w-75'} onChange={(e) => {
                                                            setSelectedRestaurant(e.target.value)
                                            }}>
                                                {!restaurantsLoading && restaurants.map(restaurant => {
                                                    return (
                                                        <option key={restaurant.id}
                                                                value={restaurant.id}>{restaurant.city + ' ' + restaurant.address}</option>
                                                    )
                                                })}
                                            </FormSelect>
                                        </FormGroup>
                                        <FormGroup className={'my-5'}>
                                            <Button onClick={() => {
                                                window.location.href = '/order/-1/' + selectedRestaurant
                                            }} size={'lg'} style={{fontSize: '2em', backgroundColor: '#293b34'}}>CHOOSE YOUR MEAL</Button>
                                        </FormGroup>
                                    </Row>
                                </Container>
                            </Container>
                        </Col>

                    </Row>s
                </center>

            </Container>


        </>
    )


}


export default TakeAwayRestaurantSelectPage;