import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import "./assets/stylesheets/main.scss";

class App extends Component {
  render() {
    return (
      <div className="c-page">
        <div className="c-wrapper c-wrapper--light-blue c-wrapper--masked">
          <div className="c-container u-animate-in">
            <h1 className="c-paragraph">
              <span className="c-emoji c-emoji--in-margin">🌤</span>&nbsp;&nbsp;<em>Hello!</em> <span className="u-subtle">—</span> My name is Andrew McIntee. I’m an Atlanta-based software designer with specialties in UI design &amp; front-end engineering.
            </h1>
            <p className="c-paragraph">
              Currently, I lead design and UI systems at <a className="c-link" href="http://www.divisionoflabor.xyz">Division Of Labor</a> and I"m a partner at <a className="c-link" href="http://coindex.fund">Coindex Fund</a>, a cryptocurrency management service.
            </p>
            <p className="c-paragraph">
              Prior to this, I worked as a senior software designer at <a className="c-link" href="https://newline.theironyard.com/">The Iron Yard</a>,<br/>ran a freelance UI agency, and engineered brand experiences at <a className="c-link" href="http://organic.com">Organic</a>.
            </p>
            <p className="c-paragraph">
              I’m interested in social inclusion, cycling, and the outdoors.
            </p>
            <p className="c-paragraph">
              <span className="c-emoji c-emoji--in-margin">🎉</span>&nbsp;&nbsp;Thanks for dropping by. Contact me by email at <a className="c-link" href="mailto:studio@andrew.mn">Studio@Andrew.mn</a>.
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
