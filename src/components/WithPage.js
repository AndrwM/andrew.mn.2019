import React, { Component } from "react";
import { Redirect } from "react-router-dom";

function WithPage(PageComponent) {
  return class extends Component {
    componentDidMount() {
      window.scrollTo(0, 0);
    }

    render() {
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
  };
}

export default WithPage;
