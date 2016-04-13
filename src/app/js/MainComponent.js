/**
 * Created by jason on 13/04/2016.
 */
'use strict';
import React from 'react';
import {grey50} from '../../../node_modules/material-ui/lib/styles/colors';

import Menu from '../../../node_modules/material-ui/lib/menus/menu';
import MenuItem from '../../../node_modules/material-ui/lib/menus/menu-item';


class MainComponent extends React.Component{

    constructor(props, context){
        super(props, context);
        this.state = {focusState: 0};
    }

    handleClick (index) {
        this.setState({focusState: index});
        console.log(this.state.focusState);
        console.log(this.refs);
    }

    render (){
        var component = this;
        // menu and menu items
        const menuItems = [
            {title: 'Home', value: 'home', url: '#home'},
            {title: 'Portfolio', value: 'portfolio', url: '#portfolio'},
            {title: 'Project', value: 'project', url: 'title'},
            {title: 'Contact Us', value: 'contact', url: 'contact'}
        ];

        const itemStyle = {
            float: 'left',
            position: 'relative',
            zIndex: 0,
            display: 'inline',
            paddingTop: '8px',
            paddingBottom: '8px',
            color: grey50
        };

        return (
            <Menu desktop={true} autoWidth={true} >
                <a href="#" id="logo" title="Mansion Village">&nbsp;</a>
                {
                    menuItems.map(function(val, index){
                            var style= '';
                            if(component.state.focusState === index) {
                                style = 'focused';
                                component.refs = 'menu'+index;
                            }
                            return  <MenuItem  key={index} className={style} primaryText={ val.title } style={itemStyle} value={val.value} url={val.url} onTouchTap={()=>component.handleClick(index)} />
                        }
                    )
                }
            </Menu>
        );

    }
}

export default MainComponent;