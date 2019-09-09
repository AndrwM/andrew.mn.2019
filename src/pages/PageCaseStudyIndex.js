import React, { Component } from "react";
import { Link } from "react-router-dom";

import WithPage from "../components/WithPage";
import Reveal from '../components/Reveal';
import CaseStudyPreview from "../components/CaseStudyPreview";
import CaseStudy2ColLayout from "../components/CaseStudy2ColLayout";
import ExperienceDesign from "./partials/ExperienceDesign";
import ExperienceEngineering from "./partials/ExperienceEngineering";

import imageOffsite from "../assets/images/projects/offsite/cover1.png";
import imageNewlinePreview from "../assets/images/projects/newline/2019-folio-preview.jpg";
import imageNewline from "../assets/images/projects/newline/v2-5.png";
import imageCoindex from "../assets/images/projects/coindex/1.png";
import imageConnectHero from "../assets/images/projects/connect-hero/cover.png";
import imageHelix from "../assets/images/projects/helix/front.png";
import imageTiy from "../assets/images/projects/tiy/preview1.jpg";
import imageEcho from "../assets/images/projects/echo/feature-detail.jpg";
import imageInjuryManager from "../assets/images/projects/injury-manager/mock-injury.jpg";
import imageArkiver from "../assets/images/projects/arkiver/preview.png";
import imageDependsCanada from "../assets/images/projects/depends/preview1.jpg";
import imageRge from "../assets/images/projects/rge/cover-1x.jpg";

class PageCaseStudyIndex extends Component {
  constructor(props) {
    super(props);

    this.state = { showArchive: false };
  }

  componentDidMount() {
    this.props.setAppState({
      headerContent: this.renderHeader(),
      headerBg: "#ebf5ff"
    });
  }

