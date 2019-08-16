import React, { Component } from "react";
import { Link } from "react-router-dom";

import Reveal from "../components/Reveal";

class CaseStudyPreview extends Component {
  render() {
    return (
      <div className="c-wrapper">
        <div className="c-container">
          <div className="c-grid c-grid--large c-grid--reverse">
            <div className="c-grid__cell u-2/5 c-grid__cell--pull-right">
              <div className="c-browser">
                <div className="c-browser__content"><img src={this.props.image}/></div>
              </div>
            </div>
            <div className="c-grid__cell u-3/5">
              <Reveal>
                <h3 className="c-title c-title--medium u-margin-bottom-none">
                  {this.props.title}
                  <span className="c-title__subtle">{this.props.timePeriod}</span>
                </h3>
              </Reveal>
              <Reveal>
                <h4 className="c-title c-title--smallest u-margin-bottom-small">{this.props.type}</h4>
              </Reveal>
              <Reveal>
                {this.props.children}
              </Reveal>
              <Reveal>
                <Link to={this.props.url} className="c-button c-button--arrow-r">Read The Case Study</Link>
              </Reveal>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default CaseStudyPreview;
