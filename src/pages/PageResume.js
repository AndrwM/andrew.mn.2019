import React, { Component } from "react";

import WithPage from "../components/WithPage";

class PageResume extends Component {
  componentDidMount() {
    this.props.setAppState({
      headerContent: this.renderHeader()
    });
  }

  renderHeader() {
    return (
      <React.Fragment>
        <h1 className="c-title c-title--large">Resumé</h1>
        <p className="c-paragraph">I can plug and play as either a UI designer or front-end engineer on teams but I'm most comfortable as a hybrid of both: where I'm designing and prototyping new features and then executing to tested, production code with any necessary back-end integrations.</p>
      </React.Fragment>
    );
  }

  render() {
    return (
      <React.Fragment>
        <section className="c-wrapper c-wrapper--slimmest u-padding-top-large">
          <div className="c-container">
            <h2 className="c-title c-title--medium u-margin-bottom-small">Experience</h2>
            <div className="c-grid">
              <div className="c-grid__cell 1/6--lap">
                <h3 className="c-title c-title--label u-margin-top-smallest">2015 – 2017</h3>
              </div>
              <div className="c-grid__cell 5/6--lap">
                <h3 className="c-title c-title--small u-margin-bottom-none">The Iron Yard</h3>
                <h4 className="c-title c-title--smallest">Senior Product Designer</h4>
                <ul className="c-list">
                  <li className="c-list__item">Led design, development &amp; launch of The Iron Yard's new marketing site</li>
                  <li className="c-list__item">Led specification, design, and front-end development of custom admissions software</li>
                  <li className="c-list__item">Designed, built, and maintained modular design systems for each: online marketing site, student classroom application, and internal tooling</li>
                  <li className="c-list__item">Conducted student user-behavior studies to test design assumptions and solve usability issues</li>
                  <li className="c-list__item">Wrote application feature tests to ensure the stability of key user flows and UI components</li>
                  <li className="c-list__item">Built accessibility features to support student learning disabilities</li>
                  <li className="c-list__item">Worked remotely</li>
                </ul>
              </div>
            </div>
          </div>
        </section>
        <section className="c-wrapper c-wrapper--slimmest">
          <div className="c-container">
            <div className="c-grid">
              <div className="c-grid__cell 1/6--lap">
                <h3 className="c-title c-title--label u-margin-top-smallest">2012 – 2015</h3>
              </div>
              <div className="c-grid__cell 5/6--lap">
                <h3 className="c-title c-title--small u-margin-bottom-none">National International</h3>
                <h4 className="c-title c-title--smallest">Founder</h4>
                <ul className="c-list u-margin-bottom-smallest">
                  <li className="c-list__item">Planned, designed, and engineered mobile-responsive web software</li>
                  <li className="c-list__item">Performed usability interviews and testing to define end-user needs and behavior</li>
                  <li className="c-list__item">Leveraged extensive industry network to build a team of freelance engineers and designers</li>
                  <li className="c-list__item">Consulted with clients to develop strategies for meeting business goals with design</li>
                </ul>
                <p className="c-paragraph c-paragraph--sans c-paragraph--smallest u-subtle">Clients: Clemson University,  NFL,  The Iron Yard,  Auburn University</p>
              </div>
            </div>
          </div>
        </section>
        <section className="c-wrapper c-wrapper--slimmest">
          <div className="c-container">
            <div className="c-grid">
              <div className="c-grid__cell 1/6--lap">
                <h3 className="c-title c-title--label u-margin-top-smallest">2014 – 2015</h3>
              </div>
              <div className="c-grid__cell 5/6--lap">
                <h3 className="c-title c-title--small u-margin-bottom-none">Torque Creative, TTI North America</h3>
                <h4 className="c-title c-title--smallest">Interactive Designer</h4>
                <ul className="c-list">
                  <li className="c-list__item">Led online creative direction for new Echo Cordless power tool line marketing site</li>
                  <li className="c-list__item">Designed and engineered interactive, mobile-responsive eBlast campaigns for national brands</li>
                  <p className="c-paragraph c-paragraph--sans c-paragraph--smallest u-subtle">Clients: The Home Depot,  Echo Cordless,  Ridgid,  Ryobi Tools,  Stōk Grills</p>
                </ul>
              </div>
            </div>
          </div>
        </section>
        <section className="c-wrapper c-wrapper--slimmest">
          <div className="c-container">
            <div className="c-grid">
              <div className="c-grid__cell 1/6--lap">
                <h3 className="c-title c-title--label u-margin-top-smallest">2013 – 2014</h3>
              </div>
              <div className="c-grid__cell 5/6--lap">
                <h3 className="c-title c-title--small u-margin-bottom-none">Organic</h3>
                <h4 className="c-title c-title--smallest">Senior User Interface Developer</h4>
                <ul className="c-list">
                  <li className="c-list__item">Led interactive development for Depend Canada brand marketing website</li>
                  <li className="c-list__item">Led interactive development for Depend Underwearness Campaign video streaming player</li>
                  <li className="c-list__item">Developed engaging, mobile-responsive marketing websites for national brands</li>
                  <li className="c-list__item">Worked remotely</li>
                  <p className="c-paragraph c-paragraph--sans c-paragraph--smallest u-subtle">Clients: U By Kotex,  Depend USA,  Depend Underwearness,  Depend Canada, Huggies Pull-Ups</p>
                </ul>
              </div>
            </div>
          </div>
        </section>
        <section className="c-wrapper c-wrapper--slimmest">
          <div className="c-container">
            <div className="c-grid">
              <div className="c-grid__cell 1/6--lap">
                <h3 className="c-title c-title--label u-margin-top-smallest">2012 – 2014</h3>
              </div>
              <div className="c-grid__cell 5/6--lap">
                <h3 className="c-title c-title--small u-margin-bottom-none">Waldschmidt Partners International</h3>
                <h4 className="c-title c-title--smallest">Interactive Creative Director</h4>
                <ul className="c-list">
                  <li className="c-list__item">Developed interactive brand styleguide and internal web development standards</li>
                  <li className="c-list__item">Launched and manage 9 fully custom Wordpress website properties</li>
                  <li className="c-list__item">Managed site/database migrations and vendor relationships</li>
                </ul>
              </div>
            </div>
          </div>
        </section>
        <section className="c-wrapper c-wrapper--slimmest">
          <div className="c-container">
            <div className="c-grid">
              <div className="c-grid__cell 1/6--lap">
                <h3 className="c-title c-title--label u-margin-top-smallest">2012</h3>
              </div>
              <div className="c-grid__cell 5/6--lap">
                <h3 className="c-title c-title--small u-margin-bottom-none">The Iron Yard</h3>
                <h4 className="c-title c-title--smallest">Designer In Residence (2012 Startup Accelerator)</h4>
                <ul className="c-list">
                  <li className="c-list__item">Provided brand and user interface design services to The Iron Yard portfolio companies</li>
                </ul>
              </div>
            </div>
          </div>
        </section>
        <section className="c-wrapper c-wrapper--slimmest u-padding-bottom-large">
          <div className="c-container">
            <div className="c-grid">
              <div className="c-grid__cell 1/6--lap">
                <h3 className="c-title c-title--label u-margin-top-smallest">2010 - 2011</h3>
              </div>
              <div className="c-grid__cell 5/6--lap">
                <h3 className="c-title c-title--small u-margin-bottom-none">ER Design</h3>
                <h4 className="c-title c-title--smallest">Marketing Designer/Web Developer</h4>
                <ul className="c-list">
                  <li className="c-list__item">Designed and built interactive Flash websites with ActionScript 2.</li>
                  <li className="c-list__item">Built pixel-perfect HTML/CSS website development from Photoshop documents</li>
                </ul>
              </div>
            </div>
          </div>
        </section>
        <section className="c-wrapper c-wrapper--slim c-wrapper--light">
          <div className="c-container">
            <h2 className="c-title c-title--medium u-margin-bottom-small">Speaking</h2>
            <div className="u-margin-bottom">
              <h3 className="c-title c-title--small u-margin-bottom-none">Clemson University 2016 <span className="u-subtler">—</span> Guest Lecturer (Graphic Communications Department)</h3>
              <p className="c-paragraph c-paragraph--sans c-paragraph--small">I led a crash course on Javascript basics, jQuery, and the basics of debugging code to teach the class how to create a primitive budgeting calculator.</p>
            </div>
            <div className="u-margin-bottom">
              <h3 className="c-title c-title--small u-margin-bottom-none">The Iron Yard 2014 &amp; 2015 <span className="u-subtler">—</span> Regular Guest Lecturer</h3>
              <p className="c-paragraph c-paragraph--sans c-paragraph--small">Prior to working for The Iron Yard, I was a regular lecturer for their User Interface Design and Front-End Engineering classes in Austin,&nbsp;TX&nbsp;and Greenville, SC. I spoke on:</p>
              <ul className="c-list c-list--small">
                <li className="c-list__item">Importance Of Design Systems</li>
                <li className="c-list__item">Developer &amp; Designer Relations: How To Effectively Communicate</li>
                <li className="c-list__item">Design Asset Management &amp; Organization</li>
              </ul>
            </div>
            <div className="u-margin-bottom">
              <h3 className="c-title c-title--small u-margin-bottom-none">Clemson University 2014 <span className="u-subtler">—</span> Design Mentor (Startup Weekend Program)</h3>
              <p className="c-paragraph c-paragraph--sans c-paragraph--small u-margin-bottom-none">I taught collegiate startup companies user experience principles during my participation in the Clemson University Startup Weekend hackathon.</p>
            </div>
          </div>
        </section>
      </React.Fragment>
    );
  }
}

export default WithPage(PageResume);
