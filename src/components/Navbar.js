import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { AppBar, Toolbar, Button, makeStyles } from "@material-ui/core";
import { logoutUser } from "../actions/auth";
import Logo from "../logo.png";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    borderBottom: "1px solid #e9eced",
    marginBottom: 20,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  logo: {
    flexGrow: 1,
  },
  navBar: {
    backgroundColor: "white",
  },
  button: {
    backgroundColor: "#009fd9",
    color: "white",
  },
}));

function Navbar(props) {
  const classes = useStyles();

  const handleLogout = () => {
    props.logoutUser();
    localStorage.removeItem("token");
  };

  return (
    <div className={classes.root}>
      <AppBar position="static" elevation={0} className={classes.navBar}>
        <Toolbar>
          <Link to="/dashboard" className={classes.logo}>
            <img width="50" height="50" src={Logo} />
          </Link>

          {props.auth ? (
            <div>
              <Button
                component={Link}
                to="/jobs"
                className={classes.menuButton}
              >
                Active Jobs
              </Button>

              <Button
                className={classes.button}
                variant="contained"
                onClick={handleLogout}
              >
                Logout
              </Button>
            </div>
          ) : (
            <div>
              <Button
                className={classes.button}
                variant="contained"
                href="/register"
                style={{ marginRight: 10 }}
              >
                Register
              </Button>
              <Button
                className={classes.button}
                variant="contained"
                href="/login"
              >
                Login
              </Button>
            </div>
          )}
        </Toolbar>
      </AppBar>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    auth: state.auth,
  };
};

export default connect(mapStateToProps, { logoutUser })(Navbar);
