import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/home";
import Login from "./pages/login";
import { isLogged } from "./services/auth";

const App: React.FC = () =>
  isLogged() ? (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  ) : (
    <Login />
  );

export default App;
