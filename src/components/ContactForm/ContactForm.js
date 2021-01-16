import { Component } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as yup from 'yup';
import { v4 as uuidv4 } from 'uuid';
import PropTypes from 'prop-types';
import styles from './ContactForm.module.css';

uuidv4();

const validationSchema = yup.object({
  name: yup.string().required("Enter contact's name"),
  number: yup
    .string()
    .length(10, 'Example: 0930939393')
    .required("Enter contact's phone"),
});

export default class ContactForm extends Component {
  static propTypes = {
    onSubmit: PropTypes.func.isRequired,
  };

  state = { name: '', number: '' };
  onInputChange = e => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  render() {
    return (
      <Formik
        initialValues={{ name: this.state.name, number: this.state.number }}
        validationSchema={validationSchema}
        onSubmit={({ name, number }, { setSubmitting }) => {
          this.props.onSubmit({ name, number, id: uuidv4() });
          setSubmitting(false);
        }}
      >
        <Form>
          <label>
            Name
            <Field
              type="text"
              name="name"
              //   value={this.state.name}
              //   onChange={this.onInputChange}
            />
          </label>
          <ErrorMessage name="name" />

          <label>
            Number
            <Field
              type="tel"
              name="number"
              //   value={this.state.number}
              //   onChange={this.onInputChange}
            />
          </label>

          <ErrorMessage name="number" />
          <button type="submit">Add contact</button>
        </Form>
      </Formik>
    );
  }
}
