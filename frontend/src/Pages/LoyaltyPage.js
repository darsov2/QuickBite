import NavbarCustom from "../Components/Navbar";
import Hero from "../Components/Hero";
import '../loyaltyPage.css'
import HeroLoyalty from "../Components/HeroLoyalty";
import {Container, Row} from "react-bootstrap";
import Coupons from "../Components/Coupons";
import Footer from "../Components/Footer";
import React from "react";

const LoyaltyPage = () => {
    return(
        <>
                <div className="parallax parallax-loyalty">
                    <div className="z-proba">
                        <NavbarCustom color={""}></NavbarCustom>

                        <HeroLoyalty showStats="true"  text={"\"QuickBites ensures that every order counts with our exclusive coupons – earn one point for every delectable purchase. Savor the simplicity, relish the rewards!\""}/>
                    </div>
                    <div className="overlay"></div>
                </div>

            <Container className={"my-5"}>
                <h1>EARN 1 COUPON FOR <br/>
                    EVERY ORDER YOU MAKE</h1>
            </Container>

            <Container className={'px-4 mb-3'}>
                <Coupons img={"https://mcdonalds.com.au/sites/mcdonalds.com.au/files/product-Frozen-Coke-mobile-202305_1.png"} title={"C877167"} podtitle={"quickbites.com"}> </Coupons>
            </Container>

            <Footer></Footer>

        </>
    )
}


export default LoyaltyPage;