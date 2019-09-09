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
            margin-bottom: 93vh;
          }
        `}} />
        <section className="c-wrapper">
          <div className="c-container">
            <div className="c-grid c-grid--reverse c-grid--bottom">
              <div className="c-grid__cell u-1/2--lap u-1/3--desk">
                <p className="c-paragraph c-paragraph--sans-small u-subtler u-margin-none">This site is built by hand and with love in React.<br/> It's hosted on GitHub and typeset in Graphik &amp; Louize.<br/> Photography courtesy of Amo Amo Studio &amp; Angela Zion.<br />© Andrew McIntee 2019, unless otherwise stated.</p>
              </div>
              <div className="c-grid__cell u-1/2--lap u-2/3--desk">
                <p className="c-paragraph c-paragraph--sans-large u-margin-bottom-none u-margin-top">
                  <span className="c-emoji">🎉</span>&nbsp;&nbsp;Thanks&nbsp;for&nbsp;visiting. Have&nbsp;a&nbsp;great&nbsp;day. <span className="u-subtle">&mdash;</span> <a href="mailto:Studio@Andrew.mn" className="c-link">Studio@Andrew.mn</a>
                </p>
              </div>
            </div>
            <div className="u-border-dark-top u-padding-top u-margin-top">
              <div className="c-grid c-grid--auto">
                <div className="c-grid__cell">
                  {
                    parentPage &&
                      <Link
                        to={parentPage.url}
                        className="c-button c-button--xlarge c-button--arrow-l"
                        children={`Back to ${parentPage.name}`}
                      />
                    }
                </div>
                <div className="c-grid__cell c-grid__cell--pull-right">
                  {/* <Link
                    to={"#"}
                    className="c-button c-button--xlarge c-button--arrow-r"
                    children={`Next Case Study`}
                    /> */}
                </div>
              </div>
            </div>

            {/* <p className="c-paragraph--small u-margin-top-smallest"><span className="u-subtler u-margin-left-smallest">In respect of your privacy, this website does not use trackers or analytics :)</span></p> */}
          </div>
        </section>
      </div>
    );
  }
}

export default withBreadcrumbs(Routes)(PartialFooter);
