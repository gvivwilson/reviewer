import React, { Component } from "react";

class Login extends Component {
  render() {
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

export default Login;
