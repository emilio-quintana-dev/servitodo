import React, { Component } from "react";
import { connect } from "react-redux";
import { currentUser } from "../actions/auth";
import { fetchSuccess } from "../actions/professionals";
import ResultsGrid from "./ResultsGrid";
import RadioFilters from "./RadioFilters";
import SearchBar from "./SearchBar";
import {
  CircularProgress,
  Grid,
  Paper,
  Typography,
  CssBaseline,
} from "@material-ui/core";

class Professionals extends Component {
  componentDidMount() {
    this.checkForToken();
    this.fetchProData();
  }

  fetchProData = () => {
    fetch("http://localhost:3001/professionals")
      .then((response) => response.json())
      .then((response) => this.props.fetchSuccess(response.professionals));
  };

  checkForToken = () => {
    const token = localStorage.getItem("token");

    if (!token) {
      this.props.history.push("/login");
    } else {
      const reqObj = {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };

      fetch("http://localhost:3001/current_user", reqObj)
        .then((response) => response.json())
        .then((user) => {
          if (user.error) {
            this.props.history.push("/login");
          } else {
            this.props.currentUser(user);
          }
        });
    }
  };

  render() {
    return (
      <React.Fragment>
        <CssBaseline />
        <Grid container spacing={2} style={{ padding: 10 }}>
          <Grid item xs={2}>
            <div style={{ marginBottom: 20 }}>
              <SearchBar />
            </div>

            <Paper style={{ padding: 15 }}>
              <Typography>Sort by:</Typography>
              <RadioFilters />
            </Paper>
          </Grid>
          <Grid item xs={8}>
            {this.props.auth ? (
              <ResultsGrid history={this.props.history} />
            ) : (
              <CircularProgress />
            )}
          </Grid>
        </Grid>
      </React.Fragment>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    auth: state.auth,
    professionals: state.professionals,
  };
};

export default connect(mapStateToProps, { currentUser, fetchSuccess })(
  Professionals
);
