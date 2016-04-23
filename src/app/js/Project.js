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
            show: false
        };
        
        this.state = {
            value: 1
        };

        this.images = {
            numbers: 12,
            postfix: '.jpg',
            caption: 'Felix Way',
            imageFolder: '../../images/felixway/',
            thumbFolder: '../../images/felixway/thumb/'
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
                    numbers: 12,
                    postfix: '.jpg',
                    caption: 'Felix Way',
                    imageFolder: 'images/felixway/',
                    thumbFolder: 'images/felixway/thumb/'
                };
                break;
            case 2:
                this.images = {
                    numbers: 12,
                    postfix: '.jpg',
                    caption: 'Manning Circuit',
                    imageFolder: 'images/manning/',
                    thumbFolder: 'images/manning/thumb/'
                };
                break;
            case 3:
                this.images = {
                    numbers: 15,
                    postfix: '.jpg',
                    caption: 'Artesian Ave, Wantirna South',
                    imageFolder: 'images/artesian/',
                    thumbFolder: 'images/artesian/thumb/'
                };
                break;
            case 4:
                this.images = {
                    numbers: 13,
                    postfix: '.jpg',
                    caption: 'Molden St., Bentleigh East',
                    imageFolder: 'images/molden/',
                    thumbFolder: 'images/molden/thumb/'
                };
                break;
            case 5:
                this.images = {
                    numbers: 12,
                    postfix: '.jpg',
                    caption: 'Bovard Ave, Point Cook',
                    imageFolder: 'images/bovard/',
                    thumbFolder: 'images/bovard/thumb/'
                };
                break;
            case 6:
                this.images = {
                    numbers: 11,
                    postfix: '.jpg',
                    caption: 'Mirror Way, Wantirna South',
                    imageFolder: 'images/mirror/',
                    thumbFolder: 'images/mirror/thumb/'
                };
                break;
            case 7:
                this.images = {
                    numbers: 5,
                    postfix: '.jpg',
                    caption: 'Maud St, Balwyn North',
                    imageFolder: 'images/maud/',
                    thumbFolder: 'images/maud/thumb/'
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
                maxWidth: 800,
                margin: '50px auto',
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

        const IMAGES_PRELOAD = component.IMAGE_MAP.map((img, index) =>
             <img key={index} src={imageFolder+img} />
        );


        const projects = [
            {
                name: 'Felix Way, Tarneit'
            },
            {
                name: 'Manning Circuit, Tarneit'
            },
            {
                name: 'Artesian Ave, Wantirna South'
            },
            {
                name: 'Molden St, Bentleigh East'
            },
            {
                name: 'Bovard Ave, Point Cook'
            },
            {
                name: 'Mirror Way, Wantirna South'
            },
            {
                name: 'Maud St, Balwyn North'
            }
        ];


       return(
           <Card style={styles.portfolioContent} id="project">

               <CardTitle title="Select a project pictures" />
               <DropDownMenu value={component.state.value} onChange={component.handleChange.bind(this)} style={styles.dropdownMenu} >
                   {
                       projects.map(function(project, index){
                               return <MenuItem key={index} value={index+1} primaryText={project.name} />
                           }
                       )
                   }
               </DropDownMenu>

               {
                   <Gallery style={styles.gallery} images={component.IMAGE_MAP} />
               }

               <div style={{ display: 'none' }}>{IMAGES_PRELOAD}</div>
           </Card>
       );
    }
}

export default ProjectContent;
