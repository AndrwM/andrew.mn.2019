import React, { Component } from "react";
import { Link } from "react-router-dom";

import Reveal from "../components/Reveal";

class CaseStudyPreview extends Component {

  renderContent() {
    return(
      <React.Fragment>
        <h3 className="c-title c-title--medium u-margin-bottom-none">
          {this.props.title}
          <span className="c-title__subtle">{this.props.timePeriod}</span>
        </h3>
        <h4 className="c-title c-title--smallest u-margin-bottom-small">{this.props.type}</h4>
        {this.props.description && this.props.description.map((paragraph, index) => (
          <p key={index} className="c-paragraph c-paragraph--sans c-paragraph--medium" dangerouslySetInnerHTML={{__html: paragraph}} />
        ))}
      </React.Fragment>
    );
  }

  render() {
    if (this.props.context === "2col") {
      return (
        <React.Fragment>
          <div className="u-padding-bottom">
            <Reveal>
              {this.renderContent()}
              {this.props.url && <Link to={this.props.url} className="c-button c-button--small c-button--arrow-r">Read The Case Study</Link>}
            </Reveal>
          </div>
          <div className="u-margin-top-auto">
            <Reveal>
              <div className="c-browser" style={{maxHeight: "360px"}}>
                <div className="c-browser__content"><img src={this.props.image}/></div>
              </div>
            </Reveal>
          </div>
        </React.Fragment>
      );
    } else {
      return (
        <div className="c-wrapper c-wrapper--flush u-border-bottom" style={{overflow: "hidden"}}>
          <div className="c-container">
            <Reveal>
              <div className="c-grid c-grid--large c-grid--bottom">
                <div className="c-grid__cell u-6/12 u-padding-vertical-large">
                  {this.renderContent()}
                  {this.props.url && <Link to={this.props.url} className="c-button c-button--arrow-r">Read The Case Study</Link>}
                </div>
                <div className="c-grid__cell u-6/12 c-grid__cell--pull-right">
                  <div className="c-browser u-margin-top-large">
                    <div className="c-browser__content"><img src={this.props.image}/></div>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      );
    }
  }
}

export default CaseStudyPreview;
