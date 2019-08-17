import React, { Component } from "react";
import { Link } from "react-router-dom";
import withBreadcrumbs from "react-router-breadcrumbs-hoc";

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
      <div style={{position: "fixed", bottom: 0, right: 0, left: 0, zIndex: -1}}>
        <style dangerouslySetInnerHTML={{__html: `
          .c-page {
            margin-bottom: 450px;
          }
        `}} />
        <section className="c-wrapper">
          <div className="c-container">
            {
              parentPage &&
              <Link
                to={parentPage.url}
                className="c-button c-button--arrow-l u-margin-bottom"
                children={`Back to ${parentPage.name}`}
              />
            }
            <p className="c-title--smallest u-margin-vertical-smallest"><span className="c-emoji">🎉</span>&nbsp;&nbsp;Thanks&nbsp;for&nbsp;visiting. Have&nbsp;a&nbsp;great&nbsp;day. &mdash; <a href="mailto:Studio@Andrew.mn" className="c-link">Studio@Andrew.mn</a></p>
            <p className="c-paragraph--small u-margin-vertical-smallest">&nbsp; © Andrew McIntee 2019.</p>
            <p className="c-paragraph--small u-margin-top-smallest"><span className="u-subtler u-margin-left-smallest">v3.0.0</span></p>
          </div>
        </section>
      </div>
    );
  }
}

export default withBreadcrumbs()(PartialFooter);
