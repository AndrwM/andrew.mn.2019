import React, { Component } from "react";

function WithPage(WrappedComponent) {
  return class extends Component {
    componentDidMount() {
      window.scrollTo(0, 0);
    }

    render() {
      return <WrappedComponent {...this.props} />;
    }
  };
}

export default WithPage;
