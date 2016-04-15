/**
 * Created by jason on 14/04/2016.
 */
/**
 * Created by jason on 14/04/2016.
 */
import React from 'react';
import ReactDOM from 'react-dom';
import Paper from '../../../node_modules/material-ui/lib/paper';
import Card from '../../../node_modules/material-ui/lib/card/card';
import FlatButton from '../../../node_modules/material-ui/lib/flat-button';

import GridList from '../../../node_modules/material-ui/lib/grid-list/grid-list';
import GridTile from '../../../node_modules/material-ui/lib/grid-list/grid-tile';
import Favorite from '../../../node_modules/material-ui/lib/svg-icons/action/favorite';
import IconButton from '../../../node_modules/material-ui/lib/icon-button';

import CardActions from '../../../node_modules/material-ui/lib/card/card-actions';
import CardTitle from '../../../node_modules/material-ui/lib/card/card-title';
import CardMedia from '../../../node_modules/material-ui/lib/card/card-media';

import Gallery from './Gallery';

class ProjectContent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            show: false
        }
    }

    capitalizeFirstLetter(str) {
        return str.charAt(0).toUpperCase() + str.slice(1);
    }

    // showGallery(index, images) {
    //     this.setState({show: true});
    // }

    render() {
        var self = this;

        const styles = {
            root: {
                display: 'flex',
                flexWrap: 'wrap',
                justifyContent: 'space-around'
            },
            gridList: {
                maxWidth: '800',
                height: 'auto',
                overflowY: 'auto'
            }
        };

        const IMAGE_NAMES = ['dog', 'landscape', 'sports', 'buildings'];

        const IMAGE_MAP = IMAGE_NAMES.map(img => ({
            src: `http://loremflickr.com/600/400/${img}`,
            thumbnail: `http://loremflickr.com/300/200/${img}`,

            caption: self.capitalizeFirstLetter(img)
        }));

        const IMAGES_PRELOAD = IMAGE_MAP.map(img => {
            return <img key={img.caption} src={`http://loremflickr.com/1024/600${img}`} />;
        });

        // const tilesData = [
        //     {
        //         img: 'http://lorempixel.com/600/337/nature/',
        //         title: 'Felix Way, Tarneit',
        //         date: '2015.9'
        //     },
        //     {
        //         img: 'http://lorempixel.com/600/337/animals/',
        //         title: 'Manning Circuit, Tarneit',
        //         date: '2015.9'
        //     },
        //     {
        //         img: 'http://lorempixel.com/600/337/people/',
        //         title: 'Artesian Ave, Wantirna South',
        //         date: '2015.9'
        //     },
        //     {
        //         img: 'http://lorempixel.com/600/337/food/',
        //         title: 'Molden St, Bentleigh East',
        //         date: '2015.9'
        //     },
        //     {
        //         img: 'http://lorempixel.com/600/337/fashion/',
        //         title: 'Bovard Ave, Point Cook',
        //         date: '2015.9'
        //     },
        //     {
        //         img: 'http://lorempixel.com/600/337/technology/',
        //         title: 'Mirror Way, Wantirna South',
        //         date: '2015.9'
        //     },
        //     {
        //         img: 'http://lorempixel.com/600/337/dogs/',
        //         title: 'Maud St, Balwyn North',
        //         date: '2015.9'
        //     }
        // ];

        const paperStyle = {
            margin: '50px auto',
            display: 'inline-block',
            opacity: '.9'
        };

        const portfolioContentStyle = {
            fontFamily: 'Roboto',
            textAlign: 'left',
            fontSize: '1.5em',
            padding: '20px'
        };



       return(
           <Paper style={paperStyle} zDepth={1} id="project">
               <Card style={portfolioContentStyle}>

                   <div style={styles.root} id="grid-container">

                       <Gallery images={IMAGE_MAP} />

                   </div>
                   <div style={{ display: 'none' }}>{IMAGES_PRELOAD}</div>
               </Card>
           </Paper>
       );

    }
}

export default ProjectContent;

// <Gallery images={IMAGE_MAP} />
// <GridList
//     cellHeight={200}
//     style={styles.gridList}
// >
//     {tilesData.map((tile, index) => (
//         <GridTile
//             key={tile.img}
//             title={tile.title}
//             subtitle={<span> - <b>{tile.date}</b></span>}
//             actionIcon={<FlatButton label="See more" linkButton={false} href="#" primary={true} icon={<Favorite /> }/>}
//             onTouchTap={()=>self.showGallery(index, IMAGE_MAP)}
//         >
//             <img src={tile.img} />
//         </GridTile>
//     ))}
// </GridList>