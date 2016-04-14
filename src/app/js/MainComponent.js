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
import PortfolioContent from './portfolio';

class MainComponent extends React.Component{

    constructor(props, context){
        super(props, context);
        this.state = {focusState: 0};
    }

    componentDidMount(){
        const containerEl = document.getElementById('paper');
        ReactDOM.render(<HomeContent />, containerEl);
    }

    handleClick (index) {
        const containerEl = document.getElementById('paper');
        this.setState({focusState: index});

        if(index === 0){
            ReactDOM.render(<HomeContent />, containerEl);
        }

        if(index === 1) {
            ReactDOM.render(<PortfolioContent />, containerEl);
        }

        if(index === 2) {
            
        }
        console.log(this.props);
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