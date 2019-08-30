import React, { Component } from "react";

import WithPage from "../../components/WithPage";
import SliderLarge from "../../components/SliderLarge";

import imageNewline from '../../assets/images/projects/newline/v2-5.png';
import imageWhiteboard from '../../assets/images/projects/newline/whiteboard.jpg';

import slider1_1 from '../../assets/images/projects/newline/mock-v1-1.png';
import slider1_2 from '../../assets/images/projects/newline/mock-v1-2.png';
import slider1_3 from '../../assets/images/projects/newline/mock-v1-3.png';
import slider1_4 from '../../assets/images/projects/newline/mock-v1-4.png';

import imageStyleguide from '../../assets/images/projects/newline/components.png';

class PageNewline extends Component {
  componentDidMount() {
    this.props.setAppState({
      headerContent: this.renderHeader(),
      headerBg: "#eaeaea"
    });
  }

  renderHeader() {
    return (
      <React.Fragment>
        <div className="u-border-dark-bottom u-margin-bottom u-padding-bottom">
          <h1 className="c-title c-title--xlarge">
            Newline Education Platform
            <span className="c-title__subtle">2015 – 2017</span>
          </h1>
          <p className="c-paragraph c-paragraph--sans-medium">UI Design System, Front-End Engineering, RoR Development</p>
          <div className="c-grid">
            <div className="c-grid__cell u-3/5">
              <p className="c-paragraph">Newline is the course-work software of The Iron Yard. I on the product team to bring a fun and interactive online classroom experience to over 10,000 students with our custom CSS design system.
              </p>
              <p className="c-paragraph">From the ground-up we designed, built, and documented a CSS component system with over 50 elements. It allowed anyone on the team to quickly assemble a view. In addition to authoring the design system, I worked with the engineering team in building the front-end for an in-browser IDE and student messaging system.</p>
            </div>
            <div className="c-grid__cell u-2/5">
              <div className="c-browser" style={{maxWidth: 700}}>
                <div className="c-browser__content"><img src={imageNewline} /></div>
              </div>
            </div>
          </div>
        </div>
        <div className="c-grid">
          <div className="c-grid__cell u-1/5">
            <h2 className="c-title c-title--small">Role</h2>
            <p className="c-paragraph c-paragraph--sans-medium">Sr. Product Designer</p>
          </div>
          <div className="c-grid__cell u-1/5">
            <h2 className="c-title c-title--small">Project Length</h2>
            <p className="c-paragraph c-paragraph--sans-medium">2 Years</p>
          </div>
          <div className="c-grid__cell u-1/5">
            <h2 className="c-title c-title--small">In Association With&hellip;</h2>
            <p className="c-paragraph c-paragraph--sans-medium">The Iron Yard's Product Team</p>
          </div>
          <div className="c-grid__cell c-grid__cell--pull-right u-2/5">
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
            <h2 className="c-title c-title--small">The Brief</h2>
            <h3 className="c-paragraph c-paragraph--large">Building an online supplement to The Iron Yard's immersive classroom.</h3>
            <div className="c-grid">
              <div className="c-grid__cell u-3/5--lap">
                <p className="c-paragraph">The original Newline Education Platform began as "The Iron Yard Online", an online supplement to The Iron Yard's immersive classroom. The Iron Yard was a high-intensity, immersive programming trade school with 15 locations across US. I worked for The Iron Yard from 2015 through 2017. As a product designer, I shaped the user-flow and feel of the application as directed by the company leadership's vision.</p>
                <p className="c-paragraph">The goal of The Iron Yard Online was to provide a centralized store of all class materials. Having a single application and store of all class content allowed us to guarantee the same quality classroom experience to all 15 campuses. In addition, having a central store of all student information all in one application allowed the company to create quality assurance models and run analytics on current and previous classrooms. The data, used to determine the health of campuses and classrooms quarter-over-quarter, became invaluable to the company leadership through my time there.</p>
                <p className="c-paragraph">Fellow product designer, Jeremiah and I, along with direction from the company's CTO Mason Stewart white-boarded the initial concepts and iterated them into high-fidelity wireframes.</p>
              </div>
              <div className="c-grid__cell u-2/5--lap">
                <img src={imageWhiteboard} style={{maxWidth: "550px"}} />
              </div>
            </div>
          </div>
        </section>
        <SliderLarge slides={[
          slider1_1,
          slider1_2,
          slider1_3,
          slider1_4,
        ]} />
        <section className="c-wrapper">
          <div className="c-container">
            <h2 className="c-title c-title--small">The Iron Yard Online becomes Newline</h2>
            <h3 className="c-paragraph c-paragraph--large">The Iron Yard Online becomes Newline.</h3>
            <p className="c-paragraph">As the The Iron Yard matured and its offering of services expanded from exclusively on-site, immersive education to also a full range of professional training and online education services. As purveyors of the learning software to the company, naturally our team was tasked with retooling The Iron Yard Online to an independent learning platform venture backed by The Iron Yard.</p>
            <div className=" u-margin-top-large u-padding-top u-padding-top">
              <div className="c-grid c-grid--large">
                <div className="c-grid__cell u-3/5--lap">
                  <img src={imageStyleguide} />
                </div>
                <div className="c-grid__cell u-2/5--lap">
                  <p className="c-paragraph c-paragraph--medium">Newline was born. Our new brand allowed us to experiment with new ways of messaging and interacting with our students that we previously couldn't do under The Iron Yard's stable brand. In addition to a new youthful, energetics aesthetic we also rethought many key user flows based on user behavior that we had collected and observed.</p>
                  <p className="c-paragraph c-paragraph--medium">In addition we rethought our interface building process; rather than created full prototypes and disassembling into components that could be rebuilt back into the initial static prototypes we opted to build and style the components as we saw fit and crafted the system around key user interface components of the project.</p>
                </div>
              </div>
            </div>
          </div>
        </section>
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
