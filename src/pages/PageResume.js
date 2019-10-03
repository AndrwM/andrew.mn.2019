import React, { Component } from "react";
import { HashLink } from "react-router-hash-link";

import WithPage from "../components/WithPage";
import Reveal from "../components/Reveal";

class PageResume extends Component {
  componentDidMount() {
    this.props.setAppState({
      headerContent: this.renderHeader(),
      headerBg: "#fef5f0"
    });
  }

  renderHeader() {
    return (
      <React.Fragment />
    );
  }

  render() {
    return (
      <React.Fragment>
        <section className="c-wrapper">
          <div className="c-container">
            <h2 className="c-title c-title--small">Resumé</h2>
            <p className="c-paragraph c-paragraph--large">
              Designer &amp; web engineer of 8 years&hellip;<br/> Remote worker going on 4.
            </p>
            <p className="c-paragraph">
              I have been working full-time in the web development, marketing design, or digital product space for the past 8 years; of those, 4 of them have been full-time remote. Most recently I was lead _for all_ of the user experience, design, and frontend at my most recent company, a 17-employee digital product agency.
            </p>
            <p className="c-paragraph">
              In my time within the digital product space, I have had the privalage of being mentored by seniors and have also had the opportunity to pay it back through web engineering workshops and mentoring the juniors below me.
            </p>
            <h2 className="c-title c-title--small u-margin-top">What I'm Looking For In My Next Opportunity&hellip;</h2>
            <p className="c-paragraph">
              I'm looking to join a small to medium sized digital product agency or software product where I can continue honing my skillset towards the career-path of being a product owner; responsible for all design, engineering, or both. My preference is to work on a geographically distributed team with team members who also find they are the most productive when they routinely change their working enviroment.
            </p>
            <HashLink smooth to="#professional-experience" className="c-button c-button--arrow-d">Professional Experience</HashLink>
          </div>
        </section>
        <section className="c-wrapper c-wrapper--slimmest u-border-top u-padding-top-large" id="professional-experience">
          <div className="c-container">
            <h2 className="c-title c-title--medium u-margin-vertical">Professional Experience</h2>
            <div className="c-grid">
              <div className="c-grid__cell 1/6--lap">
                <h3 className="c-title c-title--label u-margin-top-smallest">2017 – 2019</h3>
              </div>
              <div className="c-grid__cell 5/6--lap">
                <h3 className="c-title c-title--small u-margin-bottom-none">Division Of Labor Product Agency</h3>
                <h4 className="c-title c-title--smallest">Lead Product Designer &amp; Sr. frontend Engineer</h4>
                <ul className="c-list u-margin-bottom-smallest">
                  <li className="c-list__item">Responsible for all design systems, design processes, and frontend UI implementations accross all projects</li>
                  <li className="c-list__item">Lead wireframes, hi-fidelity UI comps, frontend engineering, and direct user feedback for all software projects</li>
                  <li className="c-list__item">Built our own in-house design system and frontend react library</li>
                  <li className="c-list__item">Interfaced directly with our clients as the design director</li>
                  <li className="c-list__item">Developed frontend engineering best practices and documention</li>
                  <li className="c-list__item">Nurtured software design systems accross changing marketing or engineering requirements</li>
                  <li className="c-list__item">Represented the design department as one of the 3 primary disciplines of the 17 employee company, next to engineering &amp; marketing</li>
                  <li className="c-list__item">Deployed features in Elixir/Phoenix, React/Redux SPA, and Ruby On Rails enviroments</li>
                  <li className="c-list__item">Worked 100% remotely</li>
                </ul>
                <p className="c-paragraph c-paragraph--sans-smallest u-subtle">Clients: BMW, FlatIron Code School, South Carolina Dept. Of Commerce</p>
              </div>
            </div>
          </div>
        </section>
        <section className="c-wrapper c-wrapper--slimmest">
          <div className="c-container">
            <div className="c-grid">
              <div className="c-grid__cell 1/6--lap">
                <h3 className="c-title c-title--label u-margin-top-smallest">2017 - 2018</h3>
              </div>
              <div className="c-grid__cell 5/6--lap">
                <h3 className="c-title c-title--small u-margin-bottom-none">Coindex Blockchain Trading Platform</h3>
                <h4 className="c-title c-title--smallest">Co-Founder, Director of Product Design</h4>
                <ul className="c-list u-margin-bottom-smallest">
                  <li className="c-list__item">YCombinator top 15 applicant</li>
                  <li className="c-list__item">Responsible for all product design &amp; UI engineering</li>
                  <li className="c-list__item">Responsible for all marketing visual design &amp; web development</li>
                </ul>
              </div>
            </div>
          </div>
        </section>
        <section className="c-wrapper c-wrapper--slimmest">
          <div className="c-container">
            <div className="c-grid">
              <div className="c-grid__cell 1/6--lap">
                <h3 className="c-title c-title--label u-margin-top-smallest">2015 – 2017</h3>
              </div>
              <div className="c-grid__cell 5/6--lap">
                <h3 className="c-title c-title--small u-margin-bottom-none">The Iron Yard</h3>
                <h4 className="c-title c-title--smallest">Sr. Product Designer</h4>
                <ul className="c-list">
                  <li className="c-list__item">Led design, development &amp; launch of The Iron Yard's new marketing site</li>
                  <li className="c-list__item">Led specification, design, and frontend development of custom admissions software</li>
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
                <p className="c-paragraph c-paragraph--sans-smallest u-subtle">Clients: Clemson University,  NFL,  The Iron Yard,  Auburn University</p>
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
                  <p className="c-paragraph c-paragraph--sans-smallest u-subtle">Clients: The Home Depot,  Echo Cordless,  Ridgid,  Ryobi Tools,  Stōk Grills</p>
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
                <h4 className="c-title c-title--smallest">Sr. User Interface Developer</h4>
                <ul className="c-list">
                  <li className="c-list__item">Led interactive development for Depend Canada brand marketing website</li>
                  <li className="c-list__item">Led interactive development for Depend Underwearness Campaign video streaming player</li>
                  <li className="c-list__item">Developed engaging, mobile-responsive marketing websites for national brands</li>
                  <li className="c-list__item">Worked remotely</li>
                  <p className="c-paragraph c-paragraph--sans-smallest u-subtle">Clients: U By Kotex,  Depend USA,  Depend Underwearness,  Depend Canada, Huggies Pull-Ups</p>
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
        <section className="c-wrapper c-wrapper--slim c-wrapper--light u-padding-top-large">
          <div className="c-container">
            <h2 className="c-title c-title--medium u-margin-bottom-small">Speaking</h2>
            <div className="u-margin-bottom">
              <h3 className="c-title c-title--small u-margin-bottom-none">Clemson University 2016</h3>
              <h4 className="c-title c-title--smallest">Guest Lecturer (Graphic Communications Department)</h4>
              <p className="c-paragraph c-paragraph--sans-small">I led a crash course on Javascript basics, jQuery, and the basics of debugging code to teach the class how to create a primitive budgeting calculator.</p>
            </div>
            <div className="u-margin-bottom">
              <h3 className="c-title c-title--small u-margin-bottom-none">The Iron Yard Code School 2014 &amp; 2015</h3>
              <h4 className="c-title c-title--smallest">Regular Guest Lecturer</h4>
              <p className="c-paragraph c-paragraph--sans-small">Prior to working for The Iron Yard, I was a regular lecturer for their User Interface Design and frontend Engineering classes in Austin,&nbsp;TX&nbsp;and Greenville, SC. I spoke on:</p>
              <ul className="c-list c-list--small">
                <li className="c-list__item">Importance Of Design Systems</li>
                <li className="c-list__item">Developer &amp; Designer Relations: How To Effectively Communicate</li>
                <li className="c-list__item">Design Asset Management &amp; Organization</li>
              </ul>
            </div>
            <div className="u-margin-bottom">
              <h3 className="c-title c-title--small u-margin-bottom-none">Clemson University 2014</h3>
              <h4 className="c-title c-title--smallest">Design Mentor (Startup Weekend Program)</h4>
              <p className="c-paragraph c-paragraph--sans-small">I taught collegiate startup companies user experience principles during my participation in the Clemson University Startup Weekend hackathon.</p>
            </div>
          </div>
        </section>
        <section className="c-wrapper c-wrapper--slim c-wrapper--white u-padding-top-large">
          <div className="c-container">
            <h2 className="c-title c-title--medium u-margin-bottom-small">Contact Info</h2>
            <div className="u-margin-bottom">
              <h3 className="c-title c-title--small">Andrew McIntee</h3>
              <p className="c-paragraph c-paragraph--sans-small">Digital Product Designer &amp; Frontend Engineer</p>
              <p className="c-paragraph c-paragraph--sans-small">
                <a href="mailto:Studio@Andrew.mn" className="c-link u-margin-right-small">Studio@Andrew.mn</a>
                <a href="https://www.linkedin.com/in/AndrewMcIntee/" target="_blank" className="c-link">Linkedin</a>
              </p>
            </div>
          </div>
        </section>
      </React.Fragment>
    );
  }
}

export default WithPage(PageResume);
