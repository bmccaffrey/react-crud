import React from 'react';
import { AppBar, Toolbar, Typography } from '@material-ui/core';

import LoginButton from './LoginButton';

const AppHeader = () => (
  <AppBar position="static">
    <Toolbar>
      <Typography variant="title" color="inherit">
        My React App
      </Typography>
      <LoginButton />
    </Toolbar>
  </AppBar>
);

export default AppHeader;
