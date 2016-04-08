'use strict';
import React from 'react';
import Menu from '../../../node_modules/material-ui/lib/menus/menu';
import MenuItem from '../../../node_modules/material-ui/lib/menus/menu-item';


const itemStyle = {
    float: 'left',
    position: 'relative',
    zIndex: 0,
    display: 'inline'
};

const menuStyle = {
    backgroundColor: 'blue'
}

const MenuComponent = () => (
    <div>
        <Menu style={menuStyle} desktop = "true">
            <MenuItem primaryText="Maps" style={itemStyle} />
            <MenuItem primaryText="Books" style={itemStyle}/>
            <MenuItem primaryText="Flights" style={itemStyle}/>
            <MenuItem primaryText="Apps" style={itemStyle}/>
        </Menu>
    </div>
);

export default MenuComponent;