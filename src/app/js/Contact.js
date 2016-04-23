/**
 * Created by zhengxin on 23/04/2016.
 */
import React from 'react';
import Card from '../../../node_modules/material-ui/lib/card/card';
import CardTitle from '../../../node_modules/material-ui/lib/card/card-title';
import TextField from '../../../node_modules/material-ui/lib/text-field';

class ContactContent extends React.Component {
    constructor(props, context) {
        super(props, context);
    }

    render() {
        const contactStyle = {
            maxWidth: '615px',
            margin: '50px auto',
            textAlign: 'left',
            padding: '20px 40px'
        };

        const textFieldStyle = {
            margin: '10px 5px'
        };

        return (
            <div>
                <Card style={contactStyle}>
                    <CardTitle title="Conact Us" />
                    <TextField style={textFieldStyle} hintText="Your Name" errorText="This field is required." />
                    <TextField style={textFieldStyle} hintText="Your Email" errorText="This field is required." />
                    <TextField style={textFieldStyle} hintText="Your Phone" errorText="This field is required." />
                    <TextField style={textFieldStyle} hintText="Your Message" errorText="This field is required." />
                </Card>
            </div>
        );
    }
}

export default ContactContent;