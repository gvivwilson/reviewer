import React, { Component } from "react";
import { connect } from "react-redux";

import { fetchSubjects, fetchSubject } from "../actions";

class Login extends Component {
  componentDidMount() {
    // this.props.fetchSubjects();
    this.props.fetchSubject(20);
  }

  render() {
    console.log(this.props.subjects);
    return (
      <div>
        <h3 className="ui dividing header">Login</h3>
        <form className="ui form">
          <div className="field">
            <label>First Name</label>
            <input type="text" name="username" placeholder="Username" />
          </div>
          <div className="field">
            <label>First Name</label>
            <input type="password" name="password" placeholder="Password" />
          </div>
          <button className="ui primary button">Submit</button>
        </form>
      </div>
    );
  }
}

const mapStateToProps = state => {
  console.log(state);
  return { subjects: state.subjects };
};

export default connect(mapStateToProps, { fetchSubjects, fetchSubject })(Login);

// export default Login;
