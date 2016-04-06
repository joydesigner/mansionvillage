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
        let self = this;

        var menuItems = self.props.items.map(function(item, index){
            let style = '';
            if(self.state.focused == index) {
                style = 'focused';
            }

            return (
                <ul>
                    <li className={style} onClick={self.clicked.bind(self, index)}>
                        <a href="#">{item}</a>
                    </li>
                </ul>
            );
        });
 
        return (
            <nav className="navbar">
                {menuItems}
                <p>Selected: {self.props.items[self.state.focused]}</p>
            </nav>
        );
    }
}

export default NavComponent;