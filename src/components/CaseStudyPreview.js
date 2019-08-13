import React, { Component } from "react";
import { Link } from "react-router-dom";

class CaseStudyPreview extends Component {
  render() {
    return (
      <section className="c-wrapper c-wrapper">
        <div className="c-container u-animate-in">
          <div className="c-grid c-grid--rev">
            <div className="c-grid__cell 4/7--desk">
              <div className="c-browser">
                <div className="c-browser__content"><img src="/assets/images/projects/newline/v2-5.png"/></div>
              </div>
            </div>
            <div className="c-grid__cell 3/7--desk">
              <h3 className="c-title c-title--medium u-margin-bottom-none">Newline Education Platform <span className="c-title__subtle">2015 – 2017</span></h3>
              <h4 className="c-title c-title--smallest u-margin-bottom-small">UI Design System, Front-End Engineering, RoR Development</h4>
              <p className="c-paragraph c-paragraph--sans c-paragraph--medium">Newline is the course-work software of The Iron Yard. I worked with fellow designer <a href="https://dribbble.com/jeremiah" className="c-link" target="_blank">Jeremiah</a> to bring a fun and interactive online classroom experience to over 10,000 students with our custom CSS design system.</p>
              <p className="c-paragraph c-paragraph--sans c-paragraph--medium">From the ground-up we designed, built, and documented a CSS component system with over 50 elements. It allowed anyone on the team to quickly assemble a view. In addition to authoring the design system, I worked with the engineering team in building the front-end for an in-browser IDE and student messaging system.</p><Link to="/case-studies/newline" className="c-button c-button--arrow-r">Read The Case Study</Link>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default CaseStudyPreview;
