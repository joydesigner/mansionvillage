/**
 * Created by jason on 14/04/2016.
 */
/**
 * Created by jason on 14/04/2016.
 */
import React from 'react';
import Paper from '../../../node_modules/material-ui/lib/paper';
import Gallery from './Gallery';

function capitalizeFirstLetter(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
}
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

const IMAGE_NAMES = ['dog', 'landscape', 'sports', 'buildings'];
const IMAGE_MAP = IMAGE_NAMES.map(img => ({
    src: `http://loremflickr.com/600/400/${img}`,
    thumbnail: `http://loremflickr.com/300/200/${img}`,
    // srcset: [
    //     `http://loremflickr.com/1024/600${img}`,
    //     `http://loremflickr.com/800/500${img}`,
    //     `http://loremflickr.com/500/300${img}`,
    //     `http://loremflickr.com/320/180${img}`
    // ],
    caption: capitalizeFirstLetter(img)
}));

const IMAGES_PRELOAD = IMAGE_MAP.map(img => {
    return <img key={img.caption} src={`http://loremflickr.com/1024/600${img}`} />;
});

const ProjectContent = () => (
    <Paper style={paperStyle} zDepth={1} >
        <div style={portfolioContentStyle}>
            <Gallery images={IMAGE_MAP} />
            <div style={{ display: 'none' }}>{IMAGES_PRELOAD}</div>
        </div>
    </Paper>
);
export default ProjectContent;

