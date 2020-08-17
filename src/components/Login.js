//    Necessary Imports
//----------x----------x---------
import React from "react";
//    UI Components
//----------x----------x---------
import { CssBaseline, Typography, Container } from "@material-ui/core";
//    Custom Components
//----------x----------x---------

//    *** Need to change to functional component
//----------x----------x---------
import LoginCard from "../components/LoginCard";

class Login extends React.Component {
  render() {
    return (
      <React.Fragment>
        <CssBaseline />
        <Container maxWidth="sm">
          <Typography variant="h4" style={{ textAlign: "center" }}>
            Welcome Back
          </Typography>
          <LoginCard history={this.props.history} />
        </Container>
      </React.Fragment>
    );
  }
}

export default Login;
