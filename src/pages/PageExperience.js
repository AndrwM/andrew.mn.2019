import React, { Component } from "react";
import { HashLink } from "react-router-hash-link";

import WithPage from "../components/WithPage";
import Reveal from "../components/Reveal";

class PageExperience extends Component {
  componentDidMount() {
    this.props.setAppState({
      headerContent: this.renderHeader(),
      theme: "#f0fef6"
    });
  }

  renderHeader() {
    return (
      <React.Fragment>
        <p className="c-paragraph c-paragraph--large">Iʼm proud to be a generalist with a laser focus on user experience and frontend engineering excellence.</p>
        <p className="c-paragraph">While not completely exhaustive, I hope the list below can shed light on the many tools, languages, frameworks, libraries that I have worked with over the years.</p>
      </React.Fragment>
    );
  }

  render() {
    return (
      <React.Fragment>
        <section className="c-wrapper c-wrapper--slim u-padding-bottom-none">
          <div className="c-container">
            <h2 className="c-title c-title--label u-margin-none">Legend</h2>
            <ul className="c-grid c-list">
              <li className="c-grid__cell u-1/2--lap u-1/4--desk c-list__item c-list__item--exp-1">Hobby Experience</li>
              <li className="c-grid__cell u-1/2--lap u-1/4--desk c-list__item c-list__item--exp-2">Limited Production</li>
              <li className="c-grid__cell u-1/2--lap u-1/4--desk c-list__item c-list__item--exp-3">Experienced Production</li>
              <li className="c-grid__cell u-1/2--lap u-1/4--desk c-list__item c-list__item--exp-4">Expert Experience</li>
            </ul>
          </div>
        </section>
        <section className="c-wrapper c-wrapper--flush">
          <div className="c-container">
            <div className="c-grid">
              <div className="c-grid__cell u-1/2--lap u-1/4--desk u-border">
                <h2 className="c-title c-title--small u-border-dark-bottom u-padding-top u-padding-bottom-tiny">Product Design</h2>
                <ul className="c-list c-list--small">
                  <li className="c-list__item c-list__item--exp-4">Wireframing</li>
                  <li className="c-list__item c-list__item--exp-4">Design System Design &amp; Documentation</li>
                  <li className="c-list__item c-list__item--exp-4">Design System Development</li>
                  <li className="c-list__item c-list__item--exp-3">Project Planning / Management</li>
                  <li className="c-list__item c-list__item--exp-3">User Support</li>
                  <li className="c-list__item c-list__item--exp-3">A/B Testing</li>
                  <li className="c-list__item c-list__item--exp-3">Accessibility<br/> (screen reader, color blindness, dyslexia&hellip;)</li>
                </ul>
              </div>
              <div className="c-grid__cell u-1/2--lap u-1/4--desk u-border">
                <h2 className="c-title c-title--small u-border-dark-bottom u-padding-top u-padding-bottom-tiny">Visual Design Tooling</h2>
                <ul className="c-list c-list--small">
                  <li className="c-list__item c-list__item--exp-4">Photoshop</li>
                  <li className="c-list__item c-list__item--exp-4">Sketch</li>
                  <li className="c-list__item c-list__item--exp-2">Illustrator</li>
                  <li className="c-list__item c-list__item--exp-4">Project Planning</li>
                </ul>
              </div>
              <div className="c-grid__cell u-1/2--lap u-1/4--desk u-border">
                <h2 className="c-title c-title--small u-border-dark-bottom u-padding-top u-padding-bottom-tiny">Prototyping &amp; Handoff</h2>
                <ul className="c-list c-list--small">
                  <li className="c-list__item c-list__item--exp-4">Invision App</li>
                  <li className="c-list__item c-list__item--exp-3">Zeplin</li>
                  <li className="c-list__item c-list__item--exp-2">Aha!</li>
                  <li className="c-list__item c-list__item--exp-2">Asana</li>
                  <li className="c-list__item c-list__item--exp-2">Asana</li>
                </ul>
              </div>
              <div className="c-grid__cell u-1/2--lap u-1/4--desk u-border">
                <h2 className="c-title c-title--small u-border-dark-bottom u-padding-top u-padding-bottom-tiny">Support</h2>
                <ul className="c-list c-list--small">
                  <li className="c-list__item c-list__item--exp-4">Intercom</li>
                  <li className="c-list__item c-list__item--exp-4">Helpscout</li>
                </ul>
              </div>
              <div className="c-grid__cell u-1/2--lap u-1/4--desk u-border">
                <h2 className="c-title c-title--small u-border-dark-bottom u-padding-top u-padding-bottom-tiny">Design Misc.</h2>
                <ul className="c-list c-list--small">
                  <li className="c-list__item c-list__item--exp-2">Branding &amp; Logo Design</li>
                  <li className="c-list__item c-list__item--exp-1">Photography</li>
                </ul>
              </div>
              <div className="c-grid__cell u-1/2--lap u-1/4--desk u-border">
                <h2 className="c-title c-title--small u-border-dark-bottom u-padding-top u-padding-bottom-tiny">Markup Flavors</h2>
                <ul className="c-list">
                  <li className="c-list__item c-list__item--exp-4">HTML</li>
                  <li className="c-list__item c-list__item--exp-4">Jade</li>
                  <li className="c-list__item c-list__item--exp-4">HAML</li>
                  <li className="c-list__item c-list__item--exp-4">JSX</li>
                  <li className="c-list__item c-list__item--exp-2">Mustache</li>
                </ul>
              </div>
              <div className="c-grid__cell u-1/2--lap u-1/4--desk u-border">
                <h2 className="c-title c-title--small u-border-dark-bottom u-padding-top u-padding-bottom-tiny">Frontend Frameworks &amp; Libs</h2>
                <ul className="c-list">
                  <li className="c-list__item c-list__item--exp-4">Backbone</li>
                  <li className="c-list__item c-list__item--exp-3">React</li>
                  <li className="c-list__item c-list__item--exp-2">Angular</li>
                  <li className="c-list__item c-list__item--exp-2">Redux</li>
                  <li className="c-list__item c-list__item--exp-2">Leaflet</li>
                  <li className="c-list__item c-list__item--exp-1">Vue</li>
                  <li className="c-list__item c-list__item--exp-4">React Formik</li>
                </ul>
              </div>
              <div className="c-grid__cell u-1/2--lap u-1/4--desk u-border">
                <h2 className="c-title c-title--small u-border-dark-bottom u-padding-top u-padding-bottom-tiny">Styling &amp; CSS Organization Strategies</h2>
                <ul className="c-list">
                  <li className="c-list__item c-list__item--exp-4">BEM</li>
                  <li className="c-list__item c-list__item--exp-4">SASS</li>
                  <li className="c-list__item c-list__item--exp-2">Atomic</li>
                  <li className="c-list__item c-list__item--exp-2">Glamorous</li>
                  <li className="c-list__item c-list__item--exp-2">LESS</li>
                </ul>
              </div>
              <div className="c-grid__cell u-1/2--lap u-1/4--desk u-border">
                <h2 className="c-title c-title--small u-border-dark-bottom u-padding-top u-padding-bottom-tiny">Backend Engineering</h2>
                <ul className="c-list c-list--small">
                  <li className="c-list__item c-list__item--exp-3">Ruby / Ruby On Rails</li>
                  <li className="c-list__item c-list__item--exp-3">PHP / Wordpress</li>
                  <li className="c-list__item c-list__item--exp-2">Elixir / Phoenix</li>
                  <li className="c-list__item c-list__item--exp-1">Node / Express</li>
                  <li className="c-list__item c-list__item--exp-1">Python / Django</li>
                  <li className="c-list__item c-list__item--exp-1">.NET</li>
                </ul>
              </div>
              <div className="c-grid__cell u-1/2--lap u-1/4--desk u-border">
                <h2 className="c-title c-title--small u-border-dark-bottom u-padding-top u-padding-bottom-tiny">Testing &amp; Build Tooling</h2>
                <ul className="c-list c-list--small">
                  <li className="c-list__item c-list__item--exp-3">Rspec / Capybara</li>
                  <li className="c-list__item c-list__item--exp-3">Jest / Enzyme</li>
                  <li className="c-list__item c-list__item--exp-3">Webpack</li>
                  <li className="c-list__item c-list__item--exp-3">Gulp</li>
                  <li className="c-list__item c-list__item--exp-2">Grunt</li>
                  <li className="c-list__item c-list__item--exp-4">AssetPipeline</li>
                </ul>
              </div>
              <div className="c-grid__cell u-1/2--lap u-1/4--desk u-border">
                <h2 className="c-title c-title--small u-border-dark-bottom u-padding-top u-padding-bottom-tiny">DevOps</h2>
                <ul className="c-list c-list--small">
                  <li className="c-list__item c-list__item--exp-3">Heroku</li>
                  <li className="c-list__item c-list__item--exp-2">AWS</li>
                  <li className="c-list__item c-list__item--exp-3">Webpack</li>
                  <li className="c-list__item c-list__item--exp-4">Github</li>
                  <li className="c-list__item c-list__item--exp-2">Gitlab</li>
                </ul>
              </div>
              <div className="c-grid__cell u-1/2--lap u-1/4--desk u-border">
                <h2 className="c-title c-title--small u-border-dark-bottom u-padding-top u-padding-bottom-tiny">Marketing</h2>
                <ul className="c-list c-list--small">
                  <li className="c-list__item c-list__item--exp-4">Digital Advertising Design</li>
                  <li className="c-list__item c-list__item--exp-4">Email Design &amp; Engineering</li>
                </ul>
              </div>
              <div className="c-grid__cell u-1/2--lap u-1/4--desk u-border">
                <h2 className="c-title c-title--small u-border-dark-bottom u-padding-top u-padding-bottom-tiny">Marketing &amp; Tracking Tooling</h2>
                <ul className="c-list c-list--small">
                  <li className="c-list__item c-list__item--exp-3">Google Analytics &amp; Tag Manager</li>
                  <li className="c-list__item c-list__item--exp-2">Segment IO</li>
                  <li className="c-list__item c-list__item--exp-4">Google Optimize</li>
                </ul>
              </div>
              <div className="c-grid__cell u-1/2--lap u-1/4--desk u-border">
                <h2 className="c-title c-title--small u-border-dark-bottom u-padding-top u-padding-bottom-tiny">Communication &amp; Planning Misc.</h2>
                <ul className="c-list c-list--small">
                  <li className="c-list__item c-list__item--exp-4">Slack</li>
                  <li className="c-list__item c-list__item--exp-4">Asana</li>
                  <li className="c-list__item c-list__item--exp-4">Harvest</li>
                  <li className="c-list__item c-list__item--exp-4">Google Apps</li>
                  <li className="c-list__item c-list__item--exp-3">MS Office Suite</li>
                  <li className="c-list__item c-list__item--exp-3">Zapier</li>
                  <li className="c-list__item c-list__item--exp-2">TeamGnatt</li>
                </ul>
              </div>
              <div className="c-grid__cell u-1/2--lap u-1/4--desk u-border">
                <h2 className="c-title c-title--small u-border-dark-bottom u-padding-top u-padding-bottom-tiny">Communication &amp; Planning Misc.</h2>
                <ul className="c-list c-list--small">
                  <li className="c-list__item c-list__item--exp-4">Slack</li>
                  <li className="c-list__item c-list__item--exp-4">Asana</li>
                  <li className="c-list__item c-list__item--exp-4">Harvest</li>
                  <li className="c-list__item c-list__item--exp-4">Google Apps</li>
                  <li className="c-list__item c-list__item--exp-3">MS Office Suite</li>
                  <li className="c-list__item c-list__item--exp-3">Zapier</li>
                  <li className="c-list__item c-list__item--exp-2">TeamGnatt</li>
                </ul>
              </div>
              <div className="c-grid__cell u-1/2--lap u-1/4--desk u-border">
                <h2 className="c-title c-title--small u-border-dark-bottom u-padding-top u-padding-bottom-tiny">Communication &amp; Planning Misc.</h2>
                <ul className="c-list c-list--small">
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
        <section className="c-wrapper">
          <p className="c-paragraph">I have worked within and adjacent to many different organization styles. From running my own UI design agency, horizontal/self-managed, all the way to multi-tier managerial agencies. Within each of these organizations there have been different ways of reporting, hand-offs, and planning.</p>
        </section>
      </React.Fragment>
    );
  }
}

export default WithPage(PageExperience);
