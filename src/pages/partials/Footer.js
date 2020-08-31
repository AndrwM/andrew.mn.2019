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
      <React.Fragment>
        <section
          className="c-wrapper c-wrapper--slim u-border-dark-top u-padding-top-large u-margin-top-auto"
        >
          <div
            className="c-container"
          >
            {parentPage &&
              <Link
                to={parentPage.url}
                className="c-button c-button--xlarge c-button--arrow-l u-margin-bottom"
                children={`Back to ${parentPage.name === "Andrew McIntee" ? "Home" : parentPage.name}`}
              />
            }
            <div className="c-grid">
              <div className="c-grid__cell u-1/2--lap u-2/3--desk">
                <p className="c-paragraph c-paragraph--sans-medium">
                  Thanks for visiting. Have a great day.<br/> <a href="#" className="c-link">Studio@Andrew.mn</a>
                </p>
              </div>
              <div className="c-grid__cell c-grid__cell--pull-right u-1/2--lap u-1/3--desk">
                <p className="c-paragraph c-paragraph--sans-smallest u-subtle">
                  Your privacy is important; this site is GDPR compliant. <br/>Views expressed are my own. <br/>© Andrew McIntee '08&ndash;2020.
                </p>
              </div>
            </div>
          </div>
        </section>
      </React.Fragment>
    );
  }
}

export default withBreadcrumbs(Routes)(PartialFooter);
