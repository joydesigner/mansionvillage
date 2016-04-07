/**
 * In this file, we create a React component
 * which incorporates components providedby material-ui.
 */

import React from 'react';
import RaisedButton from '../../../node_modules/material-ui/lib/raised-button';
import Dialog from '../../../node_modules/material-ui/lib/dialog';
import {deepOrange500} from '../../../node_modules/material-ui/lib/styles/colors';
import FlatButton from '../../../node_modules/material-ui/lib/flat-button';
import getMuiTheme from '../../../node_modules/material-ui/lib/styles/getMuiTheme';
import MuiThemeProvider from '../../../node_modules/material-ui/lib/MuiThemeProvider';
import AppBarComponent from './Appbar';

const styles = {
  container: {
    textAlign: 'center',
    paddingTop: 0
  }
};

const muiTheme = getMuiTheme({
  palette: {
    accent1Color: deepOrange500
  }
});

class Main extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.handleRequestClose = this.handleRequestClose.bind(this);
    this.handleTouchTap = this.handleTouchTap.bind(this);

    this.state = {
      open: false
    };
  }

  handleRequestClose() {
    this.setState({
      open: false
    });
  }

  handleTouchTap() {
    this.setState({
      open: true
    });
  }

  render() {
    const standardActions = (
      <FlatButton
        label="Ok"
        secondary={true}
        onTouchTap={this.handleRequestClose}
      />
    );

    return (
      <MuiThemeProvider muiTheme={muiTheme}>

        <div style={styles.container}>
          <AppBarComponent />

          <Dialog
            open={this.state.open}
            title="Super Secret Password"
            actions={standardActions}
            onRequestClose={this.handleRequestClose}
          >
            1-2-3-4-5
          </Dialog>
          <h1>material-ui</h1>
          <h2>example project</h2>
          <RaisedButton
            label="Super Secret Password"
            primary={true}
            onTouchTap={this.handleTouchTap}
          />
        </div>
      </MuiThemeProvider>
    );
  }
}

export default Main;
