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
import imageHelix from "../assets/images/projects/helix/front.png";
import imageDependsCanada from "../assets/images/projects/depends/preview1.jpg";
import imageRge from "../assets/images/projects/rge/cover-1x.jpg";
import imageScCodes from "../assets/images/projects/sccodes/cover.jpg";

import imageConnectHero from "../assets/images/projects/connect-hero/cover.png";
// import imageTiy from "../assets/images/projects/tiy/preview1.jpg";
// import imageEcho from "../assets/images/projects/echo/feature-detail.jpg";
// import imageInjuryManager from "../assets/images/projects/injury-manager/mock-injury.jpg";
// import imageArkiver from "../assets/images/projects/arkiver/preview.png";

class PageCaseStudyIndex extends Component {
  componentDidMount() {
    this.props.setAppState({
      headerContent: this.renderHeader(),
      headerBg: "#ebf5ff"
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
          role="Principal&nbsp;Designer, Lead&nbsp;Frontend&nbsp;Engineer, Remote&nbsp;Full-Time"
          type="Design&nbsp;System, React&nbsp;Engineering, RoR&nbsp;Development"
          image={imageOffsite}
          url={false}
          cta="Case study coming September 2019."
          description={[
            "Working on Offsite, I was responsible for leading all:  <em> feature wireframing, design prototyping, UI design, design system engineering, frontend engineering architecture decisions, and frontend code review.</em>",
            "It's an advertising marketplace & ad generator bolted on top of Google Ads. It allows parties to share Google Ads audiences without disclosing/touching peoples personally identifiable information.",
            "The app exclusively uses a custom CSS/BEM-based design system and uses React to handle input and front-end validations on top of a HTML/ERB based Ruby On Rails enviroment."
          ]} />
        <CaseStudyPreview
          // backgroundStyle={{
          //   backgroundImage: `url(${imageNewlinePreview})`,
          //   position: "absolute",
          //   backgroundSize: "100%",
          //   backgroundRepeat: "no-repeat",
          //   bottom: 0,
          //   height: "104%",
          //   width: "123%",
          //   right: "-15.5%"
          // }}
          title="Newline Education Platform"
          timePeriod="2015 &ndash; 2017"
          type="UI&nbsp;Design&nbsp;System, Frontend&nbsp;Engineering, RoR&nbsp;Development"
          role="Senior&nbsp;UI&nbsp;Designer & Frontend&nbsp;Engineer, Remote&nbsp;Full-Time"
          image={imageNewline}
          url="/case-studies/newline"
          description={["Newline is the course-work software of The Iron Yard. I on the product team to bring a fun and interactive online classroom experience to over 10,000 students with our custom CSS design system.", "From the ground-up we designed, built, and documented a CSS component system with over 50 elements. It allowed anyone on the team to quickly assemble a view. In addition to authoring the design system, I worked with the engineering team in building the front-end for an in-browser IDE and student messaging system."]} />
        <section className="c-wrapper c-wrapper--flush u-border-bottom">
          <div className="c-container-2col">
            <div className="c-container-2col__item">
              <CaseStudyPreview
                context={["no-browser", "2col"]}
                title="Coindex Labs, Automated Cryptocurrency Trader"
                timePeriod="2017 &ndash; 2018"
                role="Director of Product Design, Part-Time"
                type="UI Design, Prototyping, React&nbsp;Design&nbsp;System&nbsp;Engineering"
                image={imageCoindex}
                url="/case-studies/coindex"
                description={[
                  "I joined Coindex Labs to lead the creation of the consumer-facing manager on top of the trading algorithm infrastructure that the company had created for their digital crypto investment fund.",
                  "During the company's Seed Round, I served as the Director of Product."
                ]} />
            </div>
            <div className="c-container-2col__item c-container-2col__item--stripe">
              <CaseStudyPreview
                context="2col"
                title="College Admissions Portal"
                timePeriod="2018"
                role="Lead UI Designer"
                type="UI&nbsp;Comps, Design&nbsp;System&nbsp;Documentation For Engineering Dept."
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
                title="Really Good Emails"
                timePeriod="2017 &ndash; 2018"
                role="Frontend Engineer"
                type="Design&nbsp;System&nbsp;Development, React/Redux&nbsp;Engineering"
                image={imageRge}
                url="https://reallygoodemails.com"
                cta="See The Site Live"
                description={[
                  "Really Good Emails is the #1 ranked design archive for marketing email designs.",
                  "Partnered with <a href='https://fathomanddraft.com/' target='_blank' class='c-link'>Fathom & Draft</a>, I worked with their design team develop a React SPA powered by Redux. From comps, I was responsible for the React-based design system and developing all views."
                ]} />
            </div>
            <div className="c-container-2col__item">
              {/* <CaseStudyPreview
                context="2col"
                title="Connect Hero"
                timePeriod="2018"
                role="Lead Designer"
                type="Wireframes"
                image={imageConnectHero}
                url="/case-studies/connect-hero"
                description={["A leading college admissions software platform on the west coast engaged us to design a new UI design system for their engineering team."]} /> */}
              <CaseStudyPreview
                context="2col"
                title="South Carolina Dept. Of Commerce <br/>Free Online Code Platform"
                timePeriod="2018"
                role="Lead Designer"
                type="Wireframes"
                image={imageScCodes}
                url="https://dashboard.sccodes.org/stats"
                cta="See The Stat Dashboard Today"
                description={["I worked with SC Codes a program funded by the South Carolina Dept. Of Commerce. We built a free code education courses and an adjoining community platform with job-listings and statistics visualization. It was a a hit at the press conference and made state-wide news publications such as the <a class='c-link' target='_blank' href='https://www.postandcourier.com/business/thousands-in-sc-have-signed-up-for-free-coding-school/article_aa96deae-5d25-11e9-9c52-6b5232c2d053.html'>The Post And Courier</a>. The non-profit program grew 2,000 in the following month."]} />
            </div>
          </div>
        </section>
        <section className="c-wrapper c-wrapper--flush">
          <div className="c-container-2col">
            <div className="c-container-2col__item">
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
            <div className="c-container-2col__item c-container-2col__item--stripe">
              <div className="c-title c-title--medium" children="More Work" />
              <p className="c-paragraph c-paragraph--medium">
                Due to privacy restrictions, some of my work is not available publicly. If you would like to see engineering or marketing samples, email me at <a className="c-link" href="mailto:Studio@Andrew.Mn">Studio@Andrew.Mn</a>.
              </p>
              <div className="c-title c-title--small u-padding-top u-border-top" children="Flatiron Code School" />
              <p className="c-paragraph c-paragraph--sans-medium">
                I worked with Flatiron Code School to develop introductory frontend engineering classes and the platform with-which to serve them as a part of their marketing funnel.
              </p>
              <div className="c-title c-title--small u-padding-top u-border-top" children="ECHO Tools, North America" />
              <p className="c-paragraph c-paragraph--sans-medium">
                I was responsible for leading design and engineering for the 2015 edition of the ECHO Tools battery powered outdoor tool line.
              </p>
              <div className="c-title c-title--small u-padding-top u-border-top" children="The Outdoor Channel" />
              <p className="c-paragraph c-paragraph--sans-medium">
                At the beginning of my career, I built over 15 interactive Adobe Flash tv show websites with Actionscript.
              </p>
            </div>
          </div>
        </section>
      </React.Fragment>
    );
  }

  // bullshitImNotShowing() {
  //   return(
  //     <CaseStudy2ColLayout caseStudyPreviews={[
  //       // <CaseStudyPreview
  //       //   context={["2col"]}
  //       //   title="TheIronYard.com"
  //       //   timePeriod="2017"
  //       //   type="UI Design System, Front-End Engineering, RoR Development"
  //       //   image={imageTiy}
  //       //   url={false}
  //       //   description={["Newline is the course-work software of The Iron Yard. I on the product team to bring a fun and interactive online classroom experience to over 10,000 students with our custom CSS design system.", "From the ground-up we designed, built, and documented a CSS component system with over 50 elements. It allowed anyone on the team to quickly assemble a view. In addition to authoring the design system, I worked with the engineering team in building the front-end for an in-browser IDE and student messaging system."]} />,
  //       // <CaseStudyPreview
  //       //   context={["2col"]}
  //       //   title="Echo Cordless Tools"
  //       //   timePeriod="2015"
  //       //   type="Lead Marketing Design, Lead Front-End Engineer"
  //       //   image={imageEcho}
  //       //   url={false}
  //       //   description={["In 2015 I was contracted by TTI North America's in-house design agency, Torque Creative, to create an interactive marketing website to showcase a new line of all-electric tools. This project was particularly special to me because Torque gave me access to their in-house photography division. I had autonomy to art-direct the imagery of the products I needed to complete the project."]} />,
  //       // ]} />
  //     <CaseStudy2ColLayout caseStudyPreviews={[
  //       <CaseStudyPreview
  //         context={["2col"]}
  //         title="Arkiver Life Journal"
  //         timePeriod="2013 – 2014"
  //         type="Lead UI Designer, Front-End Engineer"
  //         image={imageArkiver}
  //         url={false}
  //         description={["I began working with Arkiver when they needed to redesign their filtering interface and several other key views. Following our initial engagement, the founders of Arkiver loved the work and I continued working with them on a retainer basis for 2 years. Through the life of our engagement I designed their user onboarding flow, in-app sharing flow and assisted with the front-end development alongside their engineers."]} />,
  //       <CaseStudyPreview
  //         context={["2col"]}
  //         title="Depends Canada"
  //         timePeriod="2013"
  //         type="Lead Front-End Engineer"
  //         image={imageDependsCanada}
  //         url={false}
  //         description={["While working for Organic, Inc., I had the opportunity to lead the engineering for a brand new marketing website for the Canadian division of Depends adult incontinence products. In addition, I also oversaw how American and French language translations were implemented and managed their effect on the design specifications."]} />
  //     ]} />
  //     <CaseStudyPreview
  //       context={["2col"]}
  //       title="Employee Injury Manager"
  //       timePeriod="2014"
  //       type="Lead UI-Designer, Front-End Engineer"
  //       image={imageInjuryManager}
  //       url={false}
  //       description={["A majority of workers' compensation lawsuits were results of unclear policies, slow communication, and missing accountability. My client was building a SAAS employee injury management platform to solve the problem. I was brought in as a UX consultant to do design the flow of the application and create a UI design system."]} />
  //   )
  // }
}

export default WithPage(PageCaseStudyIndex);
