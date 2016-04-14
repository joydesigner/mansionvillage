/**
 * Created by jason on 14/04/2016.
 */
import React from 'react';
import Card from '../../../node_modules/material-ui/lib/card/card';
import CardActions from '../../../node_modules/material-ui/lib/card/card-actions';
import CardTitle from '../../../node_modules/material-ui/lib/card/card-title';
import CardMedia from '../../../node_modules/material-ui/lib/card/card-media';
import FlatButton from '../../../node_modules/material-ui/lib/flat-button';
import CardText from '../../../node_modules/material-ui/lib/card/card-text';

const cardStyle = {
    width: '600px',
    height: '600px',
    float: 'left',
    margin: '50px 25px 50px 100px',
    opacity: '.9'
};

const Card1 = () => (
    <Card style={cardStyle}>
        <CardTitle title="Card title" subtitle="Card subtitle" />

        <CardMedia>
            <img src="http://lorempixel.com/600/337/nature/" />
        </CardMedia>
        <CardText>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi.
            Donec vulputate interdum sollicitudin. Nunc lacinia auctor quam sed pellentesque.
            Aliquam dui mauris, mattis quis lacus id, pellentesque lobortis odio.
        </CardText>
        <CardActions>
            <FlatButton label="Action1" />
        </CardActions>
    </Card>
);

const PortfolioContent = () => (

    <div>
        <Card1 />
        <Card1 />
    </div>
);

export default PortfolioContent;

