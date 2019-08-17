import React, { Component } from "react";
import { Link } from "react-router-dom";

import Reveal from "../components/Reveal";

class CaseStudyPreview extends Component {

  renderDescription() {
    return(
      <div className="u-padding-horizontal-large">
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
          <Link to={this.props.url} className="c-button c-button--small c-button--arrow-r u-margin-bottom">Read The Case Study</Link>
        </Reveal>
      </div>
    );
  }

  render() {
    if (this.props.small) {
      return (
        <div style={{display: "flex", flexDirection: "column"}} className="u-padding-top-large">
          {this.renderDescription()}
          <div className="u-margin-top-auto u-padding-horizontal-large" style={{overflowY: "hidden"}}>
            <div className="c-browser" style={{maxHeight: "190px"}}>
              <div className="c-browser__content"><img src={this.props.image}/></div>
            </div>
          </div>
        </div>
      );
    } else {
      return (
        <div className="u-border-bottom" style={{overflow: "hidden"}}>
          <div className="c-container">
            <div className="c-grid c-grid--large c-grid--bottom">
              <div className="c-grid__cell u-6/12 u-padding-vertical-large">
                {this.renderDescription()}
              </div>
              <div className="c-grid__cell u-6/12 c-grid__cell--pull-right">
                <div className="c-browser u-margin-top-large">
                  <div className="c-browser__content"><img src={this.props.image}/></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    }
  }
}

export default CaseStudyPreview;
