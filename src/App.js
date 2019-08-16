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
      headerContent: null,
      headerHeight: null,
      headerKey: 0,
    };

    this.routes = [
      { path: "/", PageComponent: PageAbout },
      { path: "/resume", PageComponent: PageResume },
      { path: "/case-studies", PageComponent: PageCaseStudyIndex },
      { path: "/case-studies/newline", PageComponent: PageNewline },
    ];

    this.setAppState = this.setAppState.bind(this);
    this.refHeader = React.createRef();
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    // Set Header Height When New Header Content Is Rendered If A Height Has Not Been Provided
    if (
      prevState.headerContent !== this.state.headerContent &&
      prevState.headerHeight === this.state.headerHeight
    ){
      this.setState({
        headerKey: this.state.headerKey + 1,
        headerHeight: this.refHeader.current.clientHeight
      });
    }
  }

  setAppState(newState){
    this.setState(newState);
  }

  renderHeader(){
    return(
      <header className="c-header" ref={this.refHeader}>
        <div className="c-header__background" style={{height: this.state.headerHeight}} />
        <div className="c-header__content" key={this.state.headerKey} children={this.state.headerContent} />
      </header>
    );
  }

  renderPage(){
    return this.routes.map(({ path, PageComponent }) => (
      <Route exact key={path} path={path} render={() =>
        <PageComponent setAppState={this.setAppState} />
      }/>
    ))
  }

  render() {
    return (
      <HashRouter>
        <Route path="/:subpage" component={Breadcrumb} />
        {this.renderHeader()}
        {this.renderPage()}
        <Route path="/:subpage" component={PartialFooter} />
      </HashRouter>
    );
  }
}

export default App;
