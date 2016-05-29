import React, { PropTypes } from 'react';
import { IndexLink } from 'react-router';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import NavBar from './NavBar';

const App = (props) => {
  return (
    <div>
        <NavBar />
        <div>
          {props.children}
        </div>
    </div>
  );
};

App.propTypes = {
  children: PropTypes.element
};

export default App;
