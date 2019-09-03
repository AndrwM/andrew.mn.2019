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
      <div style={{position: "fixed", bottom: 0, right: 0, left: 0, zIndex: -1, height: "100vh", background: `#f1f9fc linear-gradient(to bottom, ${this.props.themeColor} 0%, #f1f9fc 90%)`, display: "flex", alignItems: "flex-end"}}>
        <style dangerouslySetInnerHTML={{__html: `
          .c-page {
            margin-bottom: 100vh;
          }
        `}} />
        <section className="c-wrapper">
          <div className="c-container">
            <div className="c-grid c-grid--auto c-grid--bottom">
              <div className="c-grid__cell">
                <p className="c-paragraph c-paragraph--sans-large u-margin-none">
                  <span className="c-emoji">🎉</span>&nbsp;&nbsp;Thanks&nbsp;for&nbsp;visiting. Have&nbsp;a&nbsp;great&nbsp;day. <span className="u-subtle">&mdash;</span> <a href="mailto:Studio@Andrew.mn" className="c-link">Studio@Andrew.mn</a>
                </p>
              </div>
              <div className="c-grid__cell c-grid__cell--pull-right">
                <p className="c-paragraph c-paragraph--sans-small u-subtler u-margin-none">This site is built by hand and with love in React.<br/>It's hosted on GitHub and typeset in Graphik &amp; Louize.<br/>Photography courtesy of Amo Amo Studio &amp; Angela Zion.<br />© Andrew McIntee 2019, unless otherwise stated.</p>
              </div>
            </div>
            {
              parentPage &&
              <div className="u-border-dark-top u-padding-top u-margin-top">
                <Link
                  to={parentPage.url}
                  className="c-button c-button--xlarge c-button--arrow-l"
                  children={`Back to ${parentPage.name}`}
                />
              </div>
            }
            {/* <p className="c-paragraph--small u-margin-top-smallest"><span className="u-subtler u-margin-left-smallest">In respect of your privacy, this website does not use trackers or analytics :)</span></p> */}
          </div>
        </section>
      </div>
    );
  }
}

export default withBreadcrumbs(Routes)(PartialFooter);
