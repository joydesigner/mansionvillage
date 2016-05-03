/**
 * Created by jason on 14/04/2016.
 */
import React from 'react';
import Card from '../../../node_modules/material-ui/lib/card/card';
import CardActions from '../../../node_modules/material-ui/lib/card/card-actions';
import CardTitle from '../../../node_modules/material-ui/lib/card/card-title';
import CardMedia from '../../../node_modules/material-ui/lib/card/card-media';
import FlatButton from '../../../node_modules/material-ui/lib/flat-button';
import Dialog from '../../../node_modules/material-ui/lib/dialog';

class PortfolioContent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            open: false
        };

        this.dialogImageUrl = '';
    };

    handleOpen(dialogImageUrl) {
        this.setState({open: true});
        this.dialogImageUrl = dialogImageUrl;
    };

    handleClose() {
        this.setState({open:false});
    };


    render() {
        var self = this;

        const actions = [
            <FlatButton
                label="Close"
                primary={true}
                onTouchTap={()=>self.handleClose()}
            />

        ];

        const cardStyle = {
            width: '400px',
            height: '400px',
            float: 'left',
            margin: '15px',
            opacity: '.9'
        };

        const cardContainerStyle = {
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: '20px'
        };

        const dialogStyle = {
            width: 'auto',
            height: 'auto',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'
        };


        const cardItems = [
            {title: 'Lily', btnLabel: 'View details', imageUrl: 'images/portfolio/Lily.jpg', dialogImageUrl: 'images/portfolio/double-storey.jpg'},
            {title: 'Violet', btnLabel: 'View details', imageUrl: 'images/portfolio/Violet.jpg', dialogImageUrl:'images/portfolio/brochure-4bed.jpg'},
            {title: 'Allysum', btnLabel: 'View details', imageUrl: 'images/portfolio/Allysum.jpg', dialogImageUrl: 'images/portfolio/brochure-3bed.jpg'}
        ];


        return (
            <div>
                <div style={cardContainerStyle}>

                    {
                        cardItems.map(function(val, index){
                                return(
                                    <Card key={index} style={cardStyle}>
                                        <CardTitle
                                            title={val.title}
                                        />

                                        <CardMedia>
                                            <img src={val.imageUrl} />
                                        </CardMedia>

                                        <CardActions>
                                            <FlatButton
                                                label={val.btnLabel}
                                                primary={true}
                                                onTouchTap={()=>self.handleOpen(val.dialogImageUrl)}
                                            />

                                        </CardActions>
                                    </Card>
                                );
                            }
                        )
                    }

                    <Dialog
                        contentStyle={dialogStyle}
                        autoDetectWindowHeight = {false}
                        title="House and land package"
                        actions={actions}
                        modal={false}
                        autoScrollBodyContent = {true}
                        open={self.state.open}
                        onRequestClose={()=>self.handleClose()}
                    >
                        <img src={self.dialogImageUrl} alt=""/>
                    </Dialog>
                </div>
            </div>
        );
    }
}


export default PortfolioContent;

