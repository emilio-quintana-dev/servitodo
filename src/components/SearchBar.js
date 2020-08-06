//                   Necesary Imports
// ---------------x--------------------x---------------
import React, { Component } from "react";
import { connect } from "react-redux";
//                     UI Components
// ---------------x--------------------x---------------
import { InputBase } from "@material-ui/core";
//                        Actions
// ---------------x--------------------x---------------
import { updateQuery } from "../actions/professionals";

class SearchBar extends Component {
  constructor() {
    super();

    this.state = {
      query: "",
    };
  }

  //                     Controlled Input
  // ---------------x--------------------x---------------
  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });

    this.props.updateQuery(event.target.value);
  };

  render() {
    return (
      <InputBase
        name="query"
        placeholder="Search…"
        inputProps={{ "aria-label": "search" }}
        onChange={this.handleChange}
      />
    );
  }
}

const mapStateToProps = (state) => {
  return {
    query: state.query,
  };
};

export default connect(mapStateToProps, { updateQuery })(SearchBar);
