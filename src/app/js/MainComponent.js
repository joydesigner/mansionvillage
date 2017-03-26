/**
 * Created by jason on 13/04/2016.
 */
'use strict';
import React from 'react';
import ReactDOM from 'react-dom';
import {grey50} from '../../../node_modules/material-ui/lib/styles/colors';
import Menu from '../../../node_modules/material-ui/lib/menus/menu';
import MenuItem from '../../../node_modules/material-ui/lib/menus/menu-item';
import HomeContent from './home';
import AboutContent from './about';
// import PortfolioContent from './portfolio';
import ProjectContent from './Project';
import ContactContent from './Contact';

class MainComponent extends React.Component{
    constructor(props, context){
        super(props, context);
        this.state = {focusState: null};
    }

    componentDidMount(){
        const containerEl = document.getElementById('paper');
        ReactDOM.render(<HomeContent />, containerEl);
    }

    handleChange (event, index, value) {
        this.setState({value});
    }


    handleClick (index) {
        const containerEl = document.getElementById('paper');
        this.setState({focusState: index});

        // if(index === 0){
        //     ReactDOM.render(<HomeContent />, containerEl);
        // }

        //about
        if(index === 0) {
            ReactDOM.render(<AboutContent />, containerEl);
        }

        //project
        if(index === 1) {
            ReactDOM.render(<ProjectContent />, containerEl);
        }

        if( index === 2 ) {
            ReactDOM.render(<ContactContent />, containerEl);
        }
    }

    render (){
        var component = this;
        // menu and menu items
        const navStyle = {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
        };
        const logoStyle = {
            width: '100%'
        };

        const menuStyle = {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
        };

        const menuItems = [
            // {title: 'Home', value: 'home', url: 'home'},
            {title: 'About', value: 'about', url: 'about'},
            // {title: 'Portfolio', value: 'portfolio', url: '#portfolio'},
            {title: 'Project', value: 'project', url: 'title'},
            {title: 'Contact', value: 'contact', url: 'contact'}
        ];

        const itemStyle = {
            float: 'left',
            paddingTop: '8px',
            paddingBottom: '8px',
            marginLeft: 25,
            color: grey50,
            fontSize: 26
        };

        return (
            <div >
                <nav style={navStyle} id="nav">

                    <Menu desktop={true} style={menuStyle}>
                        <div style={logoStyle}>
                            <a href="#" id="logo" title="QH Design & Construction"></a>
                        </div>
                        {
                            menuItems.map(function(val, index){
                                    var style= '';
                                    if(component.state.focusState === index) {
                                        style = 'focused';
                                    }
                                    return  <MenuItem key={index} className={style} primaryText={ val.title } style={itemStyle} value={val.value} url={val.url} onTouchTap={()=>component.handleClick(index)} />
                                }
                            )
                        }

                    </Menu>
                   
                </nav>
                <div id="paper">

                </div>
            </div>
        );
    }
}

export default MainComponent;