import React, { Component } from "react";
import { Link } from "react-router-dom";
import withBreadcrumbs from "react-router-breadcrumbs-hoc";
import Routes from "../Routes";

class Breadcrumb extends Component {
  constructor(props) {
    super(props);
    this.state = { hover: false };
  }

  onHover(bool){
    if (window.scrollY > 60) {
      this.setState({hover: bool});
    } else {
      this.setState({hover: false});
    }
  }

  renderLink(name, url) {
    return (
      <React.Fragment>
        <Link
          className="c-navigation__breadcrumb-link"
          to={url}
          children={name}
          onClick={() => this.setState({hover: false})}
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
      <nav
        className={`c-navigation ${this.state.hover ? "c-navigation--hover" : ""}`}
        style={{"--theme": this.props.themeColor}}
        onMouseLeave={() => this.onHover(false)}
      >
        <div
          className="c-navigation__container"
          onMouseEnter={() => this.onHover(true)}
        >
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

export default withBreadcrumbs(Routes)(Breadcrumb)
