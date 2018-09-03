import React from 'react';
import {
  withStyles,
  Card,
  CardContent,
  CardActions,
  Modal,
  Button,
  TextField
} from '@material-ui/core';
import { compose } from 'recompose';
import { withRouter } from 'react-router-dom';
import { Form, Field } from 'react-final-form';

const styles = theme => ({
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  modalCard: {
    width: '90%',
    maxWidth: 500
  },
  modalCardContent: {
    display: 'flex',
    flexDirection: 'column'
  },
  marginTop: {
    marginTop: 2 * theme.spacing.unit
  }
});

const PostEditor = ({ classes, post, onSave }) => (
  <Form initialValues={post} onSubmit={onSave}>
    <Modal className={classes.modal}>
      <Card className={classes.modalCard}>
        <form>
          <CardContent className={classes.modalCardContent}>
            <Field name="title">
              {({ input }) => <TextField label="Title" autoFocus {...input} />}
            </Field>
            <Field name="body">
              {({ input }) => (
                <TextField
                  className={classes.marginTop}
                  label="Body"
                  {...input}
                />
              )}
            </Field>
          </CardContent>
          <CardActions>
            <Button size="small" color="primary" type="submit">
              Save
            </Button>
            <Button size="small">Cancel</Button>
          </CardActions>
        </form>
      </Card>
    </Modal>
  </Form>
);

export default PostEditor;
