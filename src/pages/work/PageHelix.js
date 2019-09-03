import React, { Component } from "react";

import WithPage from "../../components/WithPage";
import SliderLarge from "../../components/SliderLarge";

import imageNewline from '../../assets/images/projects/newline/v2-5.png';
import imageCover from '../../assets/images/projects/helix/front.png';
import image1 from '../../assets/images/projects/helix/project1.png';

import slide1 from '../../assets/images/projects/helix/slide-input.png';
import slide2 from '../../assets/images/projects/helix/slide-navigation.png';
import slide3 from '../../assets/images/projects/helix/slide-compositions.png';
import slide4 from '../../assets/images/projects/helix/slide-type.png';
import slide5 from '../../assets/images/projects/helix/slide-base.png';
import slide6 from '../../assets/images/projects/helix/slide-alternates.png';

class PageNewline extends Component {
  componentDidMount() {
    this.props.setAppState({
      headerContent: this.renderHeader(),
      headerHeight: "60vh",
      headerBg: "#fffebc"
    });
  }

  renderHeader() {
    return (
      <React.Fragment>
        <div className="c-grid">
          <div className="c-grid__cell u-4/7">
            <h1 className="c-title c-title--xlarge u-margin-top">
              College Admissions Portal
              <span className="c-title__subtle">2018</span>
            </h1>
            <h2 className="c-title c-title--small u-padding-bottom">UI Design System Lead</h2>
            <p className="c-paragraph">A leading college admissions software platform on the west coast engaged us to design a new UI design system for their engineering team.</p>
          </div>
          <div className="c-grid__cell u-3/7">
            <div className="c-browser" style={{maxWidth: 700}}>
              <div className="c-browser__content"><img src={imageCover} /></div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }

  render() {
    return (
      <React.Fragment>
        <section className="c-wrapper u-padding-top-none">
          <div className="c-container">
            <h2 className="c-title c-title--small">About The Project</h2>
            <h2 className="c-paragraph c-paragraph--large">Building an online supplement to The Iron Yard's immersive classroom.</h2>
            <p className="c-paragraph">The original Newline Education Platform began as "The Iron Yard Online", an online supplement to The Iron Yard's immersive classroom. The Iron Yard was a high-intensity, immersive programming trade school with 15 locations across US. I worked for The Iron Yard from 2015 through 2017.</p>
            <img src={image1} />
          </div>
        </section>
        <SliderLarge
          background="#e8e8e8"
          slides={[
            slide1,
            slide2,
            slide3,
            slide4,
            slide5,
            slide6,
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
