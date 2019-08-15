import React, { Component } from "react";
import Flickity from 'react-flickity-component'
import imageNewline from '../assets/images/projects/newline/v2-5.png';
import 'flickity/dist/flickity.min.css';

class SliderLarge extends React.Component {

  componentDidMount = () => {
    this.flickity.on('settle', () => {
      console.log(`current index is ${this.flickity.selectedIndex}`)
    })
  }

  // myCustomNext = () => {
  //   // You can use Flickity API
  //   this.flickity.next()
  // }

  render() {
      return (
        <div class="c-wrapper c-wrapper--full c-wrapper">
          <div class="c-container">
            <Flickity
              flickityRef={c => this.flickity = c}
              className={"c-carousel"}
              elementType={"section"}
              disableImagesLoaded={true}
              options={{
                draggable: true,
                prevNextButtons: false,
                cellAlign: 'left',
                selectedAttraction: 0.1,
                friction: 0.8,
                dragThreshold: 1
            }}>
            <div className="c-carousel__item">
              <h2 className="c-title c-title--medium u-margin-top-large">On-Brand Software Design System</h2>
              <p className="c-paragraph c-paragraph--sans c-paragraph--medium">Maintaining consistency with The Iron Yard's brand aesthetic was very important in building the version 1. The grey-oriented, responsible-feeling brand at this point, in early 2016, the company had over 3 years of equity invested.</p>
              <p className="c-paragraph c-paragraph--sans c-paragraph--medium">We began by designing prototypes of a few pages based on the wireframes that everyone on our team had agreed on. After a few prototypes of different pages, that categorically had different user goals, we felt that we were comfortable with the sub-brand we had created. From there we began breaking the layouts apart into elements that could all be designed individually and then reassembled. Our new design system.</p>
              <p className="c-paragraph c-paragraph--sans c-paragraph--medium">The pages to the right are several of the prototype pages that we developed in building the design system for The Iron Yard Online.</p>
            </div>
            <div className="c-carousel__item">
              <img src={imageNewline} />
            </div>
            <div className="c-carousel__item">
              <img src={imageNewline} />
            </div>
            <div className="c-carousel__item">
              <img src={imageNewline} />
            </div>
          </Flickity>
        </div>
      </div>
    )
  }
}

export default SliderLarge;
