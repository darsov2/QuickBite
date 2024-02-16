import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import HomePage from "./Pages/HomePage";
// import 'bootstrap/dist/css/bootstrap.css';
import "./homePage.css"
import AdminPage from "./Pages/AdminPage";
import MenuPage from "./Pages/MenuPage";
import LoyaltyPage from "./Pages/LoyaltyPage";
import OrderPage from "./Pages/OrderPage";
import DiningLocationPage from "./Pages/DiningLocationPage";
import React, {useEffect, useState} from "react";
import DineInTableNumber from "./Pages/Panels/DineInTableNumber";
import TakeAwayRestaurantSelectPage from "./Pages/Panels/TakeAwayRestaurantSelectPage";
import OrderConfirmPage from "./Pages/OrderConfirmPage";

function App() {
    // const [cartItems, setCartItems] = useState([]);
    const [cartItems, setCartItems] = useState(localStorage.getItem('items') !== '' ? JSON.parse(localStorage.getItem('items')) : []);
    //
    useEffect(() => {
        console.log()
        console.log('efektot')
        localStorage.setItem('items', JSON.stringify(cartItems));
    }, [cartItems]);

    return (
        <div className="App">
            {/*<HomePage></HomePage>*/}
            {/*  <AdminPage></AdminPage>*/}
            <BrowserRouter>
                <Routes>
                    <Route path={"/"} element={<HomePage/>}/>
                    <Route path={"/admin"} element={<AdminPage/>}/>
                    <Route path={"/plan"} element={<MenuPage/>}/>
                    <Route path={"/about"} element={<LoyaltyPage/>}/>
                    <Route path={"/order/:table/:rest"} element={<OrderPage cart={cartItems} setCart={setCartItems}/>}/>
                    <Route path={"/dining"} element={<DiningLocationPage/>}/>
                    <Route path={"/dinein"} element={<DineInTableNumber/>}/>
                    <Route path={"/takeaway"} element={<TakeAwayRestaurantSelectPage/>}/>
                    <Route path={"/confirm/:table/:rest"} element={<OrderConfirmPage/>}/>
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
