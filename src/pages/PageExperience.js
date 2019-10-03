import React, { Component } from "react";
import { HashLink } from "react-router-hash-link";

import WithPage from "../components/WithPage";
import Reveal from "../components/Reveal";

class PageExperience extends Component {
  componentDidMount() {
    this.props.setAppState({
      headerContent: this.renderHeader(),
      headerBg: "#f0fef6"
    });
  }

  renderHeader() {
    return (
      <React.Fragment />
    );
  }

  render() {
    return (
      <React.Fragment>
        <section className="c-wrapper u-padding-bottom">
          <div className="c-container">
            <h2 className="c-title c-title--small">Tooling Experience</h2>
            <p className="c-paragraph c-paragraph--large">Iʼm proud to be a generalist with a laser focus on user experience and frontend engineering excellence.</p>
            <p className="c-paragraph">While not completely exhaustive, I hope the list below can shed light on the many tools, languages, frameworks, libraries that I have worked with over the years.</p>
          </div>
            <p className="c-paragraph">I have worked within and adacent to many different organization styles. From running my own UI design agency, horizontal/self-managed, all the way to multi-tier managerial agencies. Within each of these organizations there have been different ways of reporting, hand-offs, and planning.</p>
        </section>
        <section className="c-wrapper u-padding-top-small u-border-top">
          <div className="c-container">
            <div className="u-border-bottom u-margin-bottom">
              <ul className="c-list c-list--large c-list--horizontal">
                <li className="c-list__item c-list__item--exp-1">Hobby Experience</li>
                <li className="c-list__item c-list__item--exp-2">Limited Production</li>
                <li className="c-list__item c-list__item--exp-3">Experienced Production</li>
                <li className="c-list__item c-list__item--exp-4">Expert Experience</li>
              </ul>
            </div>
            <div className="c-grid">
              <div className="c-grid__cell u-1/4--lap">
                <h2 className="c-title c-title--smallest u-border-bottom u-padding-vertical-tiny">Product Design</h2>
                <ul className="c-list c-list--measure">
                  <li className="c-list__item c-list__item--exp-4">Wireframing</li>
                  <li className="c-list__item c-list__item--exp-4">Design System Design &amp; Documentation</li>
                  <li className="c-list__item c-list__item--exp-4">Design System Development</li>
                  <li className="c-list__item c-list__item--exp-3">Project Planning / Management</li>
                  <li className="c-list__item c-list__item--exp-3">User Support</li>
                  <li className="c-list__item c-list__item--exp-3">A/B Testing</li>
                  <li className="c-list__item c-list__item--exp-3">Accessibility<br/> (screen reader, color blindness, dyslexia&hellip;)</li>
                </ul>
                <h2 className="c-title c-title--smallest u-border-bottom u-padding-vertical-tiny">Visual Design Tooling</h2>
                <ul className="c-list c-list--measure">
                  <li className="c-list__item c-list__item--exp-4">Photoshop</li>
                  <li className="c-list__item c-list__item--exp-4">Sketch</li>
                  <li className="c-list__item c-list__item--exp-2">Illustrator</li>
                  <li className="c-list__item c-list__item--exp-4">Project Planning</li>
                </ul>
                <h2 className="c-title c-title--smallest u-border-bottom u-padding-vertical-tiny">Prototyping &amp; Handoff</h2>
                <ul className="c-list c-list--measure">
                  <li className="c-list__item c-list__item--exp-4">Invision App</li>
                  <li className="c-list__item c-list__item--exp-3">Zeplin</li>
                  <li className="c-list__item c-list__item--exp-2">Aha!</li>
                  <li className="c-list__item c-list__item--exp-2">Asana</li>
                  <li className="c-list__item c-list__item--exp-2">Asana</li>
                </ul>
                <h2 className="c-title c-title--smallest u-border-bottom u-padding-vertical-tiny">Support</h2>
                <ul className="c-list c-list--measure">
                  <li className="c-list__item c-list__item--exp-4">Intercom</li>
                  <li className="c-list__item c-list__item--exp-4">Helpscout</li>
                </ul>
                <h2 className="c-title c-title--smallest u-border-bottom u-padding-vertical-tiny">Design Misc.</h2>
                <ul className="c-list c-list--measure">
                  <li className="c-list__item c-list__item--exp-2">Branding &amp; Logo Design</li>
                  <li className="c-list__item c-list__item--exp-1">Photography</li>
                </ul>
              </div>
              <div className="c-grid__cell u-1/4--lap">
                <h2 className="c-title c-title--smallest u-border-bottom u-padding-vertical-tiny">Markup Flavors</h2>
                <ul className="c-list">
                  <li className="c-list__item c-list__item--exp-4">HTML</li>
                  <li className="c-list__item c-list__item--exp-4">Jade</li>
                  <li className="c-list__item c-list__item--exp-4">HAML</li>
                  <li className="c-list__item c-list__item--exp-4">JSX</li>
                  <li className="c-list__item c-list__item--exp-2">Mustache</li>
                </ul>
                <h2 className="c-title c-title--smallest u-border-bottom u-padding-vertical-tiny">Frontend Frameworks &amp; Common Libraries</h2>
                <ul className="c-list">
                  <li className="c-list__item c-list__item--exp-4">Backbone</li>
                  <li className="c-list__item c-list__item--exp-3">React</li>
                  <li className="c-list__item c-list__item--exp-2">Angular</li>
                  <li className="c-list__item c-list__item--exp-2">Redux</li>
                  <li className="c-list__item c-list__item--exp-2">Leaflet</li>
                  <li className="c-list__item c-list__item--exp-1">Vue</li>
                  <li className="c-list__item c-list__item--exp-4">React Formik</li>
                </ul>
                <h2 className="c-title c-title--smallest u-border-bottom u-padding-vertical-tiny">Styling &amp; CSS Organization Strategies</h2>
                <ul className="c-list">
                  <li className="c-list__item c-list__item--exp-4">BEM</li>
                  <li className="c-list__item c-list__item--exp-4">SASS</li>
                  <li className="c-list__item c-list__item--exp-2">Atomic</li>
                  <li className="c-list__item c-list__item--exp-2">Glamorous</li>
                  <li className="c-list__item c-list__item--exp-2">LESS</li>
                </ul>
              </div>
              <div className="c-grid__cell u-1/4--lap">
                <h2 className="c-title c-title--smallest u-border-bottom u-padding-vertical-tiny">Backend Engineering</h2>
                <ul className="c-list c-list--measure">
                  <li className="c-list__item c-list__item--exp-3">Ruby / Ruby On Rails</li>
                  <li className="c-list__item c-list__item--exp-3">PHP / Wordpress</li>
                  <li className="c-list__item c-list__item--exp-2">Elixir / Phoenix</li>
                  <li className="c-list__item c-list__item--exp-1">Node / Express</li>
                </ul>
                <h2 className="c-title c-title--smallest u-border-bottom u-padding-vertical-tiny">Testing &amp; Build Tooling</h2>
                <ul className="c-list c-list--measure">
                  <li className="c-list__item c-list__item--exp-3">Rspec / Capybara</li>
                  <li className="c-list__item c-list__item--exp-3">Jest / Enzyme</li>
                  <li className="c-list__item c-list__item--exp-3">Webpack</li>
                  <li className="c-list__item c-list__item--exp-3">Gulp</li>
                  <li className="c-list__item c-list__item--exp-2">Grunt</li>
                  <li className="c-list__item c-list__item--exp-4">AssetPipeline</li>
                </ul>
                <h2 className="c-title c-title--smallest u-border-bottom u-padding-vertical-tiny">DevOps</h2>
                <ul className="c-list c-list--measure">
                  <li className="c-list__item c-list__item--exp-3">Heroku</li>
                  <li className="c-list__item c-list__item--exp-2">AWS</li>
                  <li className="c-list__item c-list__item--exp-3">Webpack</li>
                  <li className="c-list__item c-list__item--exp-4">Github</li>
                  <li className="c-list__item c-list__item--exp-2">Gitlab</li>
                </ul>
              </div>
              <div className="c-grid__cell u-1/4--lap">
                <h2 className="c-title c-title--smallest u-border-bottom u-padding-vertical-tiny">Marketing</h2>
                <ul className="c-list c-list--measure">
                  <li className="c-list__item c-list__item--exp-4">Digital Advertising Design</li>
                  <li className="c-list__item c-list__item--exp-4">Email Design &amp; Engineering</li>
                </ul>
                <h2 className="c-title c-title--smallest u-border-bottom u-padding-vertical-tiny">Marketing &amp; Tracking Tooling</h2>
                <ul className="c-list c-list--measure">
                  <li className="c-list__item c-list__item--exp-3">Google Analytics &amp; Tag Manager</li>
                  <li className="c-list__item c-list__item--exp-2">Segment IO</li>
                  <li className="c-list__item c-list__item--exp-4">Google Optimize</li>
                </ul>
                <h2 className="c-title c-title--smallest u-border-bottom u-padding-vertical-tiny">Communication &amp; Planning Misc.</h2>
                <ul className="c-list c-list--measure">
                  <li className="c-list__item c-list__item--exp-4">Slack</li>
                  <li className="c-list__item c-list__item--exp-4">Asana</li>
                  <li className="c-list__item c-list__item--exp-4">Harvest</li>
                  <li className="c-list__item c-list__item--exp-4">Google Apps</li>
                  <li className="c-list__item c-list__item--exp-3">MS Office Suite</li>
                  <li className="c-list__item c-list__item--exp-3">Zapier</li>
                  <li className="c-list__item c-list__item--exp-2">TeamGnatt</li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </React.Fragment>
    );
  }
}

export default WithPage(PageExperience);
