import React, { Component } from "react";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

class Navigation extends Component {
  render() {
    return (
      <React.Fragment>
        <h2 className="c-title c-title--small u-margin-top-small">Explore</h2>
        <ul className="c-list c-list--large c-list--rocket">
          <li className="c-list__item">
            <Link to="/case-studies" className="c-link c-link--arrow-r u-hi">Case Studies</Link>
          </li>
          <li className="c-list__item">
            <Link to="/resume" className="c-link c-link--arrow-r">Resumé</Link>
          </li>
          {this.props.context !== "no-about-link" &&
            <li className="c-list__item c-list__item--down">
              <HashLink smooth to="/#about" className="c-link c-link--arrow-d u-hi">About Me</HashLink>
            </li>
          }
        </ul>
      </React.Fragment>
    );
  }
}

export default Navigation;
