/**
 * Created by jason on 14/04/2016.
 */
import React from 'react';
import Card from '../../../node_modules/material-ui/lib/card/card';
import CardActions from '../../../node_modules/material-ui/lib/card/card-actions';
import CardTitle from '../../../node_modules/material-ui/lib/card/card-title';
import CardMedia from '../../../node_modules/material-ui/lib/card/card-media';
import FlatButton from '../../../node_modules/material-ui/lib/flat-button';

const cardStyle = {
    width: '400px',
    height: '400px',
    float: 'left',
    margin: '25px',
    opacity: '.9'
};

const content = {
    text1: 'Lily',
    text2: 'Violet',
    text3: 'Allysum'
};

const houseStyle = {
    townhouse: 'Town House',
    villa: 'Villa',
    Apartment: 'apartment'
};

const imageUrl = {
    url1: 'http://lorempixel.com/600/337/nature/',
    url2: 'http://lorempixel.com/600/337/animals/',
    url3: 'http://lorempixel.com/600/337/fashion/'

};

const cardContainerStyle = {
    width: '1350px',
    margin: 'auto'
};

const actionText = {
    text: 'View details'
};

const PropertyCard1 = function(){
    return (
        <Card style={cardStyle}>
            <CardTitle title={content.text1} subtitle={houseStyle.townhouse} />

            <CardMedia>
                <img src={imageUrl.url1} />
            </CardMedia>

            <CardActions>
                <FlatButton label={actionText.text} />
            </CardActions>
        </Card>
    );
};

const PropertyCard2 = function(){
    return (
        <Card style={cardStyle}>
            <CardTitle title={content.text2} subtitle={houseStyle.villa} />

            <CardMedia>
                <img src={imageUrl.url2} />
            </CardMedia>

            <CardActions>
                <FlatButton label={actionText.text} />
            </CardActions>
        </Card>
    );
};


const PropertyCard3 = function(){
    return (
        <Card style={cardStyle}>
            <CardTitle title={content.text3} subtitle={houseStyle.Apartment} />

            <CardMedia>
                <img src={imageUrl.url3} />
            </CardMedia>

            <CardActions>
                <FlatButton label={actionText.text} />
            </CardActions>
        </Card>
    );
};


const PortfolioContent = () => (

    <div style={cardContainerStyle}>
        <PropertyCard1 />
        <PropertyCard2 />
        <PropertyCard3 />
    </div>
);

export default PortfolioContent;

