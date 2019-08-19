import React, { Component } from "react";

import WithPage from "../../components/WithPage";
import SliderLarge from "../../components/SliderLarge";

import imageNewline from '../../assets/images/projects/newline/v2-5.png';

class PageNewline extends Component {
  componentDidMount() {
    this.props.setAppState({
      headerContent: this.renderHeader(),
      headerHeight: "60vh",
      headerBg: "#eaeaea"
    });
  }

  renderHeader() {
    return (
      <React.Fragment>
        <h1 className="c-title c-title--xlarge">
          Newline Education Platform
          <span className="c-title__subtle">2015 – 2017</span>
        </h1>
        <h2 className="c-title c-title--small u-padding-bottom">UI Design System, Front-End Engineering, RoR Development</h2>
        <div className="c-browser">
          <div className="c-browser__content"><img src={imageNewline} /></div>
        </div>
      </React.Fragment>
    );
  }

  render() {
    return (
      <React.Fragment>
        <section className="c-wrapper">
          <div className="c-container">
            <h2 className="c-title c-title--large u-margin-bottom">Building an online supplement to The Iron Yard's immersive classroom.</h2>
            <div className="c-grid">
              <div className="c-grid__cell 1/2--desk">
                <p className="c-paragraph c-paragraph--large">The original Newline Education Platform began as "The Iron Yard Online", an online supplement to The Iron Yard's immersive classroom. The Iron Yard was a high-intensity, immersive programming trade school with 15 locations across US. I worked for The Iron Yard from 2015 through 2017. As a product designer, I shaped the user-flow and feel of the application as directed by the company leadership's vision.</p>
                <p className="c-paragraph">The goal of The Iron Yard Online was to provide a centralized store of all class materials. Having a single application and store of all class content allowed us to guarantee the same quality classroom experience to all 15 campuses. In addition, having a central store of all student information all in one application allowed the company to create quality assurance models and run analytics on current and previous classrooms. The data, used to determine the health of campuses and classrooms quarter-over-quarter, became invaluable to the company leadership through my time there.</p>
                <p className="c-paragraph">Fellow product designer, <a href="https://dribbble.com/jeremiah" className="c-link" target="_blank">Jeremiah</a> and I, along with direction from the company's CTO Mason Stewart white-boarded the initial concepts and iterated them into high-fidelity wireframes.</p>
              </div>
              <div className="c-grid__cell 1/2--desk"><img src="/assets/images/projects/newline/whiteboard.jpg" /></div>
            </div>
          </div>
        </section>
        <SliderLarge slides={[
          <React.Fragment>
            <h2 className="c-title c-title--medium u-margin-top-large">On-Brand Software Design System</h2>
            <p className="c-paragraph c-paragraph--sans c-paragraph--medium">Maintaining consistency with The Iron Yard's brand aesthetic was very important in building the version 1. The grey-oriented, responsible-feeling brand at this point, in early 2016, the company had over 3 years of equity invested.</p>
            <p className="c-paragraph c-paragraph--sans c-paragraph--medium">We began by designing prototypes of a few pages based on the wireframes that everyone on our team had agreed on. After a few prototypes of different pages, that categorically had different user goals, we felt that we were comfortable with the sub-brand we had created. From there we began breaking the layouts apart into elements that could all be designed individually and then reassembled. Our new design system.</p>
            <p className="c-paragraph c-paragraph--sans c-paragraph--medium">The pages to the right are several of the prototype pages that we developed in building the design system for The Iron Yard Online.</p>
          </React.Fragment>,
          <img src={imageNewline} />,
          <img src={imageNewline} />,
          <img src={imageNewline} />
        ]} />
        <section className="c-wrapper c-wrapper--light-blue">
          <div className="c-container">
            <h2 className="c-title c-title--large">Learn To Code, Change Your Career</h2>
            <p className="c-paragraph">In addition to the above, I also built custom interfaces for the Bootstrap-based administrative &amp; content-creation system used by course-writers, campus operations, and admissions. I led user interface design for the lightweight in-browser IDE, administrative course manager, student manager, and student-to-instructor messaging.</p>
            <p className="c-paragraph">It was a pleasure working with the Product team at The Iron Yard. During my time there we were able to bring a fun and interactive online classroom experience to over 10,000 students. Much love to everyone involved.</p><a href="http://newline.theironyard.com" target="_blank" className="c-button c-button--arrow-remote">Newline Lives On Here (Invite-Only)</a>
          </div>
        </section>
      </React.Fragment>
    );
  }
}

export default WithPage(PageNewline);
