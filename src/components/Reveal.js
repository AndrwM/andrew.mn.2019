import React, { Component } from "react";
import VisibilitySensor from "react-visibility-sensor";

class Reveal extends Component {
  render() {
    return(
      // <VisibilitySensor onChange={this.setVisible}>
      //   {/* <div>I am {this.state.visible ? 'visible' : 'invisible'}</div> */}
      //   {this.props.children}
      // </VisibilitySensor>
      <VisibilitySensor partialVisibility={true}>
        {({ isVisible }) => {
          return (
            <div className={`u-reveal ${isVisible ? "u-reveal--active" : ""}`}>
              {this.props.children}
            </div>
          );
        }}
    </VisibilitySensor>
    );
  }
};

export default Reveal;
