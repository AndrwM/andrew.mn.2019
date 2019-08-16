import React, { Component } from "react";

function WithPage(WrappedComponent) {
  return class extends Component {
    // constructor(props){
    //   super(props);
    //   this.state = { ready: false };
    // }

    componentDidMount() {
      window.scrollTo(0, 0);
    }

    // pageImages(imageArray){
    //   this.props.pictures.forEach((picture) => {
    //     const img = new Image();
    //     img.src = picture.fileName;
    // });
    // }

    render() {
      return(
        <WrappedComponent
          {...this.props}
        />
      );
    }
  };
}

export default WithPage;
