/**
 * Created by jason on 7/04/2016.
 */
'use strict';
import React from 'react';
import AppBar from '../../../node_modules/material-ui/lib/app-bar';
import FlatButton from '../../../node_modules/material-ui/lib/flat-button';




const AppBarComponent = () => (

    <AppBar
        iconElementRight={<FlatButton label="Save" />}
    />
);

export default AppBarComponent;