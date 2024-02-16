import {Menu, MenuItem, Sidebar} from "react-pro-sidebar";
import {GiHamburgerMenu} from "react-icons/gi";
import {MdRestaurant, MdSoupKitchen} from "react-icons/md";
import {BiSolidFoodMenu} from "react-icons/bi";
import {BiSolidCategory} from "react-icons/bi";

import React from "react";

const AdminSideBar = (props) => {
    const [collapsed, setCollapsed] = React.useState(true);

    return (
        <>
            <Sidebar backgroundColor='#666462' color={'white'} collapsed={collapsed} rootStyles={{
                color: '#fff',
                fontFamily: 'Raleway',
                fontSize: '1.5rem'
            }}>
                <Menu rootStyles={{}}>
                    <MenuItem rootStyles={{
                        '&:hover': {
                            color: '#9dcb2c',
                        }
                    }} onClick={() => setCollapsed(!collapsed)} icon={<GiHamburgerMenu color={'white'}/>
                    }>Close Menu</MenuItem>
                    <MenuItem rootStyles={{
                        '&:hover': {
                            color: '#9dcb2c',
                        }
                    }} label="Charts" icon={<MdRestaurant/>
                    }
                              onClick={() => props.panels('restaurant')}>
                        Restaurants
                    </MenuItem>
                    <MenuItem rootStyles={{
                        '&:hover': {
                            color: '#9dcb2c',
                        }
                    }} icon={<MdSoupKitchen/>}
                              onClick={() => props.panels('ingredients')}>
                        Ingredients
                    </MenuItem>
                    <MenuItem rootStyles={{
                        '&:hover': {
                            color: '#9dcb2c',
                        }
                    }} icon={<BiSolidCategory/>}
                              onClick={() => props.panels('categories')}>
                        Categories
                    </MenuItem>


                    <MenuItem rootStyles={{
                        '&:hover': {
                            color: '#9dcb2c',
                        }
                    }} icon={<BiSolidFoodMenu/>}
                              onClick={() => props.panels('menu')}>
                        Menu items
                    </MenuItem>
                    <MenuItem rootStyles={{
                        '&:hover': {
                            color: '#9dcb2c',
                        }
                    }} icon={<MdSoupKitchen/>}
                              onClick={() => props.panels('diy')}>
                        Burger builder
                    </MenuItem>
                    {/*<MenuItem disabled icon={<Icon name="shopping-cart" />}>*/}
                    {/*    E-commerce (disabled)*/}
                    {/*</MenuItem>*/}
                    {/*<MenuItem icon={<Icon name="service" />}> Examples</MenuItem>*/}
                </Menu>
            </Sidebar>
        </>
    )
}
export default AdminSideBar;