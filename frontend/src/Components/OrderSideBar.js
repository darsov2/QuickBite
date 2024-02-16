import {Menu, MenuItem, Sidebar} from "react-pro-sidebar";
import {GiHamburgerMenu} from "react-icons/gi";
import {MdRestaurant, MdSoupKitchen} from "react-icons/md";
import {BiSolidFoodMenu} from "react-icons/bi";
import { BiSolidCategory } from "react-icons/bi";

import React from 'react';
import useGet from "../Hooks/useGet";

const OrderSideBar = (props) => {
    const [collapsed, setCollapsed] = React.useState(true);
    const {data: categories,
        isLoading: categoriesLoading
    } = useGet('/api/menu/category')
    return (
        <>
            <Sidebar backgroundColor='rgb(41, 59, 52)' color={'white'} collapsed={collapsed} rootStyles={{
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
                    {!categoriesLoading && categories.map(x => {
                        return (                    <MenuItem rootStyles={{
                            '&:hover': {
                                color: '#9dcb2c',
                            }
                        }} icon={<BiSolidCategory />}
                                                              onClick={() => props.panels('categories')}>
                            {x.name}
                        </MenuItem>)
                    })}

                </Menu>
            </Sidebar>
        </>
    )
}
export default OrderSideBar;