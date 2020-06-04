import React, { Component } from "react";
import { NavLink } from "react-router-dom";

class Aside extends Component {
  mobileController() {
    // If mobile present
    // used as either a callback for link OR to initially trigger the closing
    // close
  }

  render() {
    return (
      <nav
        className={`c-page__aside ${this.props.asideActive ? "" : "c-page__aside--closed"}`}
        style={{"--theme": this.props.themeColor}}
      >
        {/* <div className="c-page__aside-button" onClick={() => this.setState({open: !this.props.asideActive})}>
          {this.props.asideActive ? "←" : "Navigation"}
        </div> */}
        <div class="c-page__aside-container">
          {/* <p className="c-paragraph c-paragraph--large">
            Andrew McIntee
          </p> */}
          {/* <h1 className="c-title c-title--medium">
            Andrew McIntee
          </h1> */}
          {/* <h2 className="c-title c-title--small">Navigation</h2> */}
          <ul className="c-list c-list--large">
            <li className="c-list__item c-list__item--wave">
              <NavLink exact to="/" className="c-link c-link--on-dark" activeClassName="c-link--active">About Me</NavLink>
            </li>
            <li className="c-list__item c-list__item--rocket">
              <NavLink exact to="/case-studies" className="c-link c-link--on-dark" activeClassName="c-link--active">Case Studies</NavLink>
            </li>
          </ul>
          <ul className="c-list c-list--small u-margin-top-auto">
            <li className="c-list__item c-list__item--computer">
              <NavLink to="/experience" className="c-link c-link--on-dark" activeClassName="c-link--active">Tooling Experience</NavLink>
            </li>
            <li className="c-list__item c-list__item--cherry">
              <NavLink to="/resume" className="c-link c-link--on-dark" activeClassName="c-link--active">
                Resumé
                <span className="u-subtle">&nbsp;(2019)</span>
              </NavLink>
            </li>
            <li className="c-list__item c-list__item--diamond">
              <NavLink to="/colophon" className="c-link c-link--on-dark" activeClassName="c-link--active">Colophon</NavLink>
            </li>
            <li className="c-list__item c-list__item--remote">
              <a href="https://github.com/andrwM" target="_blank" className="c-link c-link--on-dark c-link--arrow-remote">Github</a>
            </li>
            <li className="c-list__item c-list__item--remote">
              <a href="https://www.linkedin.com/in/AndrewMcIntee/" target="_blank" className="c-link c-link--on-dark c-link--arrow-remote">LinkedIn</a>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default Aside;
