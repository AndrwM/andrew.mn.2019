import React, { Component } from "react";

import WithPage from "../components/WithPage";
import CaseStudyPreview from "../components/CaseStudyPreview";
import CaseStudy2ColLayout from "../components/CaseStudy2ColLayout";
import ExperienceDesign from "./partials/ExperienceDesign";
import ExperienceEngineering from "./partials/ExperienceEngineering";

import imageNewline from "../assets/images/projects/newline/v2-5.png";
import imageCoindex from "../assets/images/projects/coindex/1.png";
import imageConnectHero from "../assets/images/projects/connect-hero/cover.png";
import imageHelix from "../assets/images/projects/helix/front.png";
import imageTiy from "../assets/images/projects/tiy/preview1.jpg";
import imageEcho from "../assets/images/projects/echo/feature-detail.jpg";
import imageInjuryManager from "../assets/images/projects/injury-manager/mock-injury.jpg";
import imageArkiver from "../assets/images/projects/arkiver/preview.png";
import imageDependsCanada from "../assets/images/projects/depends/preview1.jpg";

class PageCaseStudyIndex extends Component {
  constructor(props) {
    super(props);

    this.state = { showArchive: false };
  }

  componentDidMount() {
    this.props.setAppState({
      headerContent: this.renderHeader(),
      headerBg: "#f1f9fc"
    });
  }

  renderHeader() {
    return (
      <React.Fragment>
        <h1 className="c-title c-title--xlarge">
          Case Studies 📡
        </h1>
      </React.Fragment>
    );
  }

  renderArchive() {
    if (this.state.showArchive) {
      return (
        <React.Fragment>
          <CaseStudy2ColLayout caseStudyPreviews={[
            <CaseStudyPreview
              context={["2col"]}
              title="TheIronYard.com"
              timePeriod="2017"
              type="UI System Designer, Front-End Engineer"
              image={imageTiy}
              url={false}
              description={["I designed and led the development of the new TheIronYard.com. The previous iteration of the company's website had dragged to a halt both in codebase update time and page-load due to technical debt accrued since the original launch in 2013. The Iron Yard marketing department brought me in to spearhead the development of a custom front-end CSS framework. This project was a burn and rebuild-from-the-ground-up type of project.","Following launch, the website bounce rate decreased 28.67% and the average session improved by 18.26%. Conversions of visitor to admissions lead increased by 98%!"]} />,
            <CaseStudyPreview
              context={["2col"]}
              title="Echo Cordless Tools"
              timePeriod="2015"
              type="Lead Marketing Design, Lead Front-End Engineer"
              image={imageEcho}
              url={false}
              description={["In 2015 I was contracted by TTI North America's in-house design agency, Torque Creative, to create an interactive marketing website to showcase a new line of all-electric tools. This project was particularly special to me because Torque gave me access to their in-house photography division. I had autonomy to art-direct the imagery of the products I needed to complete the project."]} />,
            ]} />
          <CaseStudy2ColLayout caseStudyPreviews={[
            <CaseStudyPreview
              context={["2col"]}
              title="Arkiver Life Journal"
              timePeriod="2013 – 2014"
              type="Lead UI Designer, Front-End Engineer"
              image={imageArkiver}
              url={false}
              description={["I began working with Arkiver when they needed to redesign their filtering interface and several other key views. Following our initial engagement, the founders of Arkiver loved the work and I continued working with them on a retainer basis for 2 years. Through the life of our engagement I designed their user onboarding flow, in-app sharing flow and assisted with the front-end development alongside their engineers."]} />,
            <CaseStudyPreview
              context={["2col"]}
              title="Depends Canada"
              timePeriod="2013"
              type="Lead Front-End Engineer"
              image={imageDependsCanada}
              url={false}
              description={["While working for Organic, Inc., I had the opportunity to lead the engineering for a brand new marketing website for the Canadian division of Depends adult incontinence products. In addition, I also oversaw how American and French language translations were implemented and managed their effect on the design specifications."]} />
          ]} />
        </React.Fragment>
      );
    }
  }