  renderHeader() {
    return (
      <React.Fragment>
        {/* <h1 className="c-title c-title--xlarge u-margin-bottom">
          Case Studies 📡
        </h1> */}
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
              type="UI Design System, Front-End Engineering, RoR Development"
              image={imageTiy}
              url={false}
              description={["Newline is the course-work software of The Iron Yard. I on the product team to bring a fun and interactive online classroom experience to over 10,000 students with our custom CSS design system.", "From the ground-up we designed, built, and documented a CSS component system with over 50 elements. It allowed anyone on the team to quickly assemble a view. In addition to authoring the design system, I worked with the engineering team in building the front-end for an in-browser IDE and student messaging system."]} />,
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
        <section className="c-wrapper u-padding-bottom">
          <div className="c-container">
            <h2 className="c-title c-title--small">Case Studies</h2>
            <p className="c-paragraph c-paragraph--large">
              Throughout my career, I have switch-hit between digital&nbsp;product&nbsp;design &amp; frontend&nbsp;engineering<br/> with occasional work on the backend too.
            </p>
            <p className="c-paragraph">
              While I’m not an expert in back-end development, as a self-taught professional I’m no stranger to digging in further down the tech-stack than is expected of me to build-out infrastructure necessary to support the UI I’m implementing. Whether its spinning up databases, writing queries, building models or controllers, etc &ndash; I have even built my own Elixir+Phoenix and RoR personal projects from scratch before. This has left me with a well-rounded set of skills especially suited for smaller development teams where some responsibilities can be ambiguous between dsiciplines.
            </p>
            <div className="c-grid u-padding-top u-padding-bottom-small u-margin-bottom-large u-border-bottom">
              <div className="c-grid__cell u-1/2--desk">
                <h2 className="c-title c-title--small u-margin-top-small">Design Experience</h2>
                <ExperienceDesign />
              </div>
              <div className="c-grid__cell u-1/2--desk">
                <h2 className="c-title c-title--small u-margin-top-small">Programming Experience</h2>
                <ExperienceEngineering />
              </div>
            </div>
            <p className="c-paragraph">
              Below you’ll find a collection of software projects I have participated in, in some-type of leadership capacity. Prior to my experience of 6 years in software development, I worked within the marketing world at national agencies as cross-disciplinary visual designer &amp; web developer.
            </p>
          </div>
        </section>
        <CaseStudyPreview
          title="OffSite Ad Platform"
          timePeriod="2018 &ndash; 2019"
          role="Lead Designer"
          type="Design System, React Engineering, RoR Development"
          image={imageOffsite}
          url={false}
          cta="Case study coming September 2019."
          description={["Newline is the course-work software of The Iron Yard. I on the product team to bring a fun and interactive online classroom experience to over 10,000 students with our custom CSS design system.", "From the ground-up we designed, built, and documented a CSS component system with over 50 elements. It allowed anyone on the team to quickly assemble a view. In addition to authoring the design system, I worked with the engineering team in building the front-end for an in-browser IDE and student messaging system."]} />
        <CaseStudyPreview
          backgroundStyle={{
            backgroundImage: `url(${imageNewlinePreview})`,
            position: "absolute",
            backgroundSize: "100%",
            backgroundRepeat: "no-repeat",
            bottom: 0,
            height: "104%",
            width: "123%",
            right: "-15.5%"
          }}
          title="Newline Education Platform"
          timePeriod="2015 &ndash; 2017"
          type="UI Design System, Front-End Engineering, RoR Development"
          image={imageNewline}
          url="/case-studies/newline"
          description={["Newline is the course-work software of The Iron Yard. I on the product team to bring a fun and interactive online classroom experience to over 10,000 students with our custom CSS design system.", "From the ground-up we designed, built, and documented a CSS component system with over 50 elements. It allowed anyone on the team to quickly assemble a view. In addition to authoring the design system, I worked with the engineering team in building the front-end for an in-browser IDE and student messaging system."]} />
        <section className="c-wrapper c-wrapper--flush u-border-bottom">
          <div className="c-container-2col">
            <div className="c-container-2col__item">
              <CaseStudyPreview
                context={["no-browser", "2col"]}
                title="Coindex Blockchain Trading Platform"
                timePeriod="2017 &ndash; 2018"
                role="Cofounder, Director Of Product Design"
                type="UI Design, Prototyping, Design&nbsp;System&nbsp;Engineering"
                image={imageCoindex}
                url="/case-studies/coindex"
                description={["A leading college admissions software platform on the west coast engaged us to design a new UI design system for their engineering team."]} />
            </div>
            <div className="c-container-2col__item c-container-2col__item--stripe">
              <CaseStudyPreview
                context="2col"
                title="College Admissions Portal"
                timePeriod="2018"
                type="Lead Designer: Design Systems"
                image={imageHelix}
                url="/case-studies/college-admissions-portal"
                description={["A leading college admissions software platform on the west coast engaged us to design a new UI design system for their engineering team."]} />
            </div>
          </div>
        </section>
        <section className="c-wrapper c-wrapper--flush u-border-bottom">
          <div className="c-container-2col">
            <div className="c-container-2col__item c-container-2col__item--stripe">
              <CaseStudyPreview
                context="2col"
                title="Depends Canada Site"
                timePeriod="2013"
                role="Lead Frontend Engineer"
                type="UI Engineering on a .NET backend"
                image={imageDependsCanada}
                url={false}
                description={["While working for Organic, Inc., I had the opportunity to lead the engineering for a brand new marketing website for the Canadian division of Depends adult incontinence products. In addition, I also oversaw how American and French language translations were implemented and managed their effect on the design specifications."]} />
            </div>
            <div className="c-container-2col__item">
              <div className="c-title c-title--medium" children="Non-Profit Work" />
              <p className="c-paragraph c-paragraph--medium">
                Due to privacy restrictions, some of my work is not available publicly. If you would like to see engineering or marketing samp.
              </p>
              <div className="c-title c-title--small u-padding-top u-border-top" children="SC Codes" />
              <p className="c-paragraph c-paragraph--sans-medium">
                Due to privacy restrictions, some of my work is not available publicly. If you would like to see engineering or marketing samp.
              </p>
              <div className="c-title c-title--small u-padding-top u-border-top" children="UpState Montessori" />
              <p className="c-paragraph c-paragraph--sans-medium">
                Due to privacy restrictions, some of my work is not available publicly. If you would like to see engineering or marketing samp.
              </p>
              <div className="c-title c-title--small u-padding-top u-border-top" children="Build Carolina" />
              <p className="c-paragraph c-paragraph--sans-medium">
                Due to privacy restrictions, some of my work is not available publicly. If you would like to see engineering or marketing samp.
              </p>
            </div>
          </div>
        </section>
        <section className="c-wrapper c-wrapper--flush u-border-bottom">
          <div className="c-container-2col">
            <div className="c-container-2col__item">
              <CaseStudyPreview
                context="2col"
                title="Really Good Emails"
                timePeriod="2017 &ndash; 2018"
                role="Frontend Engineer"
                type="Design System Development, React/Redux Engineering"
                image={imageRge}
                url={false}
                cta={false}
                description={["A leading college admissions software platform on the west coast engaged us to design a new UI design system for their engineering team."]} />
            </div>
            <div className="c-container-2col__item c-container-2col__item--stripe">
              <CaseStudyPreview
                context="2col"
                title="Connect Hero"
                timePeriod="2018"
                role="Lead Designer"
                type="Wireframes"
                image={imageConnectHero}
                url="/case-studies/connect-hero"
                description={["A leading college admissions software platform on the west coast engaged us to design a new UI design system for their engineering team."]} />
            </div>
          </div>
        </section>
        <div className="c-wrapper">
          <div className="c-container">
            <Reveal>
              <h2 className="c-title c-title--small">
                More Work
              </h2>
            </Reveal>
            <Reveal>
              <p className="c-paragraph">
                Due to privacy restrictions, some of my work is not available publicly. If you would like to see engineering or marketing samples: <Link to="/case-studies" className="c-link">Studio@Andrew.mn</Link>.
              </p>
          </Reveal>
            {/*
              !this.state.showArchive &&
              <a className="c-button" onClick={() => this.setState({ showArchive: true })} children="See More Work" />
            */}
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
