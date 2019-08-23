import React, { Component } from "react";

class PageCaseStudy2ColLayout extends Component {
  renderItemTemplate(caseStudyComponent, index) {
    let isFirst = (index === 0);
    return (
      <div className={`c-grid__cell u-1/2 ${isFirst ? "" : "u-border-left"}`}
        style={{display: "flex", flexDirection: "column", padding: isFirst ? "10vh 6vw 0 0" : "10vh 0 0 6vw"}}>
        {caseStudyComponent}
      </div>
    )
  }

  render() {
    return (
      <div className="c-wrapper c-wrapper--flush u-border-bottom">
        <div className="c-container">
          <div className="c-grid c-grid--flush c-grid--stretch">
            {this.props.caseStudyPreviews.map((caseStudyComponent, index) => this.renderItemTemplate(caseStudyComponent, index))}
          </div>
        </div>
      </div>
    );
  }
}

export default PageCaseStudy2ColLayout;
