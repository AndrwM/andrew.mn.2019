import React, { Component } from "react";

class PageResumeHeader extends Component {
  render() {
    return (
      <header className="c-wrapper c-wrapper--light-blue c-wrapper--masked u-padding-bottom">
        <div className="c-container">
          <h1 className="c-title c-title--large">Resumé</h1>
          <p className="c-paragraph">I can plug and play as either a UI designer or front-end engineer on teams but I'm most comfortable as a hybrid of both: where I'm designing and prototyping new features and then executing to tested, production code with any necessary back-end integrations.</p>
          <p className="c-paragraph u-margin-bottom-large">Check out my experience.&nbsp;<span className="c-emoji">👇</span></p>
        </div>
      </header>
    );
  }
}

export default PageResumeHeader;
