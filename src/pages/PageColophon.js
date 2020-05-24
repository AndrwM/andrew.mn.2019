import React, { Component } from "react";

import WithPage from "../components/WithPage";

class PageColophon extends Component {
  componentDidMount() {
    this.props.setAppState({
      headerContent: this.renderHeader(),
      headerBg: "#fff3f9"
    });
  }

  renderHeader() {
    return (
      <React.Fragment>
      </React.Fragment>
    );
  }

  render() {
    return (
      <React.Fragment>
        <section className="c-wrapper u-padding-bottom">
          <h2 className="c-title c-title--small">Colophon</h2>
          <p className="c-paragraph">
            This site is built by hand and with love in React &amp; create-react-app.<br/> It's hosted on <a href="https://github.com/AndrwM/andrew.mn" target="blank" className="c-link c-link--arrow-remote">Github</a> and typeset in Graphik &amp; Louize.<br/> Photography courtesy of <a href="https://amoamostudio.com/" target="blank" className="c-link c-link--arrow-remote">Amo Amo Studio</a> &amp; <a href="http://www.angelazion.com/" target="blank" className="c-link c-link--arrow-remote">Angela Zion</a>.
          </p>
          <p className="c-paragraph c-paragraph--sans-small">
            <a href="https://github.com/AndrwM/andrew.mn" target="blank" className="c-link c-link--arrow-remote">Website Source</a>
          </p>
        </section>
      </React.Fragment>
    );
  }
}

export default WithPage(PageColophon);
