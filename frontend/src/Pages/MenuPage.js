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
import useGet from "../Hooks/useGet";
import BurgerIngredients from "../Components/BurgerIngredients";

const MenuPage = () => {

    const [show, setShow] = useState(false);

    const {
        data: menuItems,
        setData: setMenuItems,
        isLoading: loadingMenuItems,
        setRefresh
    } = useGet('/api/menu/1')

    const {
        data: categories,
        setData: setCategories,
        isLoading: loadingCategories,
    } = useGet('/api/menu/category')

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);


    return (
        <>
            <NavbarCustom color={"#28282b"}></NavbarCustom>
            <Navbar bg="light" data-bs-theme="light">
                <Container>
                    <Navbar.Brand href="#diy"></Navbar.Brand>
                    <Container className="me-auto d-flex flex-row justify-content-around">
                        {(!loadingCategories && categories.length > 0) && categories.map(category => {
                            return (<Nav.Link href={'#' + category.name + category.id} className={"nav-letters"}>{category.name}</Nav.Link>)
                        })}
                        {/*// <Nav.Link href="#classic" className={"nav-letters"}>Classic burger</Nav.Link>*/}
                        {/*// <Nav.Link href="#chicken" className={"nav-letters"}>Chicken burger</Nav.Link>*/}
                        {/*// <Nav.Link href="#kidsmenu" className={"nav-letters"}>Kids menu</Nav.Link>*/}
                        {/*// <Nav.Link href="#dessert" className={"nav-letters"}>Sides&Desserts</Nav.Link>*/}
                        {/*// <Nav.Link href="#sauces" className={"nav-letters"}>Souces</Nav.Link>*/}
                        <Nav.Link href="#diy" className={"nav-letters"}>Burger Builder</Nav.Link>
                    </Container>
                </Container>
            </Navbar>

                {(!loadingCategories && categories.length > 0) && categories.map(category => {
                    return (
                        <Container id={category.name + category.id} className={"mt-5"}>
                            <h1>{category.name}</h1>
                            <Row key={category.id} className={'mt-5'}>
                                {!loadingMenuItems && menuItems.filter(x => x.category.id === category.id).map(menuItem => {
                                    console.log(menuItem)
                                    return (<MenuItem key={menuItem.id} data={menuItem}></MenuItem>)
                                })}
                            </Row>
                            <hr style={{
                                marginTop: "3%",
                                marginLeft: "auto",
                                marginRight: "auto",
                                width: "70.666667%"
                            }}/>
                        </Container>

                    )
                })}

            <Container id={'diy'} className={'mt-5'}>
                <BurgerIngredients></BurgerIngredients>
            </Container>
            <Footer></Footer>
        </>
    )


}


export default MenuPage;