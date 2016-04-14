/**
 * Created by jason on 14/04/2016.
 */
import React from 'react';
import Card from '../../../node_modules/material-ui/lib/card/card';
import CardActions from '../../../node_modules/material-ui/lib/card/card-actions';
import CardHeader from '../../../node_modules/material-ui/lib/card/card-header';
import CardTitle from '../../../node_modules/material-ui/lib/card/card-title';
import CardMedia from '../../../node_modules/material-ui/lib/card/card-media';
import FlatButton from '../../../node_modules/material-ui/lib/flat-button';
import CardText from '../../../node_modules/material-ui/lib/card/card-text';


const cardStyle = {
    width: 600,
    height: 600,
    margin: '50px auto',
    display: 'inline-block',
    opacity: '.9'
};

const Card1 = () => (
    <Card >
        <CardHeader

            title="URL Avatar"
            subtitle="Subtitle"
            avatar="http://lorempixel.com/100/100/nature/"
        />
        <CardMedia
            overlay={<CardTitle title="Overlay title" subtitle="Overlay subtitle" />}
        >
            <img src="http://lorempixel.com/600/337/nature/" />
        </CardMedia>
        <CardTitle title="Card title" subtitle="Card subtitle" />
        <CardText>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi.
            Donec vulputate interdum sollicitudin. Nunc lacinia auctor quam sed pellentesque.
            Aliquam dui mauris, mattis quis lacus id, pellentesque lobortis odio.
        </CardText>
        <CardActions>
            <FlatButton label="Action1" />
            <FlatButton label="Action2" />
        </CardActions>
    </Card>
);

const PortfolioContent = () => (

        <Card1 style={cardStyle}/>

);
export default PortfolioContent;

