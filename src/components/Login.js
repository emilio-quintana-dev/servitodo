import React from "react";
import { loginSuccess } from "../actions/auth";
import { connect } from "react-redux";

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "emilio@dev.com",
      password: "emilio",
    };
  }

  handleInputChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const reqObj = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(this.state),
    };

    fetch("http://localhost:3001/auth", reqObj)
      .then((resp) => resp.json())
      .then((data) => {
        if (data.error) {
          alert(data.error);
          // red bar
        } else {
          localStorage.setItem("token", data.token);
          this.props.loginSuccess(data);
          this.props.history.push("/dashboard");
        }
      });
  };

  render() {
    return (
      <div>
        <h3>Sign in</h3>
        <form onSubmit={this.handleSubmit}>
          <input
            name={"email"}
            onChange={this.handleInputChange}
            value={this.state.email}
          />
          <input
            name={"password"}
            onChange={this.handleInputChange}
            value={this.state.password}
          />
          <input type="submit" value="login" />
        </form>
      </div>
    );
  }
}

export default connect(null, { loginSuccess })(Login);
