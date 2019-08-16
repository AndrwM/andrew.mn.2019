import React, { Component } from "react";

function WithPage(PageComponent) {
  return class extends Component {
    // constructor(props){
    //   super(props);
    //   this.state = { ready: false };
    // }

    // pageImages(imageArray){
    //   this.props.pictures.forEach((picture) => {
    //     const img = new Image();
    //     img.src = picture.fileName;
    // });
    // }

    componentDidMount() {
      window.scrollTo(0, 0);
    }

    render() {
      return(
        <PageComponent
          {...this.props}
        />
      );
    }
  };
}

export default WithPage;
