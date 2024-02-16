import React, {useState} from "react";
import {Sidebar, Menu, MenuItem, SubMenu} from 'react-pro-sidebar';
import BurgerIngredients from "../Components/BurgerIngredients";
import {MdRestaurant} from "react-icons/md";
import {MdSoupKitchen} from "react-icons/md";
import {GiHamburgerMenu} from "react-icons/gi";
import {BiSolidFoodMenu} from "react-icons/bi";
import {Button, Container, Spinner, Table} from "react-bootstrap";
import useGet from "../Hooks/useGet";
import AdminSideBar from "../Components/AdminSideBar";
import {MDBTable, MDBTabs} from "mdb-react-ui-kit";
import AdminRestaurantsPanel from "./Panels/AdminRestaurantsPanel";
import AdminIngredientsPanel from "./Panels/AdminIngredientsPanel";
import AdminCategoriesPanel from "./Panels/AdminCategoriesPanel";
import AdminMenuPanel from "./Panels/AdminMenuPanel";
import AdminDiyBurgerPanel from "./Panels/AdminDiyBurgerPanel";


const AdminPage = () => {
    const [activePanel, setActivePanel] = useState('restaurant')

    return (
        <div style={{display: 'flex', height: '100%', minHeight: '100vh'}}>
            <AdminSideBar panels={setActivePanel}></AdminSideBar>

            <Container fluid className={'p-0'}>
                {activePanel === 'restaurant' && <AdminRestaurantsPanel></AdminRestaurantsPanel>}
                {activePanel === 'ingredients' && <AdminIngredientsPanel></AdminIngredientsPanel>}
                {activePanel === 'categories' && <AdminCategoriesPanel></AdminCategoriesPanel>}
                {activePanel === 'menu' && <AdminMenuPanel></AdminMenuPanel>}
                {activePanel === 'diy' && <AdminDiyBurgerPanel></AdminDiyBurgerPanel>}
            </Container>


        </div>
    );
}

export default AdminPage;