import React, { Component } from "react";
import Flickity from "react-flickity-component"
import "flickity/dist/flickity.min.css";

class SliderLarge extends React.Component {
  constructor(props){
    super(props);
    this.wrapper = React.createRef();
  }

  selectCell = (event, pointer, cellElement, cellIndex) => {
    this.flickity.selectCell(cellIndex);
  }

  scrollToTop = () => {
    this.wrapper.current.scrollIntoView({behavior: "smooth"});
  }

  componentDidMount() {
    this.flickity.on("staticClick", this.selectCell);
    this.flickity.on("change", this.scrollToTop);
  }

  componentWillUnmount() {
    this.flickity.off("staticClick", this.selectCell);
    this.flickity.off("change", this.scrollToTop);
  }

  render() {
      return (
        <div
          ref={this.wrapper}
          className="c-wrapper c-wrapper--full u-padding-top-large"
          style={{background: this.props.background}}
        >
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
                cellAlign: "left",
                selectedAttraction: 0.1,
                friction: 0.8,
                dragThreshold: 1
            }}>
            {this.props.slides.map((content, index) =>
              <div className="c-carousel__item" key={index}>
                <img src={content} />
              </div>

            )}
          </Flickity>
        </div>
      </div>
    )
  }
}

export default SliderLarge;
