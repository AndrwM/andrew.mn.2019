import React, { Component } from "react";
import { Link } from "react-router-dom";

import WithPage from "../components/WithPage";
import Reveal from '../components/Reveal';
import Navigation from "../components/Navigation";
import ExperienceDesign from "./partials/ExperienceDesign";
import ExperienceEngineering from "./partials/ExperienceEngineering";
import Brands from "./partials/Brands";

class PageAbout extends Component {
  componentDidMount() {
    this.props.setAppState({
      headerContent: this.renderHeader(),
      headerBg: "#f1f9fc"
    });
  }

  _greeting(){
    const date = new Date();
    const hour = date.getHours()
    if (hour > 19) { return "Good evening"   } else
    if (hour > 12) { return "Good afternoon" } else
    if (hour > 3)  { return "Good morning"   } else
    if (hour >= 0) { return "Good evening"   } else
    { return "Good Day" };
  }

  renderHeader() {
    return (
      <React.Fragment>
        <h1 className="c-title c-title--large" style={{textTransform: "capitalize"}}>
          {this._greeting()}
          &nbsp;
          <span className="u-subtler" style={{fontWeight: 100}}>—</span>
        </h1>
        <p className="c-paragraph c-paragraph--xlarge">
        My name is Andrew McIntee.
        <br/> I am a product designer &amp; web engineer
        <br/> specializing in design systems.
        </p>
        <div className="c-grid c-grid--large u-margin-top-large">
          <div className="c-grid__cell u-1/3--lap u-1/6--desk">
            <Navigation />
          </div>
          <div className="c-grid__cell u-2/3--lap u-5/6--desk">
            <h2 className="c-title c-title--small u-margin-top-small">Currently…</h2>
            <ul className="c-list c-list--large c-list--sparkle">
              <li className="c-list__item">Fully-remote worker based out of Atlanta &amp; Mexico City.</li>
              <li className="c-list__item">Taking time to study Spanish &amp; get dive certified in Jordan.</li>
              <li className="c-list__item">Just wrapped up a big project with a venture-backed software company.</li>
              {/* <li className="c-list__item">Interested in working together? <span className="u-subtler">&nbsp;&ndash;&nbsp;</span> <a href="mailto:studio@Andrew.mn" className="c-link">Studio@Andrew.mn</a></li> */}
            </ul>
          </div>
        </div>
      </React.Fragment>
    );
  }

