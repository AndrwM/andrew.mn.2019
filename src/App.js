import React, { Component } from "react";
import { HashRouter, Router, Route, Link } from "react-router-dom";

import PageAbout from "./pages/PageAbout";
import PageResume from "./pages/PageResume";

import "./assets/fonts/Graphik-Regular-Web.woff"
import "./assets/fonts/Graphik-Light-Web.woff"
import "./assets/stylesheets/main.scss";

class App extends Component {
  render() {
    return (
      <HashRouter>
        <Route exact path="/" component={PageAbout}/>
        <Route exact path="/resume" component={PageResume}/>
      </HashRouter>
    );
  }
}

export default App;
