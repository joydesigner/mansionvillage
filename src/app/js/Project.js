/**
 * Created by jason on 14/04/2016.
 */
import React from 'react';
import Card from '../../../node_modules/material-ui/lib/card/card';
import CardTitle from '../../../node_modules/material-ui/lib/card/card-title';
import DropDownMenu from '../../../node_modules/material-ui/lib/DropDownMenu';
import MenuItem from '../../../node_modules/material-ui/lib/menus/menu-item';


import Gallery from './Gallery';

class ProjectContent extends React.Component {
    constructor(props) {
        
        super(props);

        this.state = {
            show: false,
            value: 1
        };

        this.images = {
            numbers: 8,
            postfix: '.jpg',
            caption: 'Tarneit Project I',
            imageFolder: 'images/tarneit1/',
            thumbFolder: 'images/tarneit1/thumb/'
        };

        this.IMAGE_MAP = [];

    }

    capitalizeFirstLetter(str) {
        return str.charAt(0).toUpperCase() + str.slice(1);
    }

    handleChange (event, index, value) {
        this.setState({value});


        switch (value) {
            case 1:
                this.images = {
                    numbers: 8,
                    postfix: '.jpg',
                    caption: 'Tarneit Project I',
                    imageFolder: 'images/tarneit1/',
                    thumbFolder: 'images/tarneit1/thumb/'
                };
                break;
            case 2:
                this.images = {
                    numbers: 13,
                    postfix: '.jpg',
                    caption: 'Tarneit Project II',
                    imageFolder: 'images/tarneit2/',
                    thumbFolder: 'images/tarneit2/thumb/'
                };
                break;
            case 3:
                this.images = {
                    numbers: 16,
                    postfix: '.jpg',
                    caption: 'Point Cook',
                    imageFolder: 'images/pointcook/',
                    thumbFolder: 'images/pointcook/thumb/'
                };
                break;
            case 4:
                this.images = {
                    numbers: 12,
                    postfix: '.jpg',
                    caption: 'Wantirna South I',
                    imageFolder: 'images/wantirnaS1/',
                    thumbFolder: 'images/wantirnaS1/thumb/'
                };
                break;
            case 5:
                this.images = {
                    numbers: 15,
                    postfix: '.jpg',
                    caption: 'Wantirna South II',
                    imageFolder: 'images/wantirnaS2/',
                    thumbFolder: 'images/wantirnaS2/thumb/'
                };
                break;
            case 6:
                this.images = {
                    numbers: 11,
                    postfix: '.jpg',
                    caption: 'Bentleigh East',
                    imageFolder: 'images/bentleighE/',
                    thumbFolder: 'images/bentleighE/thumb/'
                };
                break;
            case 7:
                this.images = {
                    numbers: 9,
                    postfix: '.jpg',
                    caption: 'Balwyn North',
                    imageFolder: 'images/balwaynN/',
                    thumbFolder: 'images/balwaynN/thumb/'
                };
                break;
            case 8:
                this.images = {
                    numbers: 7,
                    postfix: '.jpg',
                    caption: 'Boronia',
                    imageFolder: 'images/boronia/',
                    thumbFolder: 'images/boronia/thumb/'
                };
                break;
        }
    }

    render() {
        var component = this;

        const styles = {
            gallery: {
                display: 'flex',
                flexWrap: 'wrap',
                justifyContent: 'space-around'
            },
            dropdownMenu: {
                marginBottom: '20px'
            },
            portfolioContent: {
                maxWidth: '80%',
                margin: '20px auto',
                opacity: '.9',
                fontFamily: 'Roboto',
                textAlign: 'left',
                fontSize: '1.5em',
                padding: '20px'
            }
        };

        const image_numbers = component.images.numbers;
        const postfix = component.images.postfix;
        const imageFolder = component.images.imageFolder;
        const thumbFolder = component.images.thumbFolder;
        const caption = component.images.caption;

        const IMAGE_NAMES = [];
        if(image_numbers > 0) {
            for(let i = 1; i<(image_numbers+1); i++ ) {
                IMAGE_NAMES.push(i + postfix);
            }
        }

         component.IMAGE_MAP = IMAGE_NAMES.map(img => ({
            src: imageFolder + img,
            thumbnail: thumbFolder + img,
            caption: component.capitalizeFirstLetter(caption)
        }));

        // const IMAGES_PRELOAD = component.IMAGE_MAP.map((img, index) =>
        //      <img key={index} src={imageFolder+img} />
        // );


        const projects = [
            {
                name: 'Tarneit I'
            },
            {
                name: 'Tarneit II'
            },
            {
                name: 'Point Cook'
            },
            {
                name: 'Wantirna South I'
            },
            {
                name: 'Wantirna South II'
            },
            {
                name: 'Bentleigh East'
            },
            {
                name: 'Balwyn North'
            },
            {
                name: 'Boronia'
            }

        ];


       return(
           <Card style={styles.portfolioContent} id="project">

               <CardTitle title="Select a project to view" />
               <DropDownMenu value={component.state.value} onChange={component.handleChange.bind(this)} style={styles.dropdownMenu} >
                   {
                       projects.map(function(project, index){
                               return <MenuItem key={index} value={index+1} primaryText={project.name}  />
                           }
                       )
                   }
               </DropDownMenu>

               {
                   <Gallery style={styles.gallery} images={component.IMAGE_MAP} />
               }

           </Card>
       );
    }
}

export default ProjectContent;
