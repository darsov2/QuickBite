import React, {useState} from "react";
import Hero from "../Components/Hero";
import "mdb-react-ui-kit/dist/css/mdb.min.css";
import "../homePage.css";
import {TbTruckDelivery} from "react-icons/tb";
import {MdGrass} from "react-icons/md";
import {RxLapTimer} from "react-icons/rx";
import {GiHamburger} from "react-icons/gi";
import HomePage from "./HomePage";
import '../OrderPage.css'
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
import OrderMenu from "../Components/OrderMenu";
import NavbarCustom from "../Components/Navbar";
import OrderSideBar from "../Components/OrderSideBar";
import useGet from "../Hooks/useGet";
import ShoppingCart from "../Components/ShoppingCart";
import {useParams} from "react-router-dom";

//nizata so kategorii map vo
const OrderPage = (props) => {
    const [showCart, setShowCart] = useState(false)
    const params = useParams();
    console.log(params)
    const cart = props.cart;
    console.log()

    const {
        data: menuItems,
        isLoading: loadingMenuItems
    } = useGet('/api/menu/1')

    const addToCart = (id) => {
        console.log('Vo add to')
        console.log(cart)
        console.log(id)
        console.log(cart.filter(x => x.item.id === id))
        if(cart.filter(x => x.item === id).length > 0)
        {
            const index = cart.findIndex(x => x.item === id);
            props.setCart(prevCart => {
                console.log('bla')
                console.log(...prevCart.slice(0, index))
                console.log(...prevCart.slice(index))
                return [...prevCart.slice(0, index),
                    {item: id, qty: prevCart[index].qty + 1},
                    ...prevCart.slice(index + 1)
                ]
            })
            // ++cart.filter(x => x.id === id)[0].qty
        }
        else
        {
            props.setCart(prevCart => {
                return [
                    ...prevCart,
                    {item: id, qty: 1}
                ]
            })
            cart.push({item: id, qty: 1})
        }
    }

    return (<>
        <NavbarCustom color={"#28282b"} showCart={setShowCart}></NavbarCustom>
        <div style={{display: 'flex', height: '100%', minHeight: '100vh'}}>
            <OrderSideBar></OrderSideBar>
            <Container fluid className={'p-0'}>
                <Container>
                    <Row>
                        <h1>{props.categoryTitle}</h1>
                    </Row>

                    <Row>
                        {!loadingMenuItems && menuItems.map(menu => {
                            return (
                                <OrderMenu
                                    addToCart={addToCart}
                                    cart={cart}
                                    data={menu}></OrderMenu>
                            )
                        })}
                    </Row>


                </Container>

            </Container>

        </div>

        <Footer></Footer>

        <ShoppingCart params={params} cart={cart} menuItems={!loadingMenuItems && menuItems} setShow={setShowCart} show={showCart}></ShoppingCart>
    </>)
}

export default OrderPage;