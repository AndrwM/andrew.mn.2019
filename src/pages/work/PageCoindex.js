import React, { Component } from "react";

import WithPage from "../../components/WithPage";
import SliderLarge from "../../components/SliderLarge";

import slide1 from '../../assets/images/projects/coindex/1.png';
import slide2 from '../../assets/images/projects/coindex/2.png';
import slide3 from '../../assets/images/projects/coindex/4.png';

class PageCoindex extends Component {
  componentDidMount() {
    this.props.setAppState({
      headerContent: this.renderHeader(),
      headerHeight: "60vh",
      headerBg: "#caffec"
    });
  }

  renderHeader() {
    return (
      <React.Fragment>
        <div className="u-border-dark-bottom u-padding-bottom">
          <h1 className="c-title c-title--xlarge">
            Coindex Blockchain Trading Platform
            <span className="c-title__subtle">2017 – 2018</span>
          </h1>
          <p className="c-paragraph c-paragraph--sans-large">Cofounder, Director Of Product Design</p>
        </div>
        <div className="c-grid c-grid--stretch u-margin-top-large u-margin-bottom-tiny">
          <div className="c-grid__cell">
            <h2 className="c-title c-title--small">In Association With</h2>
            <p className="c-paragraph c-paragraph--sans-medium">The Iron Yard Product Team</p>
          </div>
          <div className="c-grid__cell">
            <h2 className="c-title c-title--small">Responsible For</h2>
            <p className="c-paragraph c-paragraph--sans-medium">UI Design, Prototyping, Design System Engineering</p>
          </div>
          <div className="c-grid__cell">
            <h2 className="c-title c-title--small">Project Length</h2>
            <p className="c-paragraph c-paragraph--sans-medium">1 Year</p>
          </div>
          <div className="c-grid__cell">
            <h2 className="c-title c-title--small">I Delivered</h2>
            <p className="c-paragraph c-paragraph--sans-medium">User Research, UI Comps, Design System, JS &amp; Ruby code.</p>
          </div>
        </div>
      </React.Fragment>
    );
  }

  render() {
    return (
      <React.Fragment>
        <section className="c-wrapper">
          <div className="c-container">
            <h2 className="c-title c-title--small">Building an online supplement to The Iron Yard's immersive classroom.</h2>
            <p className="c-paragraph c-paragraph--large">The original Newline Education Platform began as "The Iron Yard Online", an online supplement to The Iron Yard's immersive classroom. The Iron Yard was a high-intensity.</p>
            <p className="c-paragraph c-paragraph">The original Newline Education Platform began as "The Iron Yard Online", an online supplement to The Iron Yard's immersive classroom. The Iron Yard was a high-intensity, immersive programming trade school with 15 locations across US. I worked for The Iron Yard from 2015 through 2017.</p>
          </div>
        </section>
        <SliderLarge
          background="#caffec"
          slides={[
            slide1,
            slide2,
            slide3,
          ]
        } />
        <section className="c-wrapper c-wrapper--light-blue">
          <div className="c-container">
            <h2 className="c-title c-title--small">Learn To Code, Change Your Career</h2>
            <p className="c-paragraph">In addition to the above, I also built custom interfaces for the Bootstrap-based administrative &amp; content-creation system used by course-writers, campus operations, and admissions. I led user interface design for the lightweight in-browser IDE, administrative course manager, student manager, and student-to-instructor messaging.</p>
            <p className="c-paragraph">It was a pleasure working with the Product team at The Iron Yard. During my time there we were able to bring a fun and interactive online classroom experience to over 10,000 students. Much love to everyone involved.</p><a href="http://newline.theironyard.com" target="_blank" className="c-button c-button--arrow-remote">Newline Lives On Here (Invite-Only)</a>
          </div>
        </section>
      </React.Fragment>
    );
  }
}

export default WithPage(PageCoindex);
