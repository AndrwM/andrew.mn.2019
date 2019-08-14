import React, { Component } from "react";
import { Link } from "react-router-dom";
import withBreadcrumbs from "react-router-breadcrumbs-hoc";

class Breadcrumb extends Component {
  _name(name, url) {
    switch (url) {
      case "/":
        if (this.props.location.pathname === "/") {
          return "";
        } else {
          return "Andrew McIntee"
        }
      default:
        return name;
    }
  }

  renderLink(name, url) {
    return (
      <React.Fragment>
        <Link
          className="c-navigation__breadcrumb-link"
          to={url}
          children={this._name(name, url)}
        />
        &nbsp;/&nbsp;
      </React.Fragment>
    );
  }

  renderTitle(name, url) {
    return (
      <div className="c-navigation__breadcrumb-link c-navigation__breadcrumb-link--static">
        {this._name(name, url)}
      </div>
    );
  }

  render() {
    return (
      <nav className="c-navigation">
        <div className="c-navigation__container">
          {this.props.breadcrumbs.map(({ breadcrumb, match }, index) => (
            <React.Fragment key={index}>
              {index < this.props.breadcrumbs.length - 1 ? (
                this.renderLink(breadcrumb, match.url)
              ) : (
                this.renderTitle(breadcrumb, match.url)
              )}
            </React.Fragment>
          ))}
        </div>
      </nav>
    );
  }
}

export default withBreadcrumbs()(Breadcrumb)