  render() {
    return (
      <React.Fragment>
        <section className="c-wrapper u-padding-bottom-none">
          <div className="c-container">
            <h2 className="c-title c-title--small">Design &amp; Programming Experience</h2>
            <p className="c-paragraph">
              Throughout my career I routinely switch-hit between UI design, front-end engineering, and some back-end engineering as well.
            </p>
            <p className="c-paragraph">
              While I’m not an expert in back-end development, as a self-taught professional I’m no stranger to digging in further down the tech-stack than is expected of me to build-out infrastructure necessary to support the UI I’m implementing. Whether its spinning up databases, writing queries, building models or controllers, etc &mdash; I have even built my own Elixir+Phoenix and RoR personal projects from scratch before. This has left me with a well-rounded set of skills especially suited for smaller development teams where some responsibilities can be ambiguous between dsiciplines.
            </p>
            <div className="c-grid c-grid--flush u-padding-top u-padding-bottom-small u-margin-vertical u-border-bottom">
              <div className="c-grid__cell u-1/2">
                <ExperienceDesign />
              </div>
              <div className="c-grid__cell u-1/2">
                <ExperienceEngineering />
              </div>
            </div>
            <p className="c-paragraph">
              Below you’ll find a collection of software projects I have participated in, in some-type of leadership capacity. Prior to my experience of 6 years in software development, I worked within the marketing world at national agencies as cross-disciplinary visual designer &amp; web developer.
            </p>
            <p className="c-paragraph">
              From time-to-time I still do marketing work for the software companies that I have been under employ with–it’s a vertical I’m very comfortable working and leading projects in. Please reach out if you’re interested in marketing samples&hellip;and now, do enjoy!
            </p>
          </div>
        </section>
        <CaseStudyPreview
          title="College Admissions Portal"
          timePeriod="2018"
          type="UI Design System Lead"
          image={imageHelix}
          url="/case-studies/college-admissions-portal"
          description={["A leading college admissions software platform on the west coast engaged us to design a new UI design system for their engineering team."]} />
        <CaseStudy2ColLayout caseStudyPreviews={[
          <CaseStudyPreview
            context={["no-browser", "2col"]}
            title="Coindex Blockchain Trading Platform"
            timePeriod="2018"
            type="Co-Founder, Chief Design Officer"
            image={imageCoindex}
            url="/case-studies/coindex"
            description={["A leading college admissions software platform on the west coast engaged us to design a new UI design system for their engineering team."]} />,
          <CaseStudyPreview
            context="2col"
            title="Connect Hero"
            timePeriod="2018"
            type="Design Lead, Wireframes"
            image={imageConnectHero}
            url="/case-studies/connect-hero"
            description={["A leading college admissions software platform on the west coast engaged us to design a new UI design system for their engineering team."]} />,
        ]} />
        <CaseStudyPreview
          title="Newline Education Platform"
          timePeriod="2015 – 2017"
          type="UI Design System, Front-End Engineering, RoR Development"
          image={imageNewline}
          url="/case-studies/newline"
          description={["Newline is the course-work software of The Iron Yard. I worked with fellow designer <a href='https://dribbble.com/jeremiah' className='c-link' target='_blank'>Jeremiah</a> to bring a fun and interactive online classroom experience to over 10,000 students with our custom CSS design system."]} />
        <div className="c-wrapper">
          <div className="c-container">
            <h2 className="c-title c-title--small">
              More Work
            </h2>
            <p className="c-paragraph">
            While working for Organic, Inc., I had the opportunity to lead the engineering for a brand new marketing website for the Canadian division of Depends adult incontinence products.
            </p>
            {
              !this.state.showArchive &&
              <a className="c-button" onClick={() => this.setState({ showArchive: true })} children="See More Work" />
            }
          </div>
        </div>
        {this.renderArchive()}
      </React.Fragment>
    );
  }

  bullshitImNotShowing() {
    return(
      <CaseStudyPreview
        context={["2col"]}
        title="Employee Injury Manager"
        timePeriod="2014"
        type="Lead UI-Designer, Front-End Engineer"
        image={imageInjuryManager}
        url={false}
        description={["A majority of workers' compensation lawsuits were results of unclear policies, slow communication, and missing accountability. My client was building a SAAS employee injury management platform to solve the problem. I was brought in as a UX consultant to do design the flow of the application and create a UI design system."]} />
    )
  }
}

export default WithPage(PageCaseStudyIndex);
