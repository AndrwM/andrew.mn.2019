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
          <p key={index} className="c-paragraph c-paragraph--medium" dangerouslySetInnerHTML={{__html: paragraph}} />
        ))}
      </React.Fragment>
    );
  }

  renderPreview(){
    if (this.props.context && this.props.context.includes("no-browser") ) {
      return ( <img src={this.props.image} className="u-margin-top-large" style={{borderRadius: "4px 4px 0 0" }} /> );
    } else {
    return (
      <div className="c-browser u-margin-top-large">
        <div className="c-browser__content"><img src={this.props.image}/></div>
      </div>
    );
    }
  }

  render() {
    if ( this.props.context && this.props.context.includes("2col") ) {
      return (
        <React.Fragment>
          <div className="u-padding-bottom">
            <Reveal>
              {this.renderContent()}
              {this.props.url && <Link to={this.props.url} className="c-button c-button--arrow-r">Read The Case Study</Link>}
            </Reveal>
          </div>
          <div className="u-margin-top-auto" style={{overflow: "hidden", margin: "0 -20px", padding: "0 20px"}}>
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
        <div className="c-wrapper c-wrapper--slimmest u-padding-bottom-none u-border-bottom" style={{overflow: "hidden"}}>
          <div className="c-container">
            <Reveal>
              <div className="c-grid c-grid--flush c-grid--middle">
                <div className="c-grid__cell u-6/12--lap u-padding-vertical-large u-padding-right-small">
                  {this.renderContent()}
                  {this.props.url && <Link to={this.props.url} className="c-button c-button--arrow-r">Read The Case Study</Link>}
                </div>
                <div className="c-grid__cell u-6/12--lap c-grid__cell--pull-right">
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
