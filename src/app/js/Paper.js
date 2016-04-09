/**
 * Created by xin on 9/04/2016.
 */
import React from 'react';
import Paper from '../../../node_modules/material-ui/lib/paper';

const style = {
    height: '70%',
    width: '50%',
    margin: 20,
    textAlign: 'center',
    display: 'inline-block'
};

const PaperComponent = () => (
    <div>
        <Paper style={style} zDepth={2} />

    </div>
);

export default PaperComponent;