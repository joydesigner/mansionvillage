/**
 * Created by xin j zheng on 25/3/17.
 */
import React from 'react';
import Paper from '../../../node_modules/material-ui/lib/paper';

const paperStyle = {
    height: 'auto',
    maxWidth: '80%',
    margin: '20px auto',
    opacity: '.9',
    backgroundColor: 'rgba(32, 32,32,0.60)'
};

const homeContentStyle = {
    fontFamily: 'Roboto',
    textAlign: 'center',
    fontSize: '2.8em',
    lineHeight: '1.5em',
    padding: '20px',
    color: '#ffffff'
};

const HomeContent = () => (
    <Paper style={paperStyle} zDepth={1} >
        <div style={homeContentStyle}>
            <h1 style={homeContentStyle}>
               Love We Built, For Both The House & Memory.
            </h1>

        </div>
    </Paper>
);

export default HomeContent;