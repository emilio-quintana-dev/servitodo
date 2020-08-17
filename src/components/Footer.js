import React, { Component } from "react";
import { Grid, Typography, ButtonBase } from "@material-ui/core";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import BlurOnIcon from "@material-ui/icons/BlurOn";
import InstagramIcon from "@material-ui/icons/Instagram";

class Footer extends Component {
  state = {};
  render() {
    return (
      <footer id="footer">
        <Grid container spacing={2}>
          <Grid item>
            <Typography style={{ fontFamily: "Montserrat" }}>
              {" "}
              &#169; 2020 Servitodo, Inc
            </Typography>
          </Grid>
          <Grid item>
            <ButtonBase>
              <LinkedInIcon style={{ fontSize: "22.5px" }} />
            </ButtonBase>
          </Grid>

          <Grid item>
            <ButtonBase>
              <BlurOnIcon style={{ fontSize: "22.5px" }} />
            </ButtonBase>
          </Grid>

          <Grid item>
            <ButtonBase>
              <InstagramIcon style={{ fontSize: "22.5px" }} />
            </ButtonBase>
          </Grid>
        </Grid>
      </footer>
    );
  }
}

export default Footer;
