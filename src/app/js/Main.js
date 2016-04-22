/**
 * In this file, we create a React component
 * which incorporates components providedby material-ui.
 */

import React from 'react';
import {indigo800} from '../../../node_modules/material-ui/lib/styles/colors';
import getMuiTheme from '../../../node_modules/material-ui/lib/styles/getMuiTheme';
import MuiThemeProvider from '../../../node_modules/material-ui/lib/MuiThemeProvider';
import MainComponent from './MainComponent';
import FooterContent from './Footer';


const styles = {
  container: {
    textAlign: 'center',
    paddingTop: 0
  }
};

const muiTheme = getMuiTheme({
  fontFamily: 'Roboto, sans-serif',
  palette: {
    accent1Color: indigo800
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
         <MainComponent />
          <FooterContent />
        </div>
      </MuiThemeProvider>
    );
  }
}

export default Main;
 