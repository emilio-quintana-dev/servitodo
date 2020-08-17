//    Necessary Imports
//----------x----------x---------
import React, { Component } from "react";
//    Store Actions
//----------x----------x---------
import { connect } from "react-redux";
import { currentUser } from "../actions/auth";
//    UI Components
//----------x----------x---------
import {
  Typography,
  CircularProgress,
  CssBaseline,
  Grid,
  Paper,
} from "@material-ui/core";
//    Custom Components
//----------x----------x---------
import ActiveJobCard from "../components/ActiveJobCard";
import RadioFilters from "../components/RadioFilters";
//    Under Construction: Users will be able
//    to mark jobs as done, leave a review and
//    pay the pro.
//----------x----------x---------
class ActiveJobs extends Component {
  constructor() {
    super();

    this.state = {
      activeJobs: [],
    };
  }
  componentDidMount() {
    this.checkForToken();
    this.fetchJobsData();
  }

  componentDidUpdate(prevProps) {
    if (!prevProps.auth) {
      this.fetchJobsData();
    }
  }

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

  fetchJobsData = () => {
    if (this.props.auth) {
      const userId = this.props.auth.id;

      fetch(`http://localhost:3001/users/${userId}/jobs`)
        .then((response) => response.json())
        .then((response) => this.setState({ activeJobs: response }));
    }
  };

  renderActiveJobs = () => {
    return this.state.activeJobs.map((job, idx) => {
      return <ActiveJobCard job={job} key={idx} />;
    });
  };

  render() {
    return (
      <React.Fragment>
        <CssBaseline />
        <Typography variant="h4" style={{ textAlign: "center" }}>
          Active Jobs
        </Typography>
        <Grid container style={{ padding: "1.5%" }} spacing={2}>
          <Grid item xs={2}>
            <Paper style={{ padding: 20 }}>
              <Typography>Sort by:</Typography>
              <RadioFilters />
            </Paper>
          </Grid>
          <Grid item xs={10}>
            {this.props.auth ? this.renderActiveJobs() : <CircularProgress />}
          </Grid>
        </Grid>
      </React.Fragment>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    auth: state.auth,
  };
};

export default connect(mapStateToProps, { currentUser })(ActiveJobs);
