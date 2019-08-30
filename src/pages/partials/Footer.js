import React, { Component } from "react";
import { Link } from "react-router-dom";
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
      <div style={{position: "fixed", bottom: 0, right: 0, left: 0, zIndex: -1, height: "100vh", background: "#f1f9fc linear-gradient(to bottom, #f9fbf9 0%, #f1f9fc 100%)", display: "flex", alignItems: "flex-end"}}>
        <style dangerouslySetInnerHTML={{__html: `
          .c-page {
            margin-bottom: 100vh;
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
            <p className="c-title--smallest u-margin-vertical-smallest">
              <span className="c-emoji c-emoji--in-margin">🎉</span>&nbsp;&nbsp;Thanks&nbsp;for&nbsp;visiting. Have&nbsp;a&nbsp;great&nbsp;day. &mdash; <a href="mailto:Studio@Andrew.mn" className="c-link">Studio@Andrew.mn</a></p>
            <p className="c-paragraph--small u-margin-vertical-smallest">&nbsp; © Andrew McIntee 2019.</p>
            <p className="c-paragraph--small u-margin-top-smallest u-margin-top"><span className="u-subtler u-margin-left-smallest">This site is built by hand and with love in React.<br/>It's hosted on GitHub and typeset in Graphik &amp; Louize.<br/>Photography courtesy of Amo Amo Studio &amp; Division Of Labor.</span></p>
            {/* <p className="c-paragraph--small u-margin-top-smallest"><span className="u-subtler u-margin-left-smallest">In respect of your privacy, this website does not use trackers or analytics :)</span></p> */}
          </div>
        </section>
      </div>
    );
  }
}

export default withBreadcrumbs(Routes)(PartialFooter);
