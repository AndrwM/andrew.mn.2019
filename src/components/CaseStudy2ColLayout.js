import React, { Component } from "react";

class PageCaseStudy2ColLayout extends Component {
  render() {
    return (
      <div className="u-border-bottom">
        <div className="c-container">
          <div className="c-grid c-grid--flush c-grid--stretch">
            {this.props.caseStudyPreviews.map((caseStudyComponent) => (
              <div className="c-grid__cell u-1/2">
                {caseStudyComponent}
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default PageCaseStudy2ColLayout;
