/**
 * Created by zhengxin on 23/04/2016.
 */
import React from 'react';
import Card from '../../../node_modules/material-ui/lib/card/card';
import CardTitle from '../../../node_modules/material-ui/lib/card/card-title';
import CardText from '../../../node_modules/material-ui/lib/card/card-text';
import CardMedia from '../../../node_modules/material-ui/lib/card/card-media';
import TextField from '../../../node_modules/material-ui/lib/text-field';

class ContactContent extends React.Component {
    constructor(props, context) {
        super(props, context);
    }

    render() {
        const contactStyle = {
            maxWidth: '800px',
            margin: '50px auto',
            textAlign: 'left',
            padding: '20px 40px'
        };

        const textFieldStyle = {
            margin: '10px 5px',
        };

        const cardTitleStyle = {
            textAlign: 'left',
            width: '40%',
            float: 'left'
        };


        const mapStyle = {
            padding: '15px 10px',
            width: '50%',
            float: 'right'
        };

        return (
            <div>
                <Card style={contactStyle}>
                    <CardTitle title="Head Office" />

                    <CardText >
                        <p>38 Kenny St., Balwayn North, VIC3104</p>
                        <p>Phone: 0433038379</p>
                        <p>Fax: 85101462</p>
                        <p>Email: johnwellch@mansionvillage.com.au</p>
                    </CardText>

                    <CardMedia style={mapStyle}>
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3196.5751918067945!2d145.0939140080161!3d-37.80024780003516!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad6472ac6edf405%3A0x4301edc32c0533e0!2s38+Kenny+St%2C+Balwyn+North+VIC+3104!5e0!3m2!1sen!2sau!4v1461388937816" width="400" height="350" frameBorder="0" style="border:0" allowFullScreen></iframe>
                    </CardMedia>

                    <CardTitle title="Contact Us" style={cardTitleStyle} />

                    <CardText>
                        <TextField style={textFieldStyle} hintText="Your Name" errorText="This field is required." />
                        <TextField style={textFieldStyle} hintText="Your Email" errorText="This field is required." />
                        <TextField style={textFieldStyle} hintText="Your Phone" errorText="This field is required." />
                        <TextField style={textFieldStyle} hintText="Your Message" errorText="This field is required." />
                    </CardText>
                </Card>
            </div>
        );
    }
}

export default ContactContent;