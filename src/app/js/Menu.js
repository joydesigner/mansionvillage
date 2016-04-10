'use strict';
import React from 'react';
import {grey50} from '../../../node_modules/material-ui/lib/styles/colors';

import Menu from '../../../node_modules/material-ui/lib/menus/menu';
import MenuItem from '../../../node_modules/material-ui/lib/menus/menu-item';
//
// function handleMenuChange(e) {
//     console.log(this);
//     console.log("this on menu", this);
//
// }

MenuItem.state = {focused: 0};

function handleOnTouchTap(index) {
     this.setState ({focused: index});
    // this.focusState = 'focused';
    //  e.currentTarget.className = 'focused';
}

const itemStyle = {
        float: 'left',
        position: 'relative',
        zIndex: 0,
        display: 'inline',
        paddingTop: '8px',
        paddingBottom: '8px',
        color: grey50
};

const menuItems = [
    {title: 'Home', value: 'home'},
    {title: 'Portfolio', value: 'portfolio'},
    {title: 'Project', value: 'project'},
    {title: 'Contact Us', value: 'contact'}
]


const MenuComponent = () => (
        <Menu desktop={true} autoWidth={true} >
            <a href="#" id="logo" title="Mansion Village">&nbsp;</a>
            {

                menuItems.map(function(val, index){
                    let style = '';

                    if(MenuItem.state.focused == index) {
                        style = 'focused';
                    }
                      return  <MenuItem className={style} key={index} primaryText={ val.title } style={itemStyle} value={val.value} onTouchTap={handleOnTouchTap.bind(MenuItem, index)}/>

                    }

                )
            }
        </Menu>
);

export default MenuComponent;