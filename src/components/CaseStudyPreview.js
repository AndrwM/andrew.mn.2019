import React, { Component } from "react";
import { Link } from "react-router-dom";

class CaseStudyPreview extends Component {
  render() {
    return (
      <section className="c-wrapper">
        <div className="c-container u-animate-in">
          <div className="c-grid c-grid--rev">
            <div className="c-grid__cell 4/7--desk">
              <div className="c-browser">
                <div className="c-browser__content"><img src={this.props.image}/></div>
              </div>
            </div>
            <div className="c-grid__cell 3/7--desk">
              <h3 className="c-title c-title--medium u-margin-bottom-none">
                {this.props.title}
                <span className="c-title__subtle">{this.props.timePeriod}</span>
              </h3>
              <h4 className="c-title c-title--smallest u-margin-bottom-small">{this.props.type}</h4>
              {this.props.children}
              <Link to={this.props.url} className="c-button c-button--arrow-r">Read The Case Study</Link>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default CaseStudyPreview;
