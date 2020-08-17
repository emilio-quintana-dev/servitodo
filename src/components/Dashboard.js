import React from "react";
import { connect } from "react-redux";
import { currentUser } from "../actions/auth";
import SearchBar from "../components/SearchBar";
import {
  Button,
  Container,
  Typography,
  Grid,
  CssBaseline,
  Divider,
} from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import WelcomeSnackbar from "../components/WelcomeSnackbar";

class Dashboard extends React.Component {
  componentDidMount() {
    this.checkForToken();
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
        .then((response) => {
          if (response.error) {
            this.props.history.push("/login");
          } else {
            this.props.currentUser(response);
          }
        });
    }
  };

  render() {
    return (
      <Container maxWidth="lg" style={{ marginTop: 80 }}>
        <WelcomeSnackbar />
        <CssBaseline />
        <Typography
          variant="h6"
          style={{
            borderBottom: "2px solid #4CAF50",
            width: 80,
            fontFamily: "Montserrat",
            fontSize: "15px",
            marginBottom: 10,
          }}
        >
          Hire a pro
        </Typography>

        <Grid container>
          <Grid item xs={10}>
            <Typography variant="h3" style={{ fontFamily: "Montserrat" }}>
              Find local professionals for
            </Typography>
            <Typography
              variant="h3"
              style={{ marginBottom: 30, fontFamily: "Montserrat" }}
            >
              pretty much everything.
            </Typography>
            <SearchBar />

            <Button
              style={{
                backgroundColor: "#4CAF50",
                color: "white",
                margin: 20,
                padding: 10,
              }}
            >
              Personal Trainers
            </Button>

            <Button
              style={{
                backgroundColor: "#4CAF50",
                color: "white",
                margin: 20,
                padding: 10,
              }}
            >
              Electricians
            </Button>

            <Button
              style={{
                backgroundColor: "#4CAF50",
                color: "white",
                margin: 20,
                padding: 10,
              }}
            >
              App Developers
            </Button>

            <Button
              style={{
                backgroundColor: "#4CAF50",
                color: "white",
                margin: 20,
                padding: 10,
              }}
            >
              House Cleaners
            </Button>
          </Grid>

          <Grid item>
            <Button
              size="large"
              variant="contained"
              onClick={() => this.props.history.push("/results")}
              style={{
                backgroundColor: "#4CAF50",
                color: "white",
                display: "inline",
                marginTop: 142,
                height: 55,
                marginLeft: 10,
              }}
            >
              <SearchIcon />
            </Button>
          </Grid>
        </Grid>
      </Container>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    auth: state.auth,
  };
};

export default connect(mapStateToProps, { currentUser })(Dashboard);
