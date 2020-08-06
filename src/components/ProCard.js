import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import { Typography } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
}));

export default function ProCard(props) {
  const classes = useStyles();

  const {
    first_name,
    last_name,
    times_hired,
    time_in_bussiness,
    introduction,
    zip_code,
  } = props.professional;

  return (
    <Grid item xs={12}>
      <Paper className={classes.paper}>
        <Typography variant="h4">
          {first_name}
          {last_name}
        </Typography>
        <Typography>Times Hired: {times_hired}</Typography>
        <Typography>Time in Business: {time_in_bussiness}</Typography>
        <Typography>Introduction: {introduction}</Typography>
        <Typography>Zip Code: {zip_code}</Typography>
      </Paper>
    </Grid>
  );
}
