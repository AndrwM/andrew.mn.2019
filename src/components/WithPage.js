import React, { Component } from "react";
import { Redirect } from "react-router-dom";

function WithPage(PageComponent) {
  return class extends Component {
    componentDidMount() {
      window.scrollTo(0, 0);
    }

    renderContent() {
      if (this.props.authorized) {
        return(
          <PageComponent
            {...this.props}
          />
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
