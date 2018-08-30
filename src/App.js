import React, { Fragment } from 'react';
import { CssBaseline, withStyles } from '@material-ui/core';
import AppHeader from './components/AppHeader';
import Home from './pages/Home';

const App = ({ classes }) => (
  <Fragment>
    <CssBaseline />
    <AppHeader />
    <Home />
  </Fragment>
);

export default App;
