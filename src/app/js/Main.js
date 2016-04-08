/**
 * In this file, we create a React component
 * which incorporates components providedby material-ui.
 */

import React from 'react';
import {deepOrange500} from '../../../node_modules/material-ui/lib/styles/colors';
import getMuiTheme from '../../../node_modules/material-ui/lib/styles/getMuiTheme';
import MuiThemeProvider from '../../../node_modules/material-ui/lib/MuiThemeProvider';
import MenuComponent from './Menu';


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
  }


  render() {
    return (
      <MuiThemeProvider muiTheme={muiTheme}>
        <div style={styles.container}>
          <MenuComponent />
        </div>
      </MuiThemeProvider>
    );
  }
}

export default Main;
