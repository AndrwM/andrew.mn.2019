import React, { Component } from "react";
import ryobi from "../../assets/images/logo-ryobi.png";
import depend from "../../assets/images/logo-depend.png";
import echo from "../../assets/images/logo-echo.png";
import pullups from "../../assets/images/logo-pullups.png";
import stok from "../../assets/images/logo-stok.png";
import ridgid from "../../assets/images/logo-ridgid.png";
import outdoor from "../../assets/images/logo-outdoor.png";
import clemson from "../../assets/images/logo-clemson.png";
import auburn from "../../assets/images/logo-auburn.png";
import tiy from "../../assets/images/logo-tiy.png";
import ubyk from "../../assets/images/logo-ubyk.png";

class Brands extends Component {
  render() {
    return (
      <div class="c-grid c-grid--middle c-grid--center c-grid--small u-subtler">
        <div class="c-grid__cell u-1/4 u-1/6--hand u-1/8--lap u-1/14--desk"><img src={ryobi} /></div>
        <div class="c-grid__cell u-1/4 u-1/6--hand u-1/8--lap u-1/14--desk"><img src={depend} /></div>
        <div class="c-grid__cell u-1/4 u-1/6--hand u-1/8--lap u-1/14--desk"><img src={echo} /></div>
        <div class="c-grid__cell u-1/4 u-1/6--hand u-1/8--lap u-1/14--desk"><img src={pullups} /></div>
        <div class="c-grid__cell u-1/4 u-1/6--hand u-1/8--lap u-1/14--desk"><img src={stok} /></div>
        <div class="c-grid__cell u-1/4 u-1/6--hand u-1/8--lap u-1/14--desk"><img src={ridgid} /></div>
        <div class="c-grid__cell u-1/4 u-1/6--hand u-1/8--lap u-1/14--desk"><img src={outdoor} /></div>
        <div class="c-grid__cell u-1/4 u-1/6--hand u-1/8--lap u-1/14--desk"><img src={clemson} /></div>
        <div class="c-grid__cell u-1/4 u-1/6--hand u-1/8--lap u-1/14--desk"><img src={auburn} /></div>
        <div class="c-grid__cell u-1/4 u-1/6--hand u-1/8--lap u-1/14--desk"><img src={tiy} /></div>
        <div class="c-grid__cell u-1/4 u-1/6--hand u-1/8--lap u-1/14--desk"><img src={ubyk} /></div>
      </div>
    );
  }
}

export default Brands;
