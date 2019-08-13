import React, { Component } from "react";
import { HashRouter, Switch, Route } from "react-router-dom";

import PageAbout from "./pages/PageAbout";
import PageResume from "./pages/PageResume";

import "./assets/fonts/Graphik-Regular-Web.woff"
import "./assets/fonts/Graphik-Light-Web.woff"
import "./assets/stylesheets/main.scss";

class App extends Component {
  render() {
    return (
      <HashRouter>
        <Switch>
          <Route exact path="/" component={PageAbout} />
          <Route exact path="/resume" component={PageResume} />
        </Switch>
      </HashRouter>
    );
  }
}

export default App;
