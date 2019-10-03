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
        <section className="c-wrapper">
          <div className="c-container">
            <div className="u-margin-bottom u-border-bottom">
              <h2 className="c-title c-title--small">Experience</h2>
              <p className="c-paragraph">The original Newline Education Platform began as "The Iron Yard Online", an online supplement to The Iron Yard's.The original Newline Education Platform began as "The Iron Yard Online", an online supplement to The Iron Yard's</p>
              <p className="c-paragraph">The original Newline Education Platform began as "The Iron Yard Online", an online supplement to The Iron Yard's.</p>
              <ul className="c-list u-padding-vertical-small c-list--large c-list--horizontal c-list--measure">
                <li className="c-list__item">Limited Experience</li>
                <li className="c-list__item">Limited Production</li>
                <li className="c-list__item">Experienced Production</li>
                <li className="c-list__item">Expert</li>
              </ul>
            </div>
            <div className="c-grid">
              <div className="c-grid__cell u-1/3--lap">
                <h2 className="c-title c-title--smallest">Design</h2>
                <ul className="c-list c-list--measure">
                  <li className="c-list__item">HTML/Jade/Mustache/JSX, React/Redux</li>
                  <li className="c-list__item">CSS Organization Strategies: BEM, Atomic, Web Components...</li>
                  <li className="c-list__item">Ruby On Rails, Elixir+Phoenix, Node, PHP</li>
                  <li className="c-list__item">Tooling &amp; Testing: Webpack (&hellip;and predecessors like Gulp), Rspec/Capybara, Jest/Enzyme</li>
                </ul>
              </div>
              <div className="c-grid__cell u-1/3--lap">
                <h2 className="c-title c-title--smallest">Frontend</h2>
                <ul className="c-list c-list--measure">
                  <li className="c-list__item">HTML/Jade/Mustache/JSX, React/Redux</li>
                  <li className="c-list__item">CSS Organization Strategies: BEM, Atomic, Web Components...</li>
                  <li className="c-list__item">Ruby On Rails, Elixir+Phoenix, Node, PHP</li>
                  <li className="c-list__item">Tooling &amp; Testing: Webpack (&hellip;and predecessors like Gulp), Rspec/Capybara, Jest/Enzyme</li>
                </ul>
                <h2 className="c-title c-title--smallest">Backend</h2>
                <ul className="c-list c-list--measure">
                  <li className="c-list__item">HTML/Jade/Mustache/JSX, React/Redux</li>
                  <li className="c-list__item">CSS Organization Strategies: BEM, Atomic, Web Components...</li>
                  <li className="c-list__item">Ruby On Rails, Elixir+Phoenix, Node, PHP</li>
                  <li className="c-list__item">Tooling &amp; Testing: Webpack (&hellip;and predecessors like Gulp), Rspec/Capybara, Jest/Enzyme</li>
                </ul>
              </div>
              <div className="c-grid__cell u-1/3--lap">
                <h2 className="c-title c-title--smallest">Tooling</h2>
                <ul className="c-list c-list--measure">
                  <li className="c-list__item">HTML/Jade/Mustache/JSX, React/Redux</li>
                  <li className="c-list__item">CSS Organization Strategies: BEM, Atomic, Web Components...</li>
                  <li className="c-list__item">Ruby On Rails, Elixir+Phoenix, Node, PHP</li>
                  <li className="c-list__item">Tooling &amp; Testing: Webpack (&hellip;and predecessors like Gulp), Rspec/Capybara, Jest/Enzyme</li>
                </ul>
                <h2 className="c-title c-title--smallest">Testing</h2>
                <ul className="c-list c-list--measure">
                  <li className="c-list__item">HTML/Jade/Mustache/JSX, React/Redux</li>
                  <li className="c-list__item">CSS Organization Strategies: BEM, Atomic, Web Components...</li>
                  <li className="c-list__item">Ruby On Rails, Elixir+Phoenix, Node, PHP</li>
                  <li className="c-list__item">Tooling &amp; Testing: Webpack (&hellip;and predecessors like Gulp), Rspec/Capybara, Jest/Enzyme</li>
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
