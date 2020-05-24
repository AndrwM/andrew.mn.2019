import React, { Component } from "react";
import { NavLink, Link } from "react-router-dom";
import withBreadcrumbs from "react-router-breadcrumbs-hoc";
import Routes from "../../Routes";

class Navigation extends Component {
  render() {
    return (
      <React.Fragment>
        {/* <p className="c-paragraph c-paragraph--large">
          Andrew McIntee
        </p> */}
        {/* <h1 className="c-title c-title--medium">
          Andrew McIntee
        </h1> */}
        {/* <h2 className="c-title c-title--small">Navigation</h2> */}
        <ul className="c-list c-list--large">
          <li className="c-list__item c-list__item--wave">
            <NavLink exact to="/" className="c-link" activeClassName="c-link--active">About Me</NavLink>
          </li>
          <li className="c-list__item c-list__item--rocket">
            <NavLink exact to="/case-studies" className="c-link" activeClassName="c-link--active">Case Studies</NavLink>
          </li>
        </ul>
        <ul className="c-list c-list--small u-margin-top-auto">
          <li className="c-list__item c-list__item--computer">
            <NavLink to="/experience" className="c-link" activeClassName="c-link--active">Tooling Experience</NavLink>
          </li>
          <li className="c-list__item c-list__item--cherry">
            <NavLink to="/resume" className="c-link" activeClassName="c-link--active">
              Resumé
              <span className="u-subtle">&nbsp;(2019)</span>
            </NavLink>
          </li>
          <li className="c-list__item c-list__item--diamond">
            <NavLink to="/colophon" className="c-link" activeClassName="c-link--active">Colophon</NavLink>
          </li>
          <li className="c-list__item c-list__item--remote">
            <a href="https://github.com/andrwM" target="_blank" className="c-link c-link--arrow-remote">Github</a>
          </li>
          <li className="c-list__item c-list__item--remote">
            <a href="https://www.linkedin.com/in/AndrewMcIntee/" target="_blank" className="c-link c-link--arrow-remote">LinkedIn</a>
          </li>
        </ul>
      </React.Fragment>
    );
  }
}

export default Navigation;
