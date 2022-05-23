import React, { Component } from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";

import "./Form.css";

type CustomFormProps = {};

type CustomFormState = {
  username: string;
  email: string;
  password: string;
  successful: boolean;
  message: string;
};

class CustomForm extends Component<CustomFormProps, CustomFormState> {
  constructor(props: CustomFormProps) {
    super(props);

    this.handleSubmit = this.handleSubmit.bind(this);

    this.state = {
      username: "",
      email: "",
      password: "",
      successful: false,
      message: "",
    };
  }

  validationScheme = () => {
    return Yup.object().shape({
      username: Yup.string()
        .test(
          "length",
          "The username must be between 3 and 20 characters.",
          (val: any) =>
            val && val.toString().length >= 3 && val.toString().length <= 20
        )
        .required("This field is required!"),
      email: Yup.string()
        .email("This is not a valid email.")
        .required("This field is required!"),
      password: Yup.string()
        .test(
          "length",
          "The password must be between 6 and 40 characters.",
          (val: any) =>
            val && val.toString().length >= 6 && val.toString().length <= 40
        )
        .required("This field is required!"),
    });
  };

  handleSubmit = (formValue: {
    username: string;
    email: string;
    password: string;
  }) => {
    console.log(JSON.stringify(formValue));
    this.setState({
      message: "Successful submission.",
      successful: true,
    });
  };

  render() {
    const { successful, message } = this.state;
    const initialValues = {
      username: "",
      email: "",
      password: "",
    };
    return (
      <div>
        <Formik
          initialValues={initialValues}
          validationSchema={this.validationScheme}
          onSubmit={this.handleSubmit}
        >
          <Form>
            {!successful && (
              <div>
                <div>
                  <label htmlFor="username">Username</label>
                  <Field name="username" type="text" />
                  <ErrorMessage name="username" component="div" />
                </div>
                <div>
                  <label htmlFor="email">Email</label>
                  <Field name="email" type="email" />
                  <ErrorMessage name="email" component="div" />
                </div>
                <div>
                  <label htmlFor="password">Password</label>
                  <Field name="password" type="password" />
                  <ErrorMessage name="password" component="div" />
                </div>
                <div>
                  <button type="submit">Submit</button>
                </div>
              </div>
            )}
            {message && (
              <div>
                <div>{message}</div>
              </div>
            )}
          </Form>
        </Formik>
      </div>
    );
  }
}

export default CustomForm;
