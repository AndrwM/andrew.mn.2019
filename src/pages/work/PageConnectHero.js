import React, { Component } from "react";

import WithPage from "../../components/WithPage";
import SliderLarge from "../../components/SliderLarge";

import cover from '../../assets/images/projects/connect-hero/cover.png';
import slide1 from '../../assets/images/projects/connect-hero/slide1.png';
import slide2 from '../../assets/images/projects/connect-hero/slide2.png';
import slide3 from '../../assets/images/projects/connect-hero/slide3.png';
import slide4 from '../../assets/images/projects/connect-hero/slide4.png';
import slide5 from '../../assets/images/projects/connect-hero/slide5.png';

class PageNewline extends Component {
  componentDidMount() {
    console.log('WITH CASE');
    this.props.setAppState({
      headerContent: this.renderHeader(),
      headerBg: "#f2fce9"
    });
  }

  renderHeader() {
    return (
      <React.Fragment>
      <div className="u-border-dark-bottom u-margin-bottom u-padding-bottom">
        <div className="c-grid">
          <div className="c-grid__cell u-3/5">
            <h1 className="c-title c-title--xlarge">
              College Admissions Portal
              <span className="c-title__subtle">2018</span>
            </h1>
            <p className="c-paragraph c-paragraph--sans-medium">Full-Time Employed</p>
            <p className="c-paragraph">In 2015 I was contracted by TTI North America's in-house design agency, Torque Creative, to create an interactive marketing website to showcase a new line of all-electric tools. This project was particularly special to me because Torque gave me access to their in-house photography division. I had autonomy to art-direct the imagery of the products I needed to complete the project.</p>
          </div>
          <div className="c-grid__cell u-2/5">
            <div className="c-browser" style={{maxWidth: 700}}>
              <div className="c-browser__content"><img src={cover} /></div>
            </div>
          </div>
        </div>
      </div>
      <div className="c-grid">
        <div className="c-grid__cell u-1/5">
          <h2 className="c-title c-title--small">Type</h2>
          <p className="c-paragraph c-paragraph--sans-medium">Full-Time Employed</p>
        </div>
        <div className="c-grid__cell u-1/5">
          <h2 className="c-title c-title--small">In Partnership With</h2>
          <p className="c-paragraph c-paragraph--sans-medium">Team</p>
        </div>
        <div className="c-grid__cell u-1/5">
          <h2 className="c-title c-title--small">In Partnership With</h2>
          <p className="c-paragraph c-paragraph--sans-medium">Team</p>
        </div>
        <div className="c-grid__cell c-grid__cell--pull-right u-2/5">
          <h2 className="c-title c-title--small">In Association With&hellip;</h2>
          <p className="c-paragraph c-paragraph--sans-medium">Division Of Labor Product Agency</p>
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
            <h2 className="c-title c-title--small">The Brief</h2>
            <h2 className="c-paragraph c-paragraph--large">Building an online supplement to The Iron Yard's immersive classroom.</h2>
            <p className="c-paragraph">The original Newline Education Platform began as "The Iron Yard Online", an online supplement to The Iron Yard's immersive classroom. The Iron Yard was a high-intensity, immersive programming trade school with 15 locations across US. I worked for The Iron Yard from 2015 through 2017.</p>
          </div>
        </section>
        <SliderLarge
          background="#f2fce9"
          slides={[
            slide1,
            slide2,
            slide3,
            slide4,
            slide5,
        ]} />
        <section className="c-wrapper">
          <div className="c-container">
            <h2 className="c-title c-title--small">Special Thanks To&hellip;</h2>
            <p className="c-paragraph">In addition to the above, I also built custom interfaces for the Bootstrap-based administrative &amp; content-creation system used by course-writers, campus operations, and admissions. I led user interface design for the lightweight in-browser IDE, administrative course manager, student manager, and student-to-instructor messaging.</p>
            <p className="c-paragraph">It was a pleasure working with the Product team at The Iron Yard. During my time there we were able to bring a fun and interactive online classroom experience to over 10,000 students. Much love to everyone involved.</p>
          </div>
        </section>
      </React.Fragment>
    );
  }
}

export default WithPage(PageNewline);
