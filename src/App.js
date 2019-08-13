import React, { Component } from "react";
import { HashRouter, Switch, Route } from "react-router-dom";

// --- Pages
import PageAbout from "./pages/PageAbout";
import PageResume from "./pages/PageResume";

// --- Compnents
import Breadcrumb from "./components/Breadcrumb";

// --- Assets
import "./assets/fonts/Graphik-Regular-Web.woff"
import "./assets/fonts/Graphik-Light-Web.woff"
import "./assets/stylesheets/main.scss";

class App extends Component {
  render() {
    return (
      <HashRouter>
        <Breadcrumb />
        <Switch>
          <Route exact path="/" component={PageAbout} />
          <Route exact path="/resume" component={PageResume} />
        </Switch>
      </HashRouter>
    );
  }
}

export default App;
