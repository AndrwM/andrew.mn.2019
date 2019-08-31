import React, { Component } from "react";
import { Link } from "react-router-dom";
import withBreadcrumbs from "react-router-breadcrumbs-hoc";
import Routes from "../Routes";

class Breadcrumb extends Component {
  // _formatName(string) {
  //   console.log(string)
  //   return(string.replace(/_/g, ' ').replace(/(?: |\b)(\w)/g, function(key) {
  //     return key.toUpperCase()
  //   }));
  // }

  // _name(name, url) {
  //   switch (url) {
  //     case "/":
  //       return "Andrew McIntee";
  //     default:
  //       return this._formatName(name);
  //   }
  // }

  renderLink(name, url) {
    return (
      <React.Fragment>
        <Link
          className="c-navigation__breadcrumb-link"
          to={url}
          children={name}
        />
        &nbsp;/&nbsp;
      </React.Fragment>
    );
  }

  renderTitle(name, url) {
    return (
      <div className="c-navigation__breadcrumb-link c-navigation__breadcrumb-link--static">
        {name}
      </div>
    );
  }

  render() {
    return (
      <nav className="c-navigation" style={{"--theme": this.props.themeColor}}>
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
          {/* <a className="c-navigation__top" onClick={() => {window.scrollTo(0, 0)}}>top</a> */}
        </div>
      </nav>
    );
  }
}

export default withBreadcrumbs(Routes)(Breadcrumb)
