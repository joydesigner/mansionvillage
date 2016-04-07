'use strict';
import React from 'react';
import Menu from '../../../node_modules/material-ui/lib/menus/menu';
import MenuItem from '../../../node_modules/material-ui/lib/menus/menu-item';

const style = {
    marginRight: 32,
    marginBottom: 32,
    float: 'left',
    position: 'relative',
    zIndex: 0
};

const MenuComponent = () => (
    <div>
        <Menu style={style}>
            <MenuItem primaryText="Maps" />
            <MenuItem primaryText="Books" />
            <MenuItem primaryText="Flights" />
            <MenuItem primaryText="Apps" />
        </Menu>
        <Menu style={style}>
            <MenuItem primaryText="Refresh" />
            <MenuItem primaryText="Help &amp; feedback" />
            <MenuItem primaryText="Settings" />
            <MenuItem primaryText="Sign out" />
        </Menu>
    </div>
);

export default MenuComponent;