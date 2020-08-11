import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import ButtonBase from "@material-ui/core/ButtonBase";
import { Button } from "@material-ui/core";
import profilePic from "../profile.jpeg";
import EmojiEventsIcon from "@material-ui/icons/EmojiEvents";
import WorkIcon from "@material-ui/icons/Work";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import StarIcon from "@material-ui/icons/Star";
import { CssBaseline } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  paper: {
    padding: theme.spacing(5),
    marginBottom: 20,
  },
  image: {
    width: 168,
    height: 168,
  },
  img: {
    margin: "auto",
    display: "block",
    maxWidth: "100%",
    maxHeight: "100%",
    borderRadius: "50%",
  },
  button: {
    marginTop: "100.00%",
    backgroundColor: "#009fd9",
    color: "white",
  },
  star: {
    color: "#009fd9",
  },
}));

const renderStars = (averageReviews) => {
  switch (averageReviews) {
    case 1:
      return (
        <div>
          <Typography
            style={{
              fontSize: "17.5px",
              display: "inline-block",
              color: "#4CAF50",
            }}
          >
            New on Servitodo
          </Typography>
          <StarIcon
            fontSize="medium"
            style={{ color: "#4CAF50", paddingTop: 10 }}
          />
        </div>
      );

    case 2:
      return (
        <div>
          <Typography style={{ display: "inline-block" }}>Good</Typography>
          <StarIcon style={{ color: "#4CAF50" }} />
          <StarIcon style={{ color: "#4CAF50" }} />
        </div>
      );

    case 3:
      return (
        <div>
          <StarIcon style={{ color: "#4CAF50" }} />
          <StarIcon style={{ color: "#4CAF50" }} />
          <StarIcon style={{ color: "#4CAF50" }} />
        </div>
      );

    case 4:
      return (
        <div>
          <StarIcon style={{ color: "#4CAF50" }} />
          <StarIcon style={{ color: "#4CAF50" }} />
          <StarIcon style={{ color: "#4CAF50" }} />
          <StarIcon style={{ color: "#4CAF50" }} />
        </div>
      );

    case 5:
      return (
        <div>
          <StarIcon style={{ color: "#4CAF50" }} />
          <StarIcon style={{ color: "#4CAF50" }} />
          <StarIcon style={{ color: "#4CAF50" }} />
          <StarIcon style={{ color: "#4CAF50" }} />
          <StarIcon style={{ color: "#4CAF50" }} />
        </div>
      );

    default:
      return <Typography>No reviews yet.</Typography>;
  }
};

export default function ProCard(props) {
  const classes = useStyles();
  const {
    id,
    first_name,
    last_name,
    times_hired,
    time_in_bussiness,
    zip_code,
    introduction,
    average_reviews,
    estimated_cost,
  } = props.professional;

  const trimedIntro = introduction.slice(0, 200);
  return (
    <React.Fragment>
      {/* <CssBaseline /> */}
      <Paper className={classes.paper} elevation={1}>
        <Grid container spacing={4}>
          <Grid item>
            <ButtonBase className={classes.image}>
              <img className={classes.img} alt="complex" src={profilePic} />
            </ButtonBase>
          </Grid>

          <Grid item xs={12} sm container>
            <Grid item xs={8} container direction="column">
              <Grid item>
                <Typography gutterBottom variant="h5">
                  {" "}
                  {first_name + " " + last_name}
                </Typography>
              </Grid>

              <Grid item>
                <Typography variant="body2" color="textSecondary">
                  {renderStars(average_reviews)}
                </Typography>
              </Grid>

              <Grid item>
                <EmojiEventsIcon size="md" />
                <Typography style={{ display: "inline-block" }}>
                  {times_hired} hires on Servitodo
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
            </Grid>
            <Grid item>
              <Typography variant="subtitle1">
                ${estimated_cost}/hour
              </Typography>
              <Typography variant="body2" color="textSecondary">
                estimated cost
              </Typography>
              <Button
                onClick={() => props.history.push(`/professionals/${id}`)}
                className={classes.button}
                variant="contained"
              >
                View Profile
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </Paper>
    </React.Fragment>
  );
}
