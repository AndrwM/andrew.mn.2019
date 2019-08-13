import React, { Component } from "react";

import CaseStudyPreview from "../components/CaseStudyPreview";

class PageWorkIndex extends Component {
  render() {
    return (
      <React.Fragment>
        <header className="c-wrapper c-wrapper--header c-wrapper--masked c-wrapper--light-purple u-margin-bottom">
          <div className="c-container u-animate-in">
            <h1 className="c-title c-title--large">
              Case Studies
            </h1>
            <p className="c-paragraph">I have had the privilege of working with brands such as The Home Depot, U By Kotex, The Outdoor Channel, and others. For more information on my experience and skillset check out <a className="c-link" href="/about/resume/#🚀">my resumé</a>.</p>
          </div>
        </header>
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
