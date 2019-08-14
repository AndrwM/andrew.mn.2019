import React, { Component } from "react";

import CaseStudyPreview from "../components/CaseStudyPreview";

class PageWorkIndex extends Component {
  componentDidMount() {
    this.props.setAppState({
      headerContent: this.renderHeader()
    });
  }

  renderHeader() {
    return (
      <React.Fragment>
        <h1 className="c-title c-title--large">
          Case Studies
        </h1>
        <p className="c-paragraph">
          I have had the privilege of working with brands such as The Home Depot, U By Kotex, The Outdoor Channel, and others. For more information on my experience and skillset check out <a className="c-link" href="/about/resume/#🚀">my resumé</a>.
        </p>
      </React.Fragment>
    );
  }

  render() {
    return (
      <React.Fragment>
        <CaseStudyPreview />
        <CaseStudyPreview />
        <CaseStudyPreview />
        <CaseStudyPreview />
        <CaseStudyPreview />
      </React.Fragment>
    );
  }
}

export default PageWorkIndex;
