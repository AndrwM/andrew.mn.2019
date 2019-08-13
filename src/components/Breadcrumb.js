import React from "react";
import { Link } from "react-router-dom";
import withBreadcrumbs from "react-router-breadcrumbs-hoc";

const Breadcrumb = ({ breadcrumbs }) => (
  <nav className="c-navigation">
    <div class="c-navigation__container">
      {breadcrumbs.map(({ breadcrumb, match }, index) => (
        <React.Fragment>
          <Link
            key={match.url}
            class="c-navigation__breadcrumb-link"
            to={match.url || ""}
            children={breadcrumb}
          />
          {index < breadcrumbs.length - 1 && " / "}
        </React.Fragment>
      ))}
    </div>
  </nav>
);

export default withBreadcrumbs()(Breadcrumb)
