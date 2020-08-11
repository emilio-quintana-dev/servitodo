import React, { Component } from "react";
import { FormGroup, TextField, Button } from "@material-ui/core";
import { loginSuccess } from "../actions/auth";
import { connect } from "react-redux";

class RegisterForm extends Component {
  constructor() {
    super();

    this.state = {
      first_name: "",
      last_name: "",
      email: "",
      password: "",
      password_confirmation: "",
      zip_code: 0,
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

    fetch("http://localhost:3001/register", reqObj)
      .then((resp) => resp.json())
      .then((data) => {
        if (data.error) {
          alert(data.error);
        } else {
          localStorage.setItem("token", data.token);
          this.props.loginSuccess(data);
          this.props.history.push("/dashboard");
          console.log(data);
        }
      });
  };
  render() {
    const textfieldStyle = { paddingBottom: 20 };
    return (
      <FormGroup>
        <TextField
          autoFocus
          id="outlined-basic"
          label="First Name"
          variant="outlined"
          name="first_name"
          onChange={this.handleInputChange}
          value={this.state.first_name}
          style={textfieldStyle}
        />

        <TextField
          id="outlined-basic"
          label="Last Name"
          variant="outlined"
          name="last_name"
          onChange={this.handleInputChange}
          value={this.state.last_name}
          style={textfieldStyle}
        />

        <TextField
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

        <TextField
          type="password"
          id="outlined-basic"
          label="Password Confirmation"
          variant="outlined"
          name="password_confirmation"
          onChange={this.handleInputChange}
          value={this.state.password_confirmation}
          style={textfieldStyle}
        />

        <TextField
          type="number"
          id="outlined-basic"
          label="Zip Code"
          variant="outlined"
          name="zip_code"
          onChange={this.handleInputChange}
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
          Create Account
        </Button>
      </FormGroup>
    );
  }
}

export default connect(null, { loginSuccess })(RegisterForm);
