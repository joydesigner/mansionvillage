/**
 * Created by jason on 14/04/2016.
 */
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
        this.state = {value: 1};

    }

    capitalizeFirstLetter(str) {
        return str.charAt(0).toUpperCase() + str.slice(1);
    }

    handleChange (event, index, value) {
        this.setState({value});
        if(value === 1) {
            alert('first item');
        }
    }

    // showGallery(index, images) {
    //     this.setState({show: true});
    // }

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
                margin: '50px auto',
                display: 'inline-block',
                opacity: '.9',
                fontFamily: 'Roboto',
                textAlign: 'left',
                fontSize: '1.5em',
                padding: '20px'
            }


        };


        //
        // const image_map =
        // {
        //     'FelixWay': {
        //         images:    ['fw1', 'fw2', 'fw3', 'fw3'],
        //         thumbnails: ['fw_thumb1', 'fw_thumb2', 'fw_thumb3', 'fb_thumb4'],
        //         caption: 'Felix Way project'
        //     },
        //     'ManningCircuit': {
        //         images: ['mc1', 'mc2', 'mc3', 'mc4'],
        //         thumbnails: ['mc_thumb1', 'mc_thumb2', 'mc_thumb3', 'mc_thumb4'],
        //         caption: 'Manning Circuit'
        //     }
        // };


        const IMAGE_NAMES = ['dog', 'landscape', 'sports', 'buildings'];

        const IMAGE_MAP = IMAGE_NAMES.map(img => ({
            src: `http://loremflickr.com/600/400/${img}`,
            thumbnail: `http://loremflickr.com/300/200/${img}`,

            caption: component.capitalizeFirstLetter(img)
        }));

        const IMAGES_PRELOAD = IMAGE_MAP.map((img, index) =>
             <img key={index} src={`http://loremflickr.com/1024/600${img}`} />
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

                   <Gallery style={styles.gallery} images={IMAGE_MAP} />
               }

               <div style={{ display: 'none' }}>{IMAGES_PRELOAD}</div>
           </Card>

       );

    }
}

export default ProjectContent;
