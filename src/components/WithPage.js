import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import ReactGA from "react-ga";

function WithPage(PageComponent) {
  return class extends Component {
    constructor(props) {
      super(props);
      ReactGA.initialize("UA-147547366-1");
    }

    componentDidMount() {
      window.scrollTo(0, 0);
      ReactGA.pageview(window.location.pathname + window.location.hash);
    }

    renderContent() {
      if (this.props.authorized) {
        return(
          <div className="u-animate-in">
            <PageComponent
              {...this.props}
            />
          </div>
        );
      } else {
        alert("Hi there! 👋 This page is coming soon, thanks for visiting!");
        return <Redirect to="/"/>
      }
    }

    render() {
      return this.renderContent();
    }
  }
}

export default WithPage;
