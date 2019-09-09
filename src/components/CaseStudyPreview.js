import React, { Component } from "react";
import { Link } from "react-router-dom";

import Reveal from "../components/Reveal";

class CaseStudyPreview extends Component {

  renderContent() {
    return(
      <React.Fragment>
        <h3 className="c-title c-title--medium">
          {this.props.title}
          <span className="c-title__subtle">{this.props.timePeriod}</span>
        </h3>
        {/* <h4 className="c-title c-title--smallest u-margin-bottom-small">
          {this.props.role}
          <span className="u-subtler" children="&#160;&#160;/&#160;&#160;" />
          <span className="u-subtle" children={`${this.props.type}`} />
        </h4> */}
        {this.props.description && this.props.description.map((paragraph, index) => (
          <p key={index} className="c-paragraph c-paragraph--medium" dangerouslySetInnerHTML={{__html: paragraph}} />
        ))}
        <div className="u-border-bottom u-border-top u-margin-vertical">
          <div className="c-grid c-grid--small">
            <div className="c-grid__cell u-1/3 u-padding-top-small u-padding-bottom-tiny">
              <h4 className="c-title c-title--smallest u-margin-none">
                Role
              </h4>
              <p className="c-paragraph c-paragraph--sans-small">
                {this.props.role}
              </p>
            </div>
            <div className="c-grid__cell u-2/3 u-padding-top-small u-padding-bottom-tiny u-border-left">
              <h4 className="c-title c-title--smallest u-margin-none">
                I Delivered
              </h4>
              <p className="c-paragraph c-paragraph--sans-small">
                {this.props.type}
              </p>
            </div>
          </div>
        </div>
        {(this.props.url || this.props.cta) &&
          <div className="u-padding-bottom">
            {this.props.url ?
              <Link to={this.props.url} className="c-button c-button--arrow-r">{this.props.cta || "Read The Case Study"}</Link> :
              <p className="c-paragraph c-paragraph--sans-medium">{this.props.cta}</p>
            }
          </div>
        }
      </React.Fragment>
    );
  }

  renderDetail() {
    return(
      <React.Fragment>
        <div className="c-grid">
          <div className="c-grid__cell u-1/2">
            <h4 className="c-title c-title--small">
              Role
            </h4>
            <p className="c-paragraph c-paragraph--sans-medium">
              {this.props.role}
            </p>
          </div>
          <div className="c-grid__cell u-1/2">
            <h4 className="c-title c-title--small">
              Technology
            </h4>
            <p className="c-paragraph c-paragraph--sans-medium">
              {this.props.type}
            </p>
          </div>
        </div>
      </React.Fragment>
    );
  }

  renderPreview() {
    if (this.props.context && this.props.context.includes("no-browser") ) {
      return ( <img src={this.props.image} className="u-margin-top-auto" style={{borderRadius: "4px 4px 0 0" }} /> );
    } else {
    return (
      <div className="u-margin-top-auto" style={{overflow: "hidden", margin: "-20px -20px 0 -20px", padding: "20px 20px 0 20px"}}>
        <div className="c-browser">
          <div className="c-browser__content"><img src={this.props.image}/></div>
        </div>
      </div>
    );
    }
  }

  render() {
    if ( this.props.context && this.props.context.includes("2col") ) {
      return (
        <React.Fragment>
          <Reveal>
            {this.renderContent()}
          </Reveal>
          {this.props.backgroundStyle && <div style={this.props.backgroundStyle} />}
          {this.renderPreview()}
        </React.Fragment>
      );
    } else {
      return (
        <div className="c-wrapper u-padding-bottom-none u-border-bottom">
          <div className="c-container">
            <Reveal>
              <div className="c-grid c-grid--flush c-grid--bottom">
                <div className="c-grid__cell u-6/12--lap u-padding-right-large">
                  {this.renderContent()}
                </div>
                <div className="c-grid__cell u-6/12--lap c-grid__cell--pull-right u-padding-top" style={{position: "relative"}}>
                  {this.props.backgroundStyle && <div style={this.props.backgroundStyle} />}
                  {this.renderPreview()}
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
