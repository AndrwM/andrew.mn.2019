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
        <h4 className="c-title c-title--smallest u-margin-bottom-small">
          {this.props.role}
          <span className="u-subtler" children="&#160;&#160;/&#160;&#160;" />
          <span className="u-subtle" children={`${this.props.type}`} />
        </h4>
        {this.props.description && this.props.description.map((paragraph, index) => (
          <p key={index} className="c-paragraph c-paragraph--medium" dangerouslySetInnerHTML={{__html: paragraph}} />
        ))}
      </React.Fragment>
    );
  }

  renderPreview() {
    if (this.props.context && this.props.context.includes("no-browser") ) {
      return ( <img src={this.props.image} className="u-margin-top-large" style={{borderRadius: "4px 4px 0 0" }} /> );
    } else {
    return (
      <div className="u-margin-top" style={{overflow: "hidden", margin: "-20px -20px 0 -20px", padding: "20px 20px 0 20px"}}>
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
            {this.props.url && <Link to={this.props.url} className="c-button c-button--arrow-r">Read The Case Study</Link>}
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
                <div className="c-grid__cell u-6/12--lap u-padding-bottom-large u-padding-right-large">
                  {this.renderContent()}
                  {this.props.url ?
                    <Link to={this.props.url} className="c-button c-button--arrow-r">{this.props.cta || "Read The Case Study"}</Link> :
                   <p className="c-paragraph c-paragraph--sans-medium u-margin-top">{this.props.cta}</p>
                  }
                </div>
                <div className="c-grid__cell u-6/12--lap c-grid__cell--pull-right" style={{position: "relative"}}>
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
