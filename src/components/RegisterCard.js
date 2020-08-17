//    Necessary Imports
//----------x----------x---------
import React from "react";
//    Custom Components
//----------x----------x---------
import RegisterForm from "../components/RegisterForm";
//    UI Components
//----------x----------x---------
import { Card, CardContent } from "@material-ui/core";

const RegisterCard = (props) => {
  const cardStyle = { padding: "20px", margin: "20px" };
  return (
    <Card style={cardStyle}>
      <CardContent>
        <RegisterForm history={props.history} />
      </CardContent>
    </Card>
  );
};

export default RegisterCard;
