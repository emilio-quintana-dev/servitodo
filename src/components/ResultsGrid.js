import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import ProCard from "../components/ProCard";
import { connect } from "react-redux";

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

function ResultsGrid(props) {
  const renderProCards = () => {
    let filteredPros = props.professionals.filter(
      (professional) => professional.zip_code == props.auth.zip_code
    );

    filteredPros = filteredPros.filter((professional) =>
      professional.introduction.includes(props.query)
    );

    if (filteredPros.lenght !== 0) {
      return filteredPros.map((professional, idx) => {
        return <ProCard professional={professional} key={idx} />;
      });
    }
  };

  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        {renderProCards()}
      </Grid>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    auth: state.auth,
    professionals: state.professionals,
    query: state.query,
  };
};

export default connect(mapStateToProps, null)(ResultsGrid);
