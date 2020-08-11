import React, { Component } from "react";
import { loginSuccess } from "../actions/auth";
import { connect } from "react-redux";
import { FormGroup, TextField, Button } from "@material-ui/core";
import { InputLabel } from "@material-ui/core";

class LoginForm extends Component {
  constructor() {
    super();
    this.state = {
      email: "",
      password: "",
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
        } else {
          localStorage.setItem("token", data.token);
          this.props.loginSuccess(data);
          this.props.history.push("/dashboard");
        }
      });
  };

  render() {
    const textfieldStyle = { paddingBottom: 20 };
    return (
      <FormGroup style={{ textAlign: "center" }}>
        <TextField
          autoFocus
          id="outlined-basic"
          label="Email"
          variant="outlined"
          name="email"
          onChange={this.handleInputChange}
          value={this.state.email}
          style={textfieldStyle}
        />

        <TextField
          type="password"
          id="outlined-basic"
          label="Password"
          variant="outlined"
          name="password"
          onChange={this.handleInputChange}
          value={this.state.password}
          style={textfieldStyle}
        />

        <Button
          size="large"
          onClick={this.handleSubmit}
          variant="contained"
          color="primary"
          type="submit"
          value="login"
          style={{ backgroundColor: "#009fd9" }}
        >
          Log in
        </Button>
      </FormGroup>
    );
  }
}

export default connect(null, { loginSuccess })(LoginForm);