  render() {
    return(
      <React.Fragment>
      <section className="c-wrapper c-wrapper--slimmest u-padding-vertical-large" id="about">
        <div className="c-container OVERRIDE-about-lockup-1">
          <Reveal>
            <h2 className="c-title c-title--small u-margin-top-small">About Me</h2>
            <p className="c-paragraph c-paragraph--large">
              I have over 8 years of industry experience and most recently lead design &amp; frontend engineering on a product team.
            </p>
          </Reveal>
          <Reveal>
            <p className="c-paragraph">
              My passion is in building, executing and nurturing design systems for software. I have also been a remote-worker for over 4 years.
            </p>
          </Reveal>
          <Reveal>
            <p className="c-paragraph">
              {/* Currently my focus is on design systems and the engineering powering user interfaces and I work with product teams and startups to create efficient and seamless software user experiences. In addition to design and frontend engineering, I also dive onto the server-level to build out modeling or functionality to support the interface needs. */}
              I’m fascinated by the engineering that powers user interfaces and love helping product teams and startups create seamless user experiences. I’m fully capable in design and frontend engineer, but I can also dive into the server-side to build out modeling or functionality related to interface needs.
            </p>
          </Reveal>
          <Reveal>
            <p className="c-paragraph">
              {/* Having jumped between both design &amp; frontend engineering,
              I am most effective sitting on engineering team as an engineer’s designer or on a design team as a designer’s engineer; a liaison between two core assets of a software development company. */}
              I can play many roles, but I’m most effective bridging the gap between engineering and design. I’m valuable both as a designer on an engineering team and as an engineer on a design team, both core assets of any software company.
            </p>
          </Reveal>
          <Reveal>
            <p className="c-paragraph">
              At the moment, I am based between the Atlanta and Mexico City while I focus my efforts towards studying Spanish.
            </p>
          </Reveal>
        </div>
        <div className="c-container">
          <Reveal>
            <div className="c-grid c-grid--large u-padding-top u-padding-bottom-small u-margin-vertical">
              <div className="c-grid__cell u-1/2--desk">
                <h2 className="c-title c-title--small u-margin-top-small">Design Experience</h2>
                <ExperienceDesign />
              </div>
              <div className="c-grid__cell u-1/2--desk">
                <h2 className="c-title c-title--small u-margin-top-small">Programming Experience</h2>
                <ExperienceEngineering />
              </div>
            </div>
          </Reveal>
        </div>
        <div className="c-container OVERRIDE-about-lockup-2">
          <Reveal>
            <h2 className="c-title c-title--small u-margin-top-small">Experience</h2>
            <p className="c-paragraph">
              {/* Most recently, I lead the creation and execution of design systems at Division Of Labor, a digital product development agency. There we partnered with alpha-stage startups to design and build their MVP products. */}
              Most recently, I led design, frontend and user experience at a venture backed startup called OffSite. OffSite was spun out of Division of Labor, a digital product development agency where I led creation and execution of design systems for a variety of software products.
            </p>
          </Reveal>
          <Reveal>
            <p className="c-paragraph">
              {/* Previous to this, I served as the co-founder and director of product design at Coindex Labs.I oversaw all user interface design, marketing visual design, and engineered prototypes of our crypotocurrency trading platform interface. */}
              Prior to this, I served as the co-founder and director of product design at Coindex Labs. I oversaw all user interface design, marketing visual design, and engineered prototypes of our crypotocurrency trading platform interface. We made it to the final round of selection in a recent Tech Stars New York cohort.
            </p>
          </Reveal>
          <Reveal>
            <p className="c-paragraph">
              From 2015-'17, I worked as a senior software designer at The Iron Yard (now sold) working on the LMS product team.
            </p>
          </Reveal>
          <Reveal>
            <p className="c-paragraph">
              {/* Prior to that, I ran a small UI design studio that designed user interfaces with product agencies &amp; startups and worked for international brands as a design engineer in a few big-name digital marketing agencies. */}
              Earlier in my career, I ran a small UI design studio that created user interfaces for product agencies & startups and worked for international brands as a design engineer in a few big-name digital marketing agencies.
            </p>
          </Reveal>
          <Reveal>
            <h2 className="c-title c-title--small u-margin-top-large">Moving Forward</h2>
            <p className="c-paragraph">
              {/* I am looking to join a medium-sized startup company. To continue nurturing an excellent software experiences, connecting: UI connecting, usability testing, engineering execution, design documentation, and company processes to create a culture of user experience excellence. In the interim, I am available for UI design or frontend engineering consulting engagements. */}
              I am looking to join a medium-sized startup company. I want to continue nurturing excellent software experiences for users, connecting: UI, usability testing, engineering execution, design documentation, and company processes to create a culture of user experience excellence. In the interim, I am available for UI design or frontend engineering consulting engagements.
            </p>
          </Reveal>
          <Reveal>
            <div className="u-padding-vertical-small u-padding-top u-margin-top u-border-top">
              <Navigation context="no-about-link" />
            </div>
          </Reveal>
          <Reveal>
            <p className="c-paragraph">
              Due to privacy restrictions, some of my work is not available publicly. If you would like to see engineering samples: <a href="mailto:studio@Andrew.mn" className="c-link">Studio@Andrew.mn</a>.
            </p>
          </Reveal>
          <Reveal>
            <p className="c-paragraph">
              Thanks for visiting!
            </p>
          </Reveal>
          <Reveal>
            <p className="c-paragraph c-paragraph--sans-medium OVERRIDE-signature">
              <span className="u-subtler">&mdash;</span>&nbsp; Andrew McIntee
            </p>
          </Reveal>
        </div>
      </section>
      <section className="c-wrapper c-wrapper--slimmest u-margin-bottom-large">
        <div className="c-container">
          <Reveal>
            <Brands />
          </Reveal>
        </div>
      </section>
      {/* <section className="c-wrapper c-wrapper--slimmest u-padding-vertical-large u-border-top">
        <div className="c-container">
          <p className="c-title--smallest u-margin-vertical-smallest">
              <span className="c-emoji c-emoji--in-margin">🎉</span>&nbsp;&nbsp;Have&nbsp;a&nbsp;great&nbsp;day. &mdash; <a href="mailto:Studio@Andrew.mn" className="c-link">Studio@Andrew.mn</a></p>
            <p className="c-paragraph--small u-margin-vertical-smallest">&nbsp; Copyright Andrew McIntee 2019.</p>
            <p className="c-paragraph--small u-margin-top-smallest">&nbsp; <span className="u-subtler u-margin-left-smallest">In respect of your privacy, this website does not use trackers or cookies :)</span></p>
        </div>
      </section> */}
      </React.Fragment>
    );
  }
}

export default WithPage(PageAbout);
