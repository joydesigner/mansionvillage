/**
 * Created by jason on 7/04/2016.
 */
'use strict';
import React from 'react';
import AppBar from '../../../node_modules/material-ui/lib/app-bar';
import IconButton from '../../../node_modules/material-ui/lib/icon-button';
import NavigationClose from '../../../node_modules/material-ui/lib/svg-icons/navigation/close';
import FlatButton from '../../../node_modules/material-ui/lib/flat-button';

function handleTouchTap() {
    alert('onTouchTap triggered on the title component');
}

const styles = {
    title: {
        cursor: 'pointer'
    }
};

const AppBarComponent = () => (
    <AppBar
        // title={<span style={styles.title}>Title</span>}
        onTitleTouchTap={handleTouchTap}
        // iconElementLeft={<IconButton><NavigationClose /></IconButton>}
        iconElementRight={<FlatButton label="Save" />}
    />
);

export default AppBarComponent;