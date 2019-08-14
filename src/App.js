import React, { Component } from "react";
import { HashRouter, Switch, Route } from "react-router-dom";

// --- Pages
import PageAbout from "./pages/PageAbout";
import PageResume from "./pages/PageResume";
import PageCaseStudyIndex from "./pages/PageCaseStudyIndex";
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
      headerContent: false,
      headerHeight: 0
    };

    this.setAppState = this.setAppState.bind(this);
    this.refHeader = React.createRef();
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    // Set Header Height When New Content Is Rendered
    if (
        prevState.headerContent !== this.state.headerContent &&
        prevState.headerHeight === this.state.headerHeight
      ){
      this.setState({ headerHeight: this.refHeader.current.clientHeight })
    }
  }

  setAppState(newState){
    this.setState(newState);
  }

  page(path, PageComponent) {
    return(
      <Route exact path={path} render={() => <PageComponent setAppState={this.setAppState} />} />
    );
  }

  renderHeader(){
    return(
      <header className="c-header" ref={this.refHeader}>
        <div className="c-header__background" style={{height: this.state.headerHeight}} />
        <div className="c-header__content">
          {this.state.headerContent}
        </div>
      </header>
    );
  }

  render() {
    return (
      <HashRouter>
        <Breadcrumb />
        {this.renderHeader()}
        <Switch>
          {this.page("/", PageAbout)}
          {this.page("/resume", PageResume)}
          {this.page("/case-studies", PageCaseStudyIndex)}
          {this.page("/case-studies/newline", PageNewline)}
        </Switch>
        <Route path="/:subpage" component={PartialFooter} />
      </HashRouter>
    );
  }
}

export default App;
