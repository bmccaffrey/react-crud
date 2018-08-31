import React, { Component } from 'react';
import {
  Button,
  IconButton,
  Menu,
  MenuItem,
  ListItemText
} from '@material-ui/core';

import { AccountCircle } from '@material-ui/icons';
import { withAuth } from '@okta/okta-react';

class LoginButton extends Component {
  state = {
    authenticated: null,
    user: null,
    menuAnchorEl: null
  };

  componentDidUpdate() {
    this.checkAuthentication();
  }

  componentDidMount() {
    this.checkAuthentication();
  }

  async checkAuthentication() {
    const authenticated = await this.props.auth.isAuthenticated();
    if (authenticated !== this.state.authenticated) {
      const user = await this.props.auth.getUser();
      this.setState({ authenticated, user });
    }
  }

  handleMenuOpen = event =>
    this.setState({ menuAnchorEl: event.currentTarget });

  handleMenuClose = () => this.setState({ menuAnchorEl: null });

  login = () => this.props.auth.login();

  logout = () => {
    this.handleMenuClose();
    this.props.auth.logout();
  };

  render() {
    const { authenticated, user, menuAnchorEl } = this.state;

    if (authenticated == null) return null;
    if (!authenticated) return <Button color="inherit">Login</Button>;

    const menuPosition = {
      vertical: 'top',
      horizontal: 'right'
    };

    return (
      <div>
        <IconButton>
          <AccountCircle />
        </IconButton>
        <Menu
          anchorEl={menuAnchorEl}
          anchorOrigin={menuPosition}
          tranformOrigin={menuPosition}
          open={!!menuAnchorEl}
        >
          <MenuItem>
            <ListItemText />
          </MenuItem>
        </Menu>
      </div>
    );
  }
}

export default withAuth(LoginButton);
