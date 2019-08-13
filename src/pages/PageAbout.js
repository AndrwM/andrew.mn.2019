import React, { Component } from "react";
import { Link } from "react-router-dom";

class PageAbout extends Component {
  render() {
    return (
      <React.Fragment>
        <header className="c-wrapper c-wrapper--masked c-wrapper--header c-wrapper--light-purple">
          <div className="c-container u-animate-in">
            <p className="c-paragraph">Hello!
              <span className="u-subtle">—</span> My name is Andrew McIntee. I’m an Atlanta-based software designer specializing in UI design &amp; front-end engineering. I enjoy working with positive people who sweat the small details and share the same passion for pragmatic and thoughtful design.
            </p>
            <p className="c-paragraph">Beginning November 2017, I am available for contract engagements.<br/>Full-time opportunites are warmly welcomed.
            </p>
            <div className="c-grid u-margin-vertical">
              <div className="c-grid__cell 1/3--lap">
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
              <div className="c-grid__cell 2/3--lap">
                <h2 className="c-title c-title--small u-margin-top-small">Currently…</h2>
                <ul className="c-list c-list--sparkle">
                  <li className="c-list__item">Building an open source, lightweight IDE with React</li>
                  <li className="c-list__item">Building a cryptocurrency trading bot in Ruby</li>
                  <li className="c-list__item">Designing a marketing site for a freelance collective</li>
                </ul>
              </div>
            </div>
            <p className="c-paragraph c-paragraph--sans c-paragraph--small">
              <span className="c-emoji">📬</span>&nbsp; Contact me at&nbsp;
              <a className="c-link" href="mailto:studio@andrew.mn">Studio@Andrew.mn</a>
              &nbsp;or by phone at&nbsp;
              <a className="c-link" href="mailto:studio@andrew.mn">(864) 915 0648</a>.
            </p>
          </div>
        </header>
      </React.Fragment>
    );
  }
}

export default PageAbout;
