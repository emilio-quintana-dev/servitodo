//    Necessary Imports
//----------x----------x---------
import React from "react";
//    Custom Components
//----------x----------x---------
import LoginForm from "../components/LoginForm";
//    UI Components
//----------x----------x---------
import { Card, CardContent, Divider, Typography } from "@material-ui/core";

//    ***Need to import makeStyles
//----------x----------x---------
const LoginCard = (props) => {
  const cardStyle = { padding: "20px", margin: "20px" };
  return (
    <Card style={cardStyle}>
      <CardContent>
        <LoginForm history={props.history} />
        {/* OR register */}
      </CardContent>
    </Card>
  );
};

export default LoginCard;
