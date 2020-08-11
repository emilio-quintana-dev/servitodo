import React from "react";
import { Container, Typography, Button, Grid } from "@material-ui/core";

const ActiveJobCard = (props) => {
  return (
    <Container>
      <Grid container>
        <Grid item style={{ flexGrow: 1 }}>
          <Typography>
            {props.job.title} - {props.job.status}
          </Typography>
        </Grid>

        <Grid item>
          <Button variant="contained" color="primary">
            Pay
          </Button>
          <Button
            variant="contained"
            color="primary"
            style={{ marginLeft: 10 }}
          >
            Mark as done
          </Button>
        </Grid>
      </Grid>
    </Container>
  );
};

export default ActiveJobCard;
