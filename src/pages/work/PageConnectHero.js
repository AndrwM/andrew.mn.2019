import React, { Component } from "react";

import WithPage from "../../components/WithPage";
import SliderLarge from "../../components/SliderLarge";

import slide1 from '../../assets/images/projects/connect-hero/slide1.png';
import slide2 from '../../assets/images/projects/connect-hero/slide2.png';
import slide3 from '../../assets/images/projects/connect-hero/slide3.png';
import slide4 from '../../assets/images/projects/connect-hero/slide4.png';
import slide5 from '../../assets/images/projects/connect-hero/slide5.png';

class PageNewline extends Component {
  componentDidMount() {
    this.props.setAppState({
      headerContent: this.renderHeader(),
      headerHeight: "60vh",
      headerBg: "#dee8f8"
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
            <h2 className="c-title c-title--small u-padding-bottom">Design Lead, Wireframes</h2>
            <p className="c-paragraph">A leading college admissions software platform on the west coast engaged us to design a new UI design system for their engineering team.</p>
          </div>
          <div className="c-grid__cell u-3/7">
            <div className="c-browser" style={{maxWidth: 700}}>
              <div className="c-browser__content"><img src={slide3} /></div>
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
            <h2 className="c-title c-title--large u-margin-bottom">Building an online supplement to The Iron Yard's immersive classroom.</h2>
            <p className="c-paragraph">The original Newline Education Platform began as "The Iron Yard Online", an online supplement to The Iron Yard's immersive classroom. The Iron Yard was a high-intensity, immersive programming trade school with 15 locations across US. I worked for The Iron Yard from 2015 through 2017.</p>
          </div>
        </section>
        <SliderLarge
          background="#e8e8e8"
          slides={[
          <React.Fragment>
            <h2 className="c-title c-title--medium u-margin-top-large">On-Brand Software Design System</h2>
            <p className="c-paragraph c-paragraph--sans c-paragraph--medium">Maintaining consistency with The Iron Yard's brand aesthetic was very important in building the version 1. The grey-oriented, responsible-feeling brand at this point, in early 2016, the company had over 3 years of equity invested.</p>
            <p className="c-paragraph c-paragraph--sans c-paragraph--medium">We began by designing prototypes of a few pages based on the wireframes that everyone on our team had agreed on. After a few prototypes of different pages, that categorically had different user goals, we felt that we were comfortable with the sub-brand we had created. From there we began breaking the layouts apart into elements that could all be designed individually and then reassembled. Our new design system.</p>
            <p className="c-paragraph c-paragraph--sans c-paragraph--medium">The pages to the right are several of the prototype pages that we developed in building the design system for The Iron Yard Online.</p>
          </React.Fragment>,
          <img src={slide1} />,
          <img src={slide2} />,
          <img src={slide3} />,
          <img src={slide4} />,
          <img src={slide5} />,
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
