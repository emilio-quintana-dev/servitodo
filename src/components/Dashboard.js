import React, { Component } from "react";
import { connect } from "react-redux";
import { currentUser } from "../actions/auth";

class Dashboard extends React.Component {
  componentDidMount() {
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
  }

  render() {
    console.log("PROPS----", this.props);
    return (
      <div>
        <h5>Dashboard</h5>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    auth: state.auth,
  };
};

export default connect(mapStateToProps, { currentUser })(Dashboard);
