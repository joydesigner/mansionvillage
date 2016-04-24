/**
 * Created by zhengxin on 23/04/2016.
 */
import React from 'react';
import Card from '../../../node_modules/material-ui/lib/card/card';
import CardTitle from '../../../node_modules/material-ui/lib/card/card-title';
import CardText from '../../../node_modules/material-ui/lib/card/card-text';
import CardMedia from '../../../node_modules/material-ui/lib/card/card-media';
import CardActions from '../../../node_modules/material-ui/lib/card/card-actions';
import TextField from '../../../node_modules/material-ui/lib/text-field';
import RaisedButton from '../../../node_modules/material-ui/lib/raised-button';

class ContactContent extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            name: '',
            email: '',
            phoneNumber: '',
            message: '',
            nameIsValid: false,
            emailIsValid: false,
            phoneNumberIsValid: false,
            messageIsValid: false,
            nameError: null,
            emailError: null,
            phoneNumberError: null,
            messageError: null
        };
    }

    onNameChange(event) {
        const inputName = event.target.value;
        const alphanumeric = /^[a-z0-9 ]+$/i;
        const nameIsValid = alphanumeric.test(inputName) && inputName.length >= 3;
        let error;

        if ( nameIsValid ) {
            this.setState({ nameIsValid: true });
            this.setState({ name: inputName });
            error = null;
        } else {
            this.setState({ nameIsValid: false });
             error = "Name must only consist of numbers or letters and at least 3 characters.";
        }

        this.setState({ nameError: error });
    }

    onEmailChange(event) {
        const inputEmail = event.target.value;
        const emailExpr = /^[-a-z0-9~!$%^&*_=+}{\'?]+(\.[-a-z0-9~!$%^&*_=+}{\'?]+)*@([a-z0-9_][-a-z0-9_]*(\.[-a-z0-9_]+)*\.(aero|arpa|biz|com|coop|edu|gov|info|int|mil|museum|name|net|org|pro|travel|mobi|[a-z][a-z])|([0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}))(:[0-9]{1,5})?$/i;
        const emailIsValid = emailExpr.test(inputEmail) && inputEmail.length > 0;
        let error;
        if ( emailIsValid ) {
            this.setState({ emailIsValid: true });
            this.setState({ email: inputEmail });
            error = null;
        } else {
            this.setState({ emailIsValid: false });
            error = "Email seems not valid";
        }

        this.setState({ emailError: error });
    }

    onPhoneNumberChange(event) {
        const inputNumber = event.target.value;
        const numberValidator = /^\({0,1}((0|\+61)(2|4|3|7|8)){0,1}\){0,1}(\ |-){0,1}[0-9]{2}(\ |-){0,1}[0-9]{2}(\ |-){0,1}[0-9]{1}(\ |-){0,1}[0-9]{3}$/;
        const numberIsValid = numberValidator.test(inputNumber) && inputNumber.length > 0;
        let error;

        if( numberIsValid ) {
            this.setState({ phoneNumberIsValid: true });
            this.setState({ phoneNumber: inputNumber });
            error = null;
        } else {
            this.setState({ phoneNumberIsValid: false });
            error = "Phone number seems not valid.";
        }

        this.setState({ phoneNumberError: error });
    }

    onMessageChange(event) {
        const inputMessage = event.target.value;
        let error;
        if(inputMessage.length > 0 ) {
            this.setState({ messageIsValid: true });
            this.setState({ message: inputMessage });
            error = null;
        } else {
            this.setState({ messageIsValid: false });
            error = "Message is required.";
        }

        this.setState( { messageError: error });
    }

    onFormSubmit(event) {
        if( !this.state.nameIsValid ) {
            alert("Name seems not valid.");
        } else if ( !this.state.emailIsValid ) {
            alert("Email seems not valid.");
        } else if ( !this.state.phoneNumberIsValid ) {
            alert("Phone number seems not valid.");
        } else if( !this.state.messageIsValid ) {
            alert("Message is required.");
        } else {
            let xhttp;
            if(window.XMLHttpRequest) {
                xhttp = new XMLHttpRequest();
                xhttp.open("POST", "server/process.php", true);
                xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
                xhttp.onreadystatechange = function() {//Call a function when the state changes.
                    if(xhttp.readyState == 4 && xhttp.status == 200) {
                        alert(xhttp.responseText);
                    }
                };
                xhttp.send('name='+this.state.name+'&email='+ this.state.email + '&phone='+this.state.phoneNumber + '&message='+this.state.message);
            }
        }
    }

    render() {
        var component = this;

        const cardStyle = {
            maxWidth: '700px',
            margin: '50px auto',
            textAlign: 'left',
            padding: '20px',
            position: 'relative'
        };


        const mapStyle = {
            padding: '15px 10px',
            display: 'block',
            position: 'absolute',
            left: 350,
            top: 30
        };


        return (
            <form onSubmit={(e) => e.preventDefault() }>
                <Card style={cardStyle}>
                    <CardTitle title="Head Office" />

                    <CardText >
                        <p>Address: <a className="link" href="https://goo.gl/maps/2feUqLAEUF32">38 Kenny St., Balwayn North, VIC 3104</a></p>
                        <p>Phone: <a className="link" href="tel:0433038379">0433038379</a></p>
                        <p>Fax: 85101462</p>
                        <p>Email: <a className="link" href="mailto:johnwellch@mansionvillage.com.au?subject=Request">johnwellch@mansionvillage.com.au</a> </p>
                    </CardText>

                    <CardMedia style={mapStyle}>
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3196.5751918067945!2d145.0939140080161!3d-37.80024780003516!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad6472ac6edf405%3A0x4301edc32c0533e0!2s38+Kenny+St%2C+Balwyn+North+VIC+3104!5e0!3m2!1sen!2sau!4v1461388937816" width="400" height="200" frameBorder="0" style="border:0" allowFullScreen></iframe>
                    </CardMedia>

                    <CardTitle title="Contact Us" />

                    <CardText>
                        <TextField  hintText="Name" errorText={ component.state.nameError } onChange = {component.onNameChange.bind(this)} /> <br />
                        <TextField  hintText="Email" errorText={ component.state.emailError } onChange = {component.onEmailChange.bind(this)} /> <br />
                        <TextField  hintText="Phone Number" errorText={ component.state.phoneNumberError } onChange={component.onPhoneNumberChange.bind(this)} /><br/>

                        <TextField hintText="Message" errorText={component.state.messageError} multiLine={true} fullWidth={true} onChange={component.onMessageChange.bind(this)} />
                    </CardText>
                    <CardActions>
                        <RaisedButton label="Send" primary={true} type="submit" onClick={component.onFormSubmit.bind(this)}/>
                    </CardActions>
                </Card>
            </form>
        );
    }
}

export default ContactContent;