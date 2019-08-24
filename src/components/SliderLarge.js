import React, { Component } from "react";
import Flickity from 'react-flickity-component'
import 'flickity/dist/flickity.min.css';

class SliderLarge extends React.Component {
  render() {
      return (
        <div
          className="c-wrapper c-wrapper--full"
          style={{background: this.props.background}}>
          <div className="c-container">
            <Flickity
              flickityRef={c => this.flickity = c}
              className={"c-carousel"}
              elementType={"section"}
              disableImagesLoaded={false}
              static
              options={{
                draggable: true,
                prevNextButtons: false,
                cellAlign: 'left',
                selectedAttraction: 0.1,
                friction: 0.8,
                dragThreshold: 1
            }}>
            {this.props.slides.map((content, index) =>
              <img className="c-carousel__item" src={content} key={index} />

            )}
          </Flickity>
        </div>
      </div>
    )
  }
}

export default SliderLarge;
