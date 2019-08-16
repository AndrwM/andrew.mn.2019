import React, { Component } from "react";
import Flickity from 'react-flickity-component'
import 'flickity/dist/flickity.min.css';

class SliderLarge extends React.Component {
  componentDidMount = () => {
    this.flickity.on('settle', () => {
      console.log(`current index is ${this.flickity.selectedIndex}`)
    });
  }

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
            {this.props.slides.map((content, index) =>
              <div className="c-carousel__item" key={index}>
                {content}
              </div>
            )}
          </Flickity>
        </div>
      </div>
    )
  }
}

export default SliderLarge;
