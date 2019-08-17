import React, { Component } from "react";

import WithPage from "../components/WithPage";
import CaseStudyPreview from "../components/CaseStudyPreview";
import CaseStudy2ColLayout from "../components/CaseStudy2ColLayout";

import imageNewline from '../assets/images/projects/newline/v2-5.png';

class PageCaseStudyIndex extends Component {
  componentDidMount() {
    this.props.setAppState({
      headerContent: this.renderHeader()
    });
  }

  renderHeader() {
    return (
      <React.Fragment>
        <h1 className="c-title c-title--large">
          Case Studies
        </h1>
        <p className="c-paragraph c-paragraph--large">
          For more information on my experience and skillset check out <a className="c-link" href="/about/resume/#🚀">my resumé</a>.
        </p>
        {/* <p className="c-paragraph c-paragraph--large">
          I have had the privilege of working with brands such as The Home Depot, U By Kotex, The Outdoor Channel, and others. For more information on my experience and skillset check out <a className="c-link" href="/about/resume/#🚀">my resumé</a>.
        </p> */}
      </React.Fragment>
    );
  }

  render() {
    return (
      <React.Fragment>
        <CaseStudyPreview
          title="Newline Education Platform"
          timePeriod="2015 – 2017"
          type="UI Design System, Front-End Engineering, RoR Development"
          image={imageNewline}
          url="/case-studies/newline"
        >
          <p className="c-paragraph c-paragraph--sans c-paragraph--medium">Newline is the course-work software of The Iron Yard. I worked with fellow designer <a href="https://dribbble.com/jeremiah" className="c-link" target="_blank">Jeremiah</a> to bring a fun and interactive online classroom experience to over 10,000 students with our custom CSS design system.</p>
        </CaseStudyPreview>
        <CaseStudyPreview
          title="Newline Education Platform"
          timePeriod="2015 – 2017"
          type="UI Design System, Front-End Engineering, RoR Development"
          image={imageNewline}
          url="/case-studies/newline"
        >
          <p className="c-paragraph c-paragraph--sans c-paragraph--medium">Newline is the course-work software of The Iron Yard. I worked with fellow designer <a href="https://dribbble.com/jeremiah" className="c-link" target="_blank">Jeremiah</a> to bring a fun and interactive online classroom experience to over 10,000 students with our custom CSS design system.</p>
        </CaseStudyPreview>
        <CaseStudyPreview
          title="Newline Education Platform"
          timePeriod="2015 – 2017"
          type="UI Design System, Front-End Engineering, RoR Development"
          image={imageNewline}
          url="/case-studies/newline"
        >
          <p className="c-paragraph c-paragraph--sans c-paragraph--medium">Newline is the course-work software of The Iron Yard. I worked with fellow designer <a href="https://dribbble.com/jeremiah" className="c-link" target="_blank">Jeremiah</a> to bring a fun and interactive online classroom experience to over 10,000 students with our custom CSS design system.</p>
        </CaseStudyPreview>
        <CaseStudyPreview
          title="Newline Education Platform"
          timePeriod="2015 – 2017"
          type="UI Design System, Front-End Engineering, RoR Development"
          image={imageNewline}
          url="/case-studies/newline"
        >
          <p className="c-paragraph c-paragraph--sans c-paragraph--medium">Newline is the course-work software of The Iron Yard. I worked with fellow designer <a href="https://dribbble.com/jeremiah" className="c-link" target="_blank">Jeremiah</a> to bring a fun and interactive online classroom experience to over 10,000 students with our custom CSS design system.</p>
        </CaseStudyPreview>
        <CaseStudyPreview
          title="Newline Education Platform"
          timePeriod="2015 – 2017"
          type="UI Design System, Front-End Engineering, RoR Development"
          image={imageNewline}
          url="/case-studies/newline"
        >
          <p className="c-paragraph c-paragraph--sans c-paragraph--medium">Newline is the course-work software of The Iron Yard. I worked with fellow designer <a href="https://dribbble.com/jeremiah" className="c-link" target="_blank">Jeremiah</a> to bring a fun and interactive online classroom experience to over 10,000 students with our custom CSS design system.</p>
        </CaseStudyPreview>
        <CaseStudy2ColLayout caseStudyPreviews={[
          <CaseStudyPreview
            small={true}
            title="Newline Education Platform"
            timePeriod="2015 – 2017"
            type="UI Design System, Front-End Engineering, RoR Development"
            image={imageNewline}
            url="/case-studies/newline"
            >
            <p className="c-paragraph c-paragraph--sans c-paragraph--medium">Newline is the course-work software of The Iron Yard. I worked with fellow designer <a href="https://dribbble.com/jeremiah" className="c-link" target="_blank">Jeremiah</a> to bring a fun and interactive online classroom experience to over 10,000 students with our custom CSS design system.</p>
          </CaseStudyPreview>,
          <CaseStudyPreview
            small={true}
            title="Newline Education Platform"
            timePeriod="2015 – 2017"
            type="UI Design System, Front-End Engineering, RoR Development"
            image={imageNewline}
            url="/case-studies/newline"
            >
            <p className="c-paragraph c-paragraph--sans c-paragraph--medium">Newline is the course-work software of The Iron Yard. I worked with fellow designer <a href="https://dribbble.com/jeremiah" className="c-link" target="_blank">Jeremiah</a> to bring a fun and interactive online classroom experience to over 10,000 students with our custom CSS design system.</p>
          </CaseStudyPreview>
        ]} />
        <CaseStudy2ColLayout caseStudyPreviews={[
          <CaseStudyPreview
            small={true}
            title="Newline Education Platform"
            timePeriod="2015 – 2017"
            type="UI Design System, Front-End Engineering, RoR Development"
            image={imageNewline}
            url="/case-studies/newline"
            >
            <p className="c-paragraph c-paragraph--sans c-paragraph--medium">Newline is the course-work software of The Iron Yard. I worked with fellow designer <a href="https://dribbble.com/jeremiah" className="c-link" target="_blank">Jeremiah</a> to bring a fun and interactive online classroom experience to over 10,000 students with our custom CSS design system.</p>
          </CaseStudyPreview>,
          <CaseStudyPreview
            small={true}
            title="Newline Education Platform"
            timePeriod="2015 – 2017"
            type="UI Design System, Front-End Engineering, RoR Development"
            image={imageNewline}
            url="/case-studies/newline"
            >
            <p className="c-paragraph c-paragraph--sans c-paragraph--medium">Newline is the course-work software of The Iron Yard. I worked with fellow designer <a href="https://dribbble.com/jeremiah" className="c-link" target="_blank">Jeremiah</a> to bring a fun and interactive online classroom experience to over 10,000 students with our custom CSS design system.</p>
          </CaseStudyPreview>
        ]} />
      </React.Fragment>
    );
  }
}

export default WithPage(PageCaseStudyIndex);
