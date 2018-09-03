import React, { Component } from 'react';
import { withAuth } from '@okta/okta-react';
import { withRouter, Route, Redirect, Link } from 'react-router-dom';
import {
  withStyles,
  Typography,
  Button,
  IconButton,
  Paper,
  List,
  ListItem,
  ListItemText,
  ListItemSecondaryAction
} from '@material-ui/core';
import { Delete as DeleteIcon, Add as AddIcon } from '@material-ui/icons';
import moment from 'moment';
import { find, orderBy } from 'lodash';
import { compose } from 'recompose';

const styles = theme => ({
  posts: {
    marginTop: 2 * theme.spacing.unit
  },
  fab: {
    position: 'absolute',
    bottom: 3 * theme.spacing.unit,
    right: 3 * theme.spacing.unit,
    [theme.breakpoints.down('xs')]: {
      bottom: 2 * theme.spacing.unit,
      right: 2 * theme.spacing.unit
    }
  }
});

const API = process.env.REACT_APP_API || 'http://localhost:3001';

export default class PostsManager extends Component {
  state = {
    loading: true,
    posts: []
  };

  async fetch(method, endpoint, body) {
    try {
      const response = await fetch(`${API}${endpoint}`, {
        method,
        body: body && JSON.stringify(body),
        headers: {
          'content-type': 'application/json',
          accept: 'application/json',
          authorization: `Bearer ${await this.props.auth.getAccessToken()}`
        }
      });
      return await response.json();
    } catch (error) {
      console.error(error);
    }
  }

  render() {
    const { classes } = this.props;

    return (
      <Fragment>
        <Typography>Posts Manager</Typography>
        <Paper className={classes.posts}>
          <List>
            <ListItem>
              <ListItemText />
              <ListItemSecondaryAction>
                <IconButton>
                  <DeleteIcon />
                </IconButton>
              </ListItemSecondaryAction>
            </ListItem>
          </List>
        </Paper>
        <Button className={classes.fab}>
          <AddIcon />
        </Button>
      </Fragment>
    );
  }
}
