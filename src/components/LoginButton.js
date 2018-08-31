import React, { Component } from 'react';
import {
  Button,
  IconButton,
  Menu,
  MenuItem,
  ListItemText
} from '@material-ui/core';

// Can't compile with this import, but I'm following the docs to the letter
// Looks like it has incorrect peer dependencies
import { AccountCircle } from '@material-ui/icons';

export default class LoginButton extends Component {
  state = {
    authenticated: null,
    user: null,
    menuAnchorEl: null
  };

  render() {
    return (
      <div>
        <IconButton>
          <AccountCircle />
        </IconButton>
      </div>
    );
  }
}
