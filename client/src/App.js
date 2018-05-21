import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Foods from "./pages/Foods";
import Detail from "./pages/Detail";
import NoMatch from "./pages/NoMatch";
import Nav from "./components/Nav";
import Todo from "./components/ToDo/wrappers/App";

const App = () => (
  <Router>
    <div>
      <Nav />
      <Switch>
        <Route exact path="/" component={Foods} />
        <Route exact path="/todo" component={Todo} />
        <Route exact path="/foods" component={Foods} />
        <Route exact path="/foods/:id" component={Detail} />
        <Route component={NoMatch} />
      </Switch>
    </div>
  </Router>
);

export default App;
