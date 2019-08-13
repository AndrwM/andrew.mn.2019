import React, { Component } from "react";
import { HashRouter, Switch, Route } from "react-router-dom";

// --- Pages
import PageAbout from "./pages/PageAbout";
import PageResume from "./pages/PageResume";
import PageWorkIndex from "./pages/PageWorkIndex";
import PageNewline from "./pages/work/PageNewline";

// --- Partials
import PartialFooter from "./pages/partials/PartialFooter";

// --- Components
import Breadcrumb from "./components/Breadcrumb";

// --- Assets
import "./assets/fonts/Graphik-Regular-Web.woff"
import "./assets/fonts/Graphik-Light-Web.woff"
import "./assets/stylesheets/main.scss";

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      header: false
    };

    this.setAppState = this.setAppState.bind(this);
  }

  setAppState(newState){
    this.setState(newState);
  }

  page(path, _Component) {
    return(
      <Route exact path={path} render={() => <_Component setAppState={this.setAppState} />} />
    );
  }

  render() {
    return (
      <HashRouter>
        <Breadcrumb />
        {this.state.header}
        <Switch>
          {this.page("/", PageAbout)}
          {this.page("/resume", PageResume)}
          {this.page("/case-studies", PageWorkIndex)}
          {this.page("/case-studies/newline", PageNewline)}
        </Switch>
        <Route path="/:subpage" component={PartialFooter} />
      </HashRouter>
    );
  }
}

export default App;
