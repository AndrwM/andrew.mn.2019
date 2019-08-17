import React, { Component } from "react";

class PageCaseStudy2ColLayout extends Component {
  render() {
    return (
      <div className="u-border-bottom">
        <div className="c-container">
          <div className="c-grid c-grid--flush c-grid--stretch">
            {this.props.caseStudyPreviews.map((caseStudyComponent, index) => (
              <div className={`c-grid__cell u-1/2 ${index == 1 ? "u-border-left u-padding-left-large" : " u-padding-right-large"}`}
                style={{display: "flex", flexDirection: "column", paddingTop: "10vh"}}>
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
