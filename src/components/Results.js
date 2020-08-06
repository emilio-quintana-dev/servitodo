import React, { Component } from "react";
import { connect } from "react-redux";
import { currentUser } from "../actions/auth";
import { fetchSuccess } from "../actions/professionals";
import ResultsGrid from "../components/ResultsGrid";
import SearchBar from "../components/SearchBar";

class Results extends Component {
  componentDidMount() {
    this.checkForToken();
    this.fetchProData();
  }

  fetchProData = () => {
    fetch("http://localhost:3001/professionals")
      .then((response) => response.json())
      .then((response) => this.props.fetchSuccess(response.professionals));
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
      <div>
        <SearchBar />
        <ResultsGrid />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    auth: state.auth,
    professionals: state.professionals,
  };
};

export default connect(mapStateToProps, { currentUser, fetchSuccess })(Results);
