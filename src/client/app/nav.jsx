import React from "react";

class NavComponent extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            focused: 0
        }
    }


    clicked(index) {
        this.setState({
           focused: index
        });
    }

    render() {
        var self = this;
        var style = '';


        var menuItems = self.props.items.map(function(item, index){
            if(self.state.focused === index) {
                style = 'focused';
            }

            return (
                <ul>
                    <li className={style} onClick={self.clicked.bind(self, index)}>{item}</li>
                </ul>
            );
        });
 
        return (
            <div className="nav">
                {menuItems}
                <p>Selected: {self.props.items[self.state.focused]}</p>
            </div>
        );
    }
}

export default NavComponent;