import React from "react";
import ProCard from "../components/ProCard";
import { connect } from "react-redux";

function ResultsGrid(props) {
  const calculateRange = (userZipCode) => {
    return [
      userZipCode - 2,
      userZipCode - 1,
      userZipCode,
      userZipCode + 1,
      userZipCode + 2,
    ];
  };

  const renderProCards = () => {
    let zipCodeRange = calculateRange(props.auth.zip_code);

    //      Filter by User's Zip Code
    // ----------x------------x------------
    let filteredPros = props.professionals.filter(
      (professional) =>
        professional.zip_code == zipCodeRange[0] ||
        professional.zip_code == zipCodeRange[1] ||
        professional.zip_code == zipCodeRange[2] ||
        professional.zip_code == zipCodeRange[3] ||
        professional.zip_code == zipCodeRange[4]
    );

    //         Filter by keyword
    //----------x------------x------------
    filteredPros = filteredPros.filter((professional) =>
      professional.introduction.includes(props.query)
    );

    //         Check for Filter
    //----------x------------x------------
    if (props.filter === "distance") {
      filteredPros = filteredPros.sort((a, b) =>
        a.zip_code > b.zip_code ? 1 : -1
      );
    }

    if (filteredPros.length !== 0) {
      return filteredPros.map((professional, idx) => {
        return (
          <ProCard
            professional={professional}
            key={idx}
            history={props.history}
          />
        );
      });
    }
  };

  return <div>{renderProCards()}</div>;
}

const mapStateToProps = (state) => {
  return {
    auth: state.auth,
    professionals: state.professionals,
    query: state.query,
    filter: state.filter,
  };
};

export default connect(mapStateToProps, null)(ResultsGrid);
