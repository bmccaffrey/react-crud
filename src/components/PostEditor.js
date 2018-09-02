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

const PostEditor = () => (
  <Form>
    <Modal>
      <Card>
        <form>
          <CardContent>
            <Field name="title">
              {({ input }) => <TextField label="Title" autoFocus {...input} />}
            </Field>
            <Field name="body">
              {({ input }) => <TextField label="Body" {...input} />}
            </Field>
          </CardContent>
        </form>
      </Card>
    </Modal>
  </Form>
);

export default PostEditor;
