import React from "react";
import NavComponent from "./nav.jsx";
var ReactDOM = require('react-dom');


class App extends React.Component {
    static render () {
        return (
            <div className="container">
                <p> Hello React!</p>
                <NavComponent items="{['Home', 'Services', 'About', 'Contact us']}" />
            </div>
        );
    }
}

ReactDOM.render(
    <App/>, document.getElementById('app')
);