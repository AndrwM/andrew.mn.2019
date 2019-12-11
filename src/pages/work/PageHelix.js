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
      headerHeight: "65vh",
      headerBg: "#fff0e6"
    });
  }

  renderHeader() {
    return (
      <React.Fragment>
        <div className="u-border-dark-bottom u-padding-bottom">
          <h1 className="c-title c-title--xlarge">
            College Admissions Portal
            <span className="c-title__subtle">2018</span>
          </h1>
          <p className="c-paragraph c-paragraph--sans-large">Design System</p>
        </div>
        <div className="c-grid c-grid--stretch u-margin-top-large u-margin-bottom-tiny">
          <div className="c-grid__cell">
            <h2 className="c-title c-title--small">In Association With</h2>
            <p className="c-paragraph c-paragraph--sans-medium">Division Of Labor Product Agency</p>
          </div>
          <div className="c-grid__cell">
            <h2 className="c-title c-title--small">Responsible For</h2>
            <p className="c-paragraph c-paragraph--sans-medium">Project Lead</p>
          </div>
          <div className="c-grid__cell">
            <h2 className="c-title c-title--small">Project Length</h2>
            <p className="c-paragraph c-paragraph--sans-medium">3 Months</p>
          </div>
          <div className="c-grid__cell">
            <h2 className="c-title c-title--small">I Delivered</h2>
            <p className="c-paragraph c-paragraph--sans-medium">UI Comps &amp; Design System Documentation For Engineering Dept.</p>
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
            <h2 className="c-title c-title--small">About The Project</h2>
            <h2 className="c-paragraph c-paragraph--large">A leading college admissions software company reached out to us to design and document the design system for the new version of their product.</h2>
            <p className="c-paragraph">While leading design at Division Of Labor, a product development agency, I was responsible for leading the charge in re-designing this whitelabel solution.</p>
            <p className="c-paragraph">The client's engineering team was building their app but was struggling to define the aesthetic and layout of their new mobile-first app. We worked alongside them to build design documentation that the engineering team could turn around and build.</p>
          </div>
        </section>
        <SliderLarge
          background="#fff0e6"
          slides={[
            slide1,
            slide2,
            slide3,
            slide4,
            slide5,
            slide6,
        ]} />
        <section className="c-wrapper">
          <div className="c-container">
            <h2 className="c-title c-title--small">The Design System Assembled</h2>
            <p className="c-paragraph">In addition to design system documentation we also provided them with high-resolution design mockups showing our reccomended layout and how this system could be white-labeled.</p>
            <img src={image1} className="u-padding-top" />
          </div>
        </section>
      </React.Fragment>
    );
  }
}

export default WithPage(PageNewline);
