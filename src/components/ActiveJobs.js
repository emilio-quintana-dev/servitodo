import React, { Component } from "react";
import { connect } from "react-redux";
import { currentUser } from "../actions/auth";
import {
  Container,
  Typography,
  CircularProgress,
  CssBaseline,
  Grid,
  Paper,
} from "@material-ui/core";
import ActiveJobCard from "../components/ActiveJobCard";

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

  fetchJobsData = () => {
    if (this.props.auth) {
      const userId = this.props.auth.id;

      fetch(`http://localhost:3001/jobs/${userId}`)
        .then((response) => response.json())
        .then((response) => this.setState({ activeJobs: response.jobs }));
    }
  };

  renderActiveJobs = () => {
    return this.state.activeJobs.map((job, idx) => {
      return (
        <Paper style={{ padding: 20 }}>
          <ActiveJobCard job={job} key={idx} />
        </Paper>
      );
    });
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
        <Typography variant="h4" style={{ textAlign: "center" }}>
          Active Jobs
        </Typography>
        <Grid container spacing={2} style={{ padding: 10 }}>
          <Grid item xs={2}>
            <Paper style={{ padding: 15 }}>
              <Typography>Sort by:</Typography>
            </Paper>
          </Grid>
          <Grid item xs={8}>
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
