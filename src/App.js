import React from "react";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import Navbar from "./components/Navbar";
import Login from "./components/Login";
import Dashboard from "./components/Dashboard";
import Professionals from "./components/Professionals";
import ShowPro from "./components/ShowPro";
import Register from "./components/Register";
import ActiveJobs from "./components/ActiveJobs";
import "./App.css";
import { CssBaseline } from "@material-ui/core";

function App() {
  return (
    <Router>
      <CssBaseline />
      <div className="App">
        <Navbar />
        <Switch>
          <Route
            path="/login"
            render={(routerProps) => <Login {...routerProps} />}
          />

          <Route path="/register" component={Register} />
          <Route
            path="/dashboard"
            render={(props) => <Dashboard {...props} />}
          />

          <Route path="/jobs" component={ActiveJobs} />

          <Route
            exact
            path="/professionals"
            render={(routerProps) => <Professionals {...routerProps} />}
          />

          <Route
            exact
            path={"/professionals/:professionalId"}
            render={(routerProps) => <ShowPro {...routerProps} />}
          />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
