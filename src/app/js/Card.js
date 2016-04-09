/**
 * Created by xin on 9/04/2016.
 */
import React from 'react';
import Card from 'material-ui/lib/card/card';
import CardActions from 'material-ui/lib/card/card-actions';
import CardHeader from 'material-ui/lib/card/card-header';
import FlatButton from 'material-ui/lib/flat-button';
import CardText from 'material-ui/lib/card/card-text';

const CardExampleWithoutAvatar = () => (
    <Card>
        <CardHeader
            title="Without Avatar"
            subtitle="Subtitle"
            actAsExpander={true}
            showExpandableButton={true}
        />
        <CardText expandable={true}>
          
        </CardText>
        <CardActions expandable={true}>
            <FlatButton label="Action1" />
            <FlatButton label="Action2" />
        </CardActions>
    </Card>
);

export default CardExampleWithoutAvatar;