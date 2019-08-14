import React, { Component } from "react";
import { Link } from "react-router-dom";

class Navigation extends Component {
  render() {
    return (
      <div className="c-grid c-grid--auto c-grid--large">
        <div className="c-grid__cell">
          <h2 className="c-title c-title--small u-margin-top-small">Navigation</h2>
          <ul className="c-list c-list--rocket">
            <li className="c-list__item">
              <Link to="/case-studies" className="c-link c-link--arrow-r u-hi">Case Studies</Link>
            </li>
            <li className="c-list__item">
              <Link to="/resume" className="c-link c-link--arrow-r">Resumé</Link>
            </li>
          </ul>
        </div>
        <div className="c-grid__cell">
          <h2 className="c-title c-title--small u-margin-top-small">Currently…</h2>
          <ul className="c-list c-list--sparkle">
            <li className="c-list__item">Building an open source, lightweight IDE with React</li>
            <li className="c-list__item">Building a cryptocurrency trading bot in Ruby</li>
            <li className="c-list__item">Designing a marketing site for a freelance collective</li>
          </ul>
        </div>
      </div>
    );
  }
}

export default Navigation;
