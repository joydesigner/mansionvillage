/**
 * Created by jason on 13/04/2016.
 */
'use strict';
import React from 'react';
import {grey50} from '../../../node_modules/material-ui/lib/styles/colors';

import Menu from '../../../node_modules/material-ui/lib/menus/menu';
import MenuItem from '../../../node_modules/material-ui/lib/menus/menu-item';
import Paper from '../../../node_modules/material-ui/lib/paper';


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
        const navStyle = {
            width: '600px',
            margin: 'auto'
        };
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

        const paperStyle = {
            height: 500,
            width: 800,
            margin: '50px auto',
            display: 'inline-block',
            opacity: '.9'
        };


        return (
            <div>
                <nav style={navStyle} id="nav">
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
                </nav>
                <div id="paper">
                    <Paper style={paperStyle} zDepth={1} >
                        <div className="divMainContent">
                            <p>QA Building Group is specialises in building and renovating residential, commercial as well as industrial buildings. Regardless of the size of your property, be it a detached house or a large retail space, we will be able to customise a package that meets your requirements and budget.</p>
                        <p>Started in 2012, our dedicated and attentive workforce has earned us many referrals and friends in Australia. We have a team of experienced and qualified professionals that insists on high-quality workmanship and design, as well as meeting the needs of our clients like you.</p>
                        <p>We have had the good fortune to work with a diverse group of clients, ranging from private home owners to large corporations. We are also constantly upgrading to allow us to tender for bigger public sector construction projects. Regardless of the size of your project, our team of engineers, architects, consultants, designers and specialists will go the extra mile to ensure your property is in good hands.</p>
                        <p>If you are looking for a trusted builder to develop your dream home or business, we can help to make your dream a reality. Please take your time to learn more about us and the projects we have built. If you wish to speak to someone, we are only a call or an email away. We look forward to hearing from you.</p>

                        <p>Our Services</p>
                        <p>We offer the following services for residential, commercial as well as industrial properties:</p>
                        <p>Design and build</p>
                        <p>Reconstruction of existing building</p>
                        <p>Addition and alteration</p>
                        <p>Commercial fit out works</p>
                </div>
            </Paper>
                </div>
            </div>
        );

    }
}

export default MainComponent;