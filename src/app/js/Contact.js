/**
 * Created by zhengxin on 23/04/2016.
 */
import React from 'react';
import Card from '../../../node_modules/material-ui/lib/card/card';
import CardText from '../../../node_modules/material-ui/lib/card/card-text';
import CardMedia from '../../../node_modules/material-ui/lib/card/card-media';
import CardActions from '../../../node_modules/material-ui/lib/card/card-actions';
import TextField from '../../../node_modules/material-ui/lib/text-field';
import RaisedButton from '../../../node_modules/material-ui/lib/raised-button';
import Snackbar from '../../../node_modules/material-ui/lib/snackbar';

export default class ContactContent extends React.Component {
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
            messageError: null,
            notification: ""
        };
        this.state = {
            open: false
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

    handleTouchTap () {
        this.setState({
            open: true
        });
    };

    handleRequestClose () {
        this.setState({
            open: false
        });
    };

    onFormSubmit() {

        if( !this.state.nameIsValid ) {
            alert("Name seems not valid.");
        } else if ( !this.state.emailIsValid ) {
            alert("Email seems not valid.");
        } else if ( !this.state.phoneNumberIsValid ) {
            alert("Phone number seems not valid.");
        } else if( !this.state.messageIsValid ) {
            alert("Message is required.");
        } else {
            const component = this;
            console.log('first:',component);
            var promise = new Promise(function(resolve, reject){
                let xhttp = new XMLHttpRequest();
                xhttp.open("POST", "server/process.php", true);
                xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
                xhttp.onload = function() {//Call a function when the state changes.
                    if(this.status >= 200 && this.status < 300) {
                        resolve(this.response);

                    } else {
                        reject(this.statusText);
                    }
                };
                xhttp.onError = function() {
                    reject({
                        status: this.status,
                        statusText: this.statusText
                    });
                };

                xhttp.send(`name=${component.state.name}&email=${component.state.email}&phone=${component.state.phoneNumber}&message=${component.state.message}`);
            });

            promise.then(function(response){
                component.setState({ notification: response });
                component.handleTouchTap();
                document.getElementById('contactForm').reset();
            });
        }
    }

    render() {
        const self = this;
        const cardStyle = {
            maxWidth: '80%',
            margin: '20px auto',
            textAlign: 'left',
            padding: '20px',
            position: 'relative',
            backgroundColor: 'rgba(32,32,32,0.6)'
        };

        const mapStyle = {
            padding: '15px 10px',
            display: 'block',
            position: 'absolute',
            width: '55%',
            left: 380,
            top: 30
        };

        const titleStyle = {
            color: '#ffffff'
        };

        const whiteFontStyle = {
            color: '#ffffff'
        };

        const floatStyle = {
            color: 'rgba(255, 255, 255, .6)'
        };

        return (
            <form id="contactForm" onSubmit={(e) => e.preventDefault() }>
                <Card style={cardStyle}>
                    <h1 style={titleStyle}> Head Office</h1>

                    <CardText >
                        <p style={whiteFontStyle}>Address: 38 Kenny St., Balwayn North, VIC 3104</p>
                        <p style={whiteFontStyle}>Phone: <a className="link" href="tel:0433038379">0433038379</a></p>
                        <p style={whiteFontStyle}>Fax: 85101462</p>
                        <p style={whiteFontStyle}>Email: <a className="link" href="mailto:johnwellch@mansionvillage.com.au?subject=Request">johnwellch@mansionvillage.com.au</a> </p>
                    </CardText>

                    <CardMedia style={mapStyle}>
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3196.5751918067945!2d145.0939140080161!3d-37.80024780003516!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad6472ac6edf405%3A0x4301edc32c0533e0!2s38+Kenny+St%2C+Balwyn+North+VIC+3104!5e0!3m2!1sen!2sau!4v1461388937816" width="auto" height="450" frameBorder="0" style="border:0" allowFullScreen></iframe>
                    </CardMedia>

                    <h1 style={titleStyle}>Contact Us</h1>

                    <CardText>
                        <TextField  hintText="Your name" hintStyle={whiteFontStyle} floatingLabelText="Name" floatingLabelStyle={floatStyle} errorText={ self.state.nameError } inputStyle={whiteFontStyle} onChange = { self.onNameChange.bind(this)} /> <br />
                        <TextField  hintText="Your email address" hintStyle={whiteFontStyle} floatingLabelText="Email" floatingLabelStyle={floatStyle} errorText={ self.state.emailError } inputStyle={whiteFontStyle} onChange = { self.onEmailChange.bind(this)} /> <br />
                        <TextField  hintText="Your phone number" hintStyle={whiteFontStyle} floatingLabelText="Phone Number" floatingLabelStyle={floatStyle} errorText={ self.state.phoneNumberError } inputStyle={whiteFontStyle} onChange={ self.onPhoneNumberChange.bind(this)} /><br/>

                        <TextField floatingLabelText="Message"  floatingLabelStyle={floatStyle} errorText={self.state.messageError} multiLine={true} fullWidth={true} inputStyle={whiteFontStyle} onChange={self.onMessageChange.bind(this)} />
                    </CardText>
                    <CardActions>
                        <RaisedButton label="Send" primary={true} type="submit" onClick={self.onFormSubmit.bind(this)}/>
                    </CardActions>

                </Card>

                <Snackbar
                    open={this.state.open}
                    message={this.state.notification}
                    autoHideDuration={4000}
                    onRequestClose={()=>this.handleRequestClose()}
                />
            </form>
        );
    }
}

export default ContactContent;