import React, { Component } from "react";
import { connect } from "react-redux";
import { currentUser } from "../actions/auth";
import { Container, Typography } from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import EmojiEventsIcon from "@material-ui/icons/EmojiEvents";
import WorkIcon from "@material-ui/icons/Work";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import profilePic from "../profile.jpeg";
import { Button } from "@material-ui/core";
import Review from "../components/Review";
import StarIcon from "@material-ui/icons/Star";
import JobForm from "../components/JobForm.js";
import ContactForm from "../components/ContactForm.js";
class ShowPro extends Component {
  constructor() {
    super();

    this.state = {
      professional: {},
      reviews: [],
      showJobForm: false,
      showContactForm: false,
    };
  }
  componentDidMount() {
    this.checkForToken();
    this.fetchProData();
  }

  fetchProData = () => {
    const id = parseInt(this.props.match.params.professionalId);
    fetch(`http://localhost:3001/professionals/${id}`)
      .then((response) => response.json())
      .then((response) =>
        this.setState({
          reviews: response.reviews,
          professional: response.professional,
        })
      );
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

  renderReviews = () => {
    return this.state.reviews.map((review, idx) => {
      return <Review review={review} key={idx} />;
    });
  };

  renderStars = (rating) => {
    switch (rating) {
      case 1:
        return (
          <div>
            <Typography
              variant="h6"
              style={{ display: "inline-block", color: "#4CAF50" }}
            >
              Regular
            </Typography>
            <StarIcon
              fontSize="small"
              style={{ color: "#4CAF50", paddingTop: 5 }}
            />
          </div>
        );

      case 2:
        return (
          <div>
            <Typography
              variant="h6"
              style={{ display: "inline-block", color: "#4CAF50" }}
            >
              Good
            </Typography>
            <StarIcon
              fontSize="small"
              style={{ color: "#4CAF50", paddingTop: 5 }}
            />
            <StarIcon
              fontSize="small"
              style={{ color: "#4CAF50", paddingTop: 5 }}
            />
          </div>
        );

      case 3:
        return (
          <div>
            <Typography
              variant="h6"
              style={{ display: "inline-block", color: "#4CAF50" }}
            >
              Very Good
            </Typography>
            <StarIcon
              fontSize="small"
              style={{ color: "#4CAF50", paddingTop: 5 }}
            />
            <StarIcon
              fontSize="small"
              style={{ color: "#4CAF50", paddingTop: 5 }}
            />
            <StarIcon
              fontSize="small"
              style={{ color: "#4CAF50", paddingTop: 5 }}
            />
          </div>
        );

      case 4:
        return (
          <div>
            <Typography
              variant="h6"
              style={{ display: "inline-block", color: "#4CAF50" }}
            >
              Excellent
            </Typography>
            <StarIcon
              fontSize="small"
              style={{ color: "#4CAF50", paddingTop: 5 }}
            />
            <StarIcon
              fontSize="small"
              style={{ color: "#4CAF50", paddingTop: 5 }}
            />
            <StarIcon
              fontSize="small"
              style={{ color: "#4CAF50", paddingTop: 5 }}
            />
            <StarIcon
              fontSize="small"
              style={{ color: "#4CAF50", paddingTop: 5 }}
            />
          </div>
        );

      case 5:
        return (
          <div>
            <Typography
              variant="h6"
              style={{ display: "inline-block", color: "#4CAF50" }}
            >
              Excellent
            </Typography>
            <StarIcon
              fontSize="small"
              style={{ color: "#4CAF50", paddingTop: 5 }}
            />
            <StarIcon
              fontSize="small"
              style={{ color: "#4CAF50", paddingTop: 5 }}
            />
            <StarIcon
              fontSize="small"
              style={{ color: "#4CAF50", paddingTop: 5 }}
            />
            <StarIcon
              fontSize="small"
              style={{ color: "#4CAF50", paddingTop: 5 }}
            />
            <StarIcon
              fontSize="small"
              style={{ color: "#4CAF50", paddingTop: 5 }}
            />
          </div>
        );

      default:
        return null;
    }
  };

  toggleJobForm = () => {
    const newState = !this.state.showJobForm;
    this.setState({
      showJobForm: newState,
    });
  };

  toggleContactForm = () => {
    const newState = !this.state.showContactForm;
    this.setState({
      showContactForm: newState,
    });
  };

  render() {
    const {
      first_name,
      last_name,
      introduction,
      time_in_bussiness,
      times_hired,
      zip_code,
      average_reviews,
      estimated_cost,
    } = this.state.professional;

    return (
      <React.Fragment>
        <Container>
          <Grid container spacing={4}>
            <Grid item>
              <img
                width="256"
                height="256"
                alt="complex"
                style={{ borderRadius: "50%", margin: "20px" }}
                src={profilePic}
              />
            </Grid>
            <Grid item xs={12} sm container>
              <Grid item xs={8} container direction="column" spacing={1}>
                <Grid item>
                  <Typography variant="h4">
                    {" "}
                    {first_name + " " + last_name}
                  </Typography>
                </Grid>

                <Grid item>
                  <Typography variant="body2" color="textSecondary">
                    {this.renderStars(average_reviews)}
                  </Typography>
                </Grid>

                <Grid item>
                  <WorkIcon size="md" />
                  <Typography style={{ display: "inline-block" }}>
                    {time_in_bussiness} years in business
                  </Typography>
                </Grid>

                <Grid item>
                  <LocationOnIcon size="md" />
                  <Typography style={{ display: "inline-block" }}>
                    Serves in {zip_code}
                  </Typography>
                </Grid>

                <Grid item>
                  <EmojiEventsIcon size="md" />{" "}
                  <Typography style={{ display: "inline-block" }}>
                    {times_hired} hires on Servitodo
                  </Typography>
                </Grid>

                <Grid item>
                  <Button
                    onClick={this.toggleJobForm}
                    variant="contained"
                    style={{
                      backgroundColor: "#4CAF50",
                      color: "white",
                      marginRight: 15,
                    }}
                    size="large"
                  >
                    Hire
                  </Button>

                  <Button
                    onClick={this.toggleContactForm}
                    variant="contained"
                    style={{ backgroundColor: "#4CAF50", color: "white" }}
                    size="large"
                  >
                    Contact me
                  </Button>
                </Grid>
              </Grid>
              <Grid item>
                <Typography variant="h6">${estimated_cost}/hour</Typography>
                <Typography variant="body2" color="textSecondary">
                  estimated cost
                </Typography>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={10}>
            {this.state.showJobForm ? (
              <JobForm
                userId={this.props.auth.id}
                proId={this.state.professional.id}
                history={this.props.history}
              />
            ) : null}

            {this.state.showContactForm ? (
              <ContactForm email={this.state.professional.email} />
            ) : null}

            <Typography variant="h5">Introduction:</Typography>
            <Typography variant="body1">{introduction}</Typography>
            <br />

            <Typography variant="h5">Reviews:</Typography>
            <Typography variant="body1">{this.renderReviews()}</Typography>
          </Grid>
        </Container>
      </React.Fragment>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    auth: state.auth,
  };
};

export default connect(mapStateToProps, { currentUser })(ShowPro);
