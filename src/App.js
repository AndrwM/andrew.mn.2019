import React, { Component } from "react";
import { HashRouter, Switch, Route } from "react-router-dom";
import Routes from "./Routes";

// --- Partials
import Footer from "./pages/partials/Footer";

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
      authorized: true,

      // Header Settings
      headerContent: null,
      headerHeight: null,
      headerKey: 0,
      headerBg: "#f1f9fc",
    };


    this.setAppState = this.setAppState.bind(this);
    this.refHeader = React.createRef();
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    // When New Header Content Is Rendered:
    // - Force React to repaint header with a new `key` to trigger css animation
    // - Set header bg height dynamically if a new height has not been provided
    if (prevState.headerContent !== this.state.headerContent){
      this.setState({headerKey: this.state.headerKey + 1});

      if (prevState.headerHeight === this.state.headerHeight){
        this.setState({headerHeight: this.refHeader.current.clientHeight});
      }
    }
  }

  setAppState(newState){
    this.setState(newState);
  }

  renderHeader(){
    return(
      <header className="c-header" ref={this.refHeader}>
        <div className="c-header__background" style={{height: this.state.headerHeight, backgroundColor: this.state.headerBg}} />
        <div className="c-header__content" key={this.state.headerKey} children={this.state.headerContent} />
      </header>
    );
  }

  renderPage(){
    return Routes.map(({ path, PageComponent, isPublic }) => (
      <Route exact key={path} path={path} render={() =>
        <PageComponent setAppState={this.setAppState} authorized={this.state.authorized ? true : isPublic} />
      }/>
    ))
  }

  render() {
    return (
      <HashRouter>
        <Route path="/:subpage" component={Breadcrumb} />
        {this.renderHeader()}
        {this.renderPage()}
        <Route path="/:subpage" component={Footer} />
      </HashRouter>
    );
  }
}

export default App;
