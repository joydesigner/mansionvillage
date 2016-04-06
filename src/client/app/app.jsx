import React from "react";
import NavComponent from "./Nav.jsx";

class App extends React.Component {
    render () {
        return (
            <div className="container">
                <NavComponent items={['Home', 'Services', 'About', 'Contact us']} urls={item.url} />
            </div>
        );
    }
}

export default App;
