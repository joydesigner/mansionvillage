'use strict';
import React from 'react';
import {grey50} from '../../../node_modules/material-ui/lib/styles/colors';

import Menu from '../../../node_modules/material-ui/lib/menus/menu';
import MenuItem from '../../../node_modules/material-ui/lib/menus/menu-item';


const itemStyle = {
    float: 'left',
    position: 'relative',
    zIndex: 0,
    display: 'inline',
    color: grey50
};



const MenuComponent = () => (
    <div>
        <Menu>
            <a href="#" id="logo" title="Mansion Village"></a>
            <MenuItem primaryText="Home" style={itemStyle} />
            <MenuItem primaryText="Portfolio" style={itemStyle}/>
            <MenuItem primaryText="Project" style={itemStyle}/>
            <MenuItem primaryText="Contact Us" style={itemStyle}/>
        </Menu>
    </div>
);

export default MenuComponent;