import React, { Component } from "react";
import { connect } from "react-redux";
import { Field, reduxForm } from "redux-form";

import { fetchSubjects, fetchSubject, signIn } from "../actions";

class Login extends Component {
  componentDidMount() {
    // this.props.fetchSubjects();
    // this.props.fetchSubject(5);
    this.props.signIn({
      username: "mclinard",
      password: "password123"
    });
  }

  renderError = ({ error, touched }) => {
    if (touched && error) {
      return (
        <div className="ui error message">
          <div className="header">{error}</div>
        </div>
      );
    }
  };

  renderInput = ({ input, label, type, meta }) => {
    const className = `field ${meta.error && meta.touched ? "error" : ""}`;
    return (
      <div className={className}>
        <label>{label}</label>
        <input {...input} autoComplete="off" type={type} />
        {this.renderError(meta)}
      </div>
    );
  };

  onSubmit = formValues => {
    this.props.fetchUsers(formValues);
  };

  render() {
    return (
      <div>
        <h3 className="ui dividing header">Login</h3>
        <form
          className="ui form error"
          onSubmit={this.props.handleSubmit(this.onSubmit)}
        >
          <Field
            name="username"
            label="Username"
            component={this.renderInput}
            type="text"
          />
          <Field
            name="password"
            label="Password"
            component={this.renderInput}
            type="password"
          />
          <button className="ui primary button">Submit</button>
        </form>
      </div>
    );
  }
}

const validate = formValues => {
  const errors = {};

  if (!formValues.username) {
    errors.username = "You must enter a username";
  }

  if (!formValues.password) {
    errors.password = "You must enter a password";
  }

  return errors;
};

const mapStateToProps = state => {
  console.log(state);
  return { users: state.auth };
};

const WrappedComponent = reduxForm({
  form: "userForm",
  validate
})(Login);

export default connect(mapStateToProps, {
  fetchSubjects,
  fetchSubject,
  signIn
})(WrappedComponent);

// export default Login;
