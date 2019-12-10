import React, { Component } from "react";
import { NavLink, Link } from "react-router-dom";
import withBreadcrumbs from "react-router-breadcrumbs-hoc";
import Routes from "../../Routes";

class PartialFooter extends Component {
  render() {
    let parentPage;

    try {
      let parentRef = this.props.breadcrumbs[this.props.breadcrumbs.length - 2];
      parentPage = {
        url: parentRef.match.url,
        name: parentRef.breadcrumb.props.children
      }
    } catch(e) {
      parentPage = false;
    }

    return (
      <div
        className="c-page__footer"
        style={{ background: `#f1f9fc linear-gradient(to bottom, #f1f9fc 0%, ${this.props.themeColor} 100%)` }}>
        <section className="c-wrapper c-wrapper--flush">
          <div className="c-container">
            <div className="c-grid">
              <div className="c-grid__cell u-1/2--lap u-2/3--desk">
                <div className="u-border-dark-bottom u-margin-vertical-small u-padding-bottom-tiny">
                  <h2 className="c-title c-title--small">See More&hellip;</h2>
                </div>
                <div className="c-grid">
                  <div className="c-grid__cell u-1/2">
                    <ul className="c-list c-list--large c-list--rocket">
                      <li className="c-list__item">
                        <NavLink exact to="/" className="c-link" activeClassName="c-link--active">Home <span className="u-subtler" children="("/>About Me<span className="u-subtler" children=")"/></NavLink>
                      </li>
                      <li className="c-list__item">
                        <NavLink to="/resume" className="c-link" activeClassName="c-link--active">Resumé</NavLink>
                      </li>
                      <li className="c-list__item c-list__item--remote">
                        <a href="https://www.linkedin.com/in/AndrewMcIntee/" target="_blank" className="c-link c-link--arrow-remote">LinkedIn</a>
                      </li>
                    </ul>
                  </div>
                  <div className="c-grid__cell u-1/2">
                    <ul className="c-list c-list--large c-list--rocket">
                      <li className="c-list__item">
                        <NavLink exact to="/case-studies" className="c-link" activeClassName="c-link--active">Case Studies</NavLink>
                      </li>
                      <li className="c-list__item">
                        <NavLink to="/experience" className="c-link" activeClassName="c-link--active">Tooling Experience</NavLink>
                      </li>
                      <li className="c-list__item c-list__item--remote">
                        <a href="https://github.com/andrwM" target="_blank" className="c-link c-link--arrow-remote">Github</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="c-grid__cell u-1/2--lap u-1/3--desk">
                <div className="u-border-dark-bottom u-margin-vertical-small u-padding-bottom-tiny">
                  <h2 className="c-title c-title--small">Colophon</h2>
                </div>
                <p className="c-paragraph c-paragraph--sans-small u-subtle">This site is built by hand and with love in React.<br/> It's hosted on GitHub and typeset in Graphik &amp; Louize.<br/> Photography courtesy of Amo Amo Studio &amp; Angela Zion.</p>
                <p className="c-paragraph c-paragraph--sans-small u-subtle">Your privacy is important; this site is GDPR compliant. <br/>© Andrew McIntee 2019, unless otherwise stated.</p>
              </div>
            </div>
            <div className="u-border-dark-top u-padding-vertical">
              <div className="c-grid">
                {parentPage &&
                  <div className="c-grid__cell u-1/2--lap u-2/3--desk u-margin-top-small">
                    <Link
                      to={parentPage.url}
                      className="c-button c-button--xlarge c-button--arrow-l"
                      children={`Back to “${parentPage.name === "Andrew McIntee" ? "About Me" : parentPage.name}”`}
                    />
                  </div>
                }
                <div className="c-grid__cell c-grid__cell--pull-right u-1/2--lap u-1/3--desk u-margin-top-small">
                  <p className="c-paragraph c-paragraph--sans-medium u-margin-none">
                  Thanks for visiting. Have a great day.<br/> <a href="#" className="c-link">Studio@Andrew.mn</a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default withBreadcrumbs(Routes)(PartialFooter);
