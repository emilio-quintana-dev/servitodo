import React from "react";
import LoginForm from "../components/LoginForm";
import { Card, CardContent } from "@material-ui/core";

const LoginCard = (props) => {
  const cardStyle = { padding: "20px", margin: "20px" };
  return (
    <Card style={cardStyle}>
      <CardContent>
        <LoginForm history={props.history} />
      </CardContent>
    </Card>
  );
};

export default LoginCard;
