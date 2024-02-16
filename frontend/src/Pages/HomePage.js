import React, {useState} from "react";
import Hero from "../Components/Hero";
import "mdb-react-ui-kit/dist/css/mdb.min.css";
import NavbarCustom from "../Components/Navbar";
import "../homePage.css";
import {TbTruckDelivery} from "react-icons/tb";
import {MdGrass} from "react-icons/md";
import {RxLapTimer} from "react-icons/rx";
import {GiHamburger} from "react-icons/gi";
import ClientFavorites from "../Components/ClientFavorites";

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
import BurgerBuild from "../Components/BurgerBuild";
import BurgerIngredients from "../Components/BurgerIngredients";
import MenuItem from "../Components/MenuItem";
import MenuDetailsModal from "../Components/MenuDetailsModal";
import ImageScroll from "../Components/ImageScroll";

const HomePage = () => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);


    return (
        <>
            <div style={{
                display: "inline-grid",
                overflow: 'auto',
                width: '100%'
            }}>
                <div className="parallax">
                    <div className="z-proba">
                        <NavbarCustom color={""}></NavbarCustom>
                        <Hero showStats="true"  text={"Delight in Every Bite, Quick and Right!\n"}/>
                    </div>
                    <div className="overlay"></div>
                </div>
            </div>

            <Container className={"my-5"}>
                <Row>
                    <h1>Where Every Bite Tells a Delicious Story...</h1>
                </Row>
                <hr></hr>
                <Row>
                    <p className={"text-justify"}>"Welcome to QuickBite, where indulgence meets convenience. We
                        understand
                        your fast-paced lifestyle, leaving little room for cooking. Relax, let us handle the kitchen –
                        it's
                        our expertise, and we're committed to delivering a premium dining experience right to your
                        doorstep!"</p>
                </Row>
            </Container>

            <Container className={'mb-5'}>
                <Row className={'gx-3'}>
                    <Col className={'icon'} md={3}>
                        <Row className={'d-flex flex-row align-items-start justify-content-start'}>
                            <TbTruckDelivery size={'3.5rem'} color={'#9dcb2c'}/>
                        </Row>
                        <Row className={"mt-4 mb-2"}>
                            <h5>ANYTIME, ANYWHERE</h5>
                        </Row>
                        <Row className={'w-75 m-auto'}>
                            <p style={{textAlign: "justify", fontFamily: "Raleway"}}>
                                Whether you're craving a juicy burger for breakfast, lunch, or dinner, we've got you
                                covered. Our delivery service is available anytime, anywhere. You can also pick up your
                                order from our nearest location.
                            </p>
                        </Row>
                    </Col>
                    <Col className={'icon'} md={3}>
                        <Row>
                            <MdGrass size={'3.5rem'} color={'#9dcb2c'}/>
                        </Row>
                        <Row className={"mt-4 mb-2"}>
                            <h5>GRASS-FED BEEF</h5>
                        </Row>
                        <Row className={'w-75 m-auto'}>
                            <p style={{textAlign: "justify"}}>
                                Our beef is 100% grass-fed and free-range. That means no hormones, no antibiotics, and
                                no
                                GMOs. Just pure, natural, and delicious beef. You can taste the difference in every
                                bite.
                            </p>
                        </Row>
                    </Col>
                    <Col className={'icon'} md={3}>
                        <Row>
                            <RxLapTimer size={'3.5rem'} color={'#9dcb2c'}/>
                        </Row>
                        <Row className={"mt-4 mb-2"}>
                            <h5>HOT AND FRESH</h5>
                        </Row>
                        <Row className={'w-75 m-auto'}>
                            <p style={{textAlign: "justify"}}>
                                You're only twenty minutes away from your delicious tasty meals delivered right to your
                                home. We work with the best chefs in each town to ensure that you're 100% happy.
                            </p>
                        </Row>
                    </Col>
                    <Col className={'icon'} md={3}>
                        <Row>
                            <GiHamburger size={'3.5rem'} color={'#9dcb2c'}/>
                        </Row>
                        <Row className={"mt-4 mb-2"}>
                            <h5>CUSTOMIZE YOUR BURGER</h5>
                        </Row>
                        <Row className={'w-75 m-auto'}>
                            <p style={{textAlign: "justify"}}>
                                You're the boss of your burger. You can choose from our wide range of toppings, sauces,
                                and
                                buns to create your perfect burger. You can also try our signature burgers, such as the
                                Bacon Cheeseburger.
                            </p>
                        </Row>
                    </Col>
                </Row>
            </Container>


            <Container fluid className={'p-0 m-0'} style={{overflow: "hidden"}}>
                <Row className={'gx-0 flex-nowrap overflow-auto'}>
                    {/*<Col className={'meal-photo-cont'} md={3}>*/}
                    {/*    <Image className={'meal-photo'} fluid*/}
                    {/*           src={'https://www.bambamarha.hu/wp-content/uploads/2023/07/Big-Kahuna-Burger.webp'}/>*/}
                    {/*</Col>*/}
                    <ImageScroll img={'https://www.bambamarha.hu/wp-content/uploads/2023/07/Premium-Sajtburger.webp'}></ImageScroll>
                    <ImageScroll img={'https://www.bambamarha.hu/wp-content/uploads/2023/07/Premium-Sajtburger.webp'}></ImageScroll>
                    <ImageScroll img={'https://www.bambamarha.hu/wp-content/uploads/2023/07/Premium-Sajtburger.webp'}></ImageScroll>
                    <ImageScroll img={'https://www.bambamarha.hu/wp-content/uploads/2023/07/Premium-Sajtburger.webp'}></ImageScroll>
                    <ImageScroll img={'https://www.bambamarha.hu/wp-content/uploads/2023/07/Premium-Sajtburger.webp'}></ImageScroll>
                    <ImageScroll img={'https://www.bambamarha.hu/wp-content/uploads/2023/07/Premium-Sajtburger.webp'}></ImageScroll>
                    <ImageScroll img={'https://www.bambamarha.hu/wp-content/uploads/2023/07/Premium-Sajtburger.webp'}></ImageScroll>
                </Row>
            </Container>

            <Container fluid className={"p-5"}>
                <Row style={{textAlign: "center"}} className={'p-3 mt-4 mb-3'}>
                    <h1>CLIENT'S FAVOURITES</h1>
                </Row>
                <Row>
                    <ClientFavorites img={'https://www.bambamarha.hu/wp-content/uploads/2023/07/Big-Kahuna-Burger.webp\''}
                                  title={'Burger name'} price={'400$'}/>
                    <ClientFavorites img={'https://www.bambamarha.hu/wp-content/uploads/2023/07/Big-Kahuna-Burger.webp\''}
                                     title={'Burger name'} price={'400$'}/>
                    <ClientFavorites img={'https://www.bambamarha.hu/wp-content/uploads/2023/07/Big-Kahuna-Burger.webp\''}
                                     title={'Burger name'} price={'400$'}/>
                </Row>

            </Container>


            <Footer></Footer>

            {/*<Navbar bg="light" data-bs-theme="light">*/}
            {/*    <Container>*/}
            {/*        <Navbar.Brand href="#diy"></Navbar.Brand>*/}
            {/*        <Container className="me-auto d-flex flex-row justify-content-around">*/}
            {/*            <Nav.Link href="#diy" className={"nav-letters"}>Diy burger</Nav.Link>*/}
            {/*            <Nav.Link href="#classic" className={"nav-letters"}>Classic burger</Nav.Link>*/}
            {/*            <Nav.Link href="#chicken" className={"nav-letters"}>Chicken burger</Nav.Link>*/}
            {/*            <Nav.Link href="#kidsmenu" className={"nav-letters"}>Kids menu</Nav.Link>*/}
            {/*            <Nav.Link href="#dessert" className={"nav-letters"}>Sides&Desserts</Nav.Link>*/}
            {/*            <Nav.Link href="#sauces" className={"nav-letters"}>Souces</Nav.Link>*/}
            {/*        </Container>*/}
            {/*    </Container>*/}
            {/*</Navbar>*/}

            {/*<Modal*/}
            {/*    show={show}*/}
            {/*    onHide={handleClose}*/}
            {/*    // size={'lg'}*/}
            {/*    dialogClassName="w-75"*/}
            {/*    keyboard={false}*/}
            {/*    style={{minWidth: '75%'}}*/}
            {/*>*/}
            {/*    <ModalHeader closeButton>*/}
            {/*        <ModalTitle>Modal title</ModalTitle>*/}
            {/*    </ModalHeader>*/}
            {/*    <ModalBody>*/}
            {/*        <Container>*/}
            {/*            <Row>*/}
            {/*                <Col className={'justify-content-center d-flex flex-col'} style={{overflow: 'hidden'}}>*/}
            {/*                    <Image fluid style={{maxWidth:"60vh"}}*/}
            {/*                           src={'https://www.bambamarha.hu/wp-content/uploads/2023/07/Big-Kahuna-Burger.webp'}></Image>*/}
            {/*                </Col>*/}
            {/*                <Col style={{marginTop: '10%'}} className={'ps-5'}>*/}
            {/*                    <Row className={'mb-3'}>*/}
            {/*                        <h2 className={'h2 text-start'}>Mila's Burger</h2>*/}
            {/*                    </Row>*/}
            
            {/*                    <hr style={{*/}
            {/*                        display: "block",*/}
            {/*                        border: "3px solid black",*/}
            {/*                        borderRadius: '3px',*/}
            {/*                        margin: "1em 0",*/}
            {/*                        maxWidth: "100px",*/}
            {/*                        width: "100%"}}/>*/}
            
            {/*                    <Row className={'mb-3'}>*/}
            {/*                        <h2 className={' h2 text-start'}>15$</h2>*/}
            {/*                    </Row>*/}
            {/*                    <Row>*/}
            {/*                        <Col md={4}>*/}
            {/*                            <FormControl type="number" min="0" placeholder="1"/>*/}
            {/*                        </Col>*/}
            {/*                        <Col md={8}>*/}
            {/*                            <Button className={'w-100'} style={{backgroundColor: 'gray'}}>Add to cart</Button>*/}
            {/*                        </Col>*/}
            
            {/*                    </Row>*/}
            {/*                    <Row>*/}
            {/*                        <hr className={'my-5'}/>*/}
            {/*                        <Col>*/}
            {/*                            <p className={'text-start'}>Ingredients: Grilled chicken, creamy peri-peri sauce, bacon, melted provolone, red onions, lettuce, tomatoes, and jalapenos on toasty bread.</p>*/}
            {/*                        </Col>*/}
            {/*                    </Row>*/}
            {/*                </Col>*/}
            
            
            {/*            </Row>*/}
            {/*        </Container>*/}
            {/*    </ModalBody>*/}
            {/*</Modal>*/}


        </>
    )
}

export default HomePage;