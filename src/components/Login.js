import React from "react";
import { CssBaseline, Typography, Container } from "@material-ui/core";
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
