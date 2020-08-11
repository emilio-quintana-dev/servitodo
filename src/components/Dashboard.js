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
} from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";

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
      <Container maxWidth="md" style={{ marginTop: 200 }}>
        <CssBaseline />
        <Grid container spacing={2}>
          <Grid container>
            <Grid item xs={8}>
              <Typography variant="h4" style={{ fontWeight: "bold" }}>
                Find local professionals for
              </Typography>
              <Typography
                variant="h4"
                style={{ fontWeight: "bold", marginBottom: 15 }}
              >
                pretty much anything 🛠️
              </Typography>
              <SearchBar />
            </Grid>

            <Grid item>
              <Button
                size="large"
                variant="contained"
                onClick={() => this.props.history.push("/professionals")}
                style={{
                  backgroundColor: "#009fd9",
                  color: "white",
                  display: "inline",
                  marginTop: 100,
                  marginLeft: 20,
                }}
              >
                <SearchIcon />
              </Button>
            </Grid>
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
