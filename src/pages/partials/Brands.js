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
import bmw from "../../assets/images/logo-bmw.png";
import sc from "../../assets/images/logo-sc.png";
import flatiron from "../../assets/images/logo-flatiron.png";

class Brands extends Component {
  render() {
    return (
      <div className="c-grid c-grid--middle c-grid--center u-subtle">
        <div className="c-grid__cell u-1/9 u-1/13--desk"><img src={bmw} style={{width: "70%", margin: "auto"}} /></div>
        <div className="c-grid__cell u-1/9 u-1/13--desk"><img src={flatiron} className="u-margin-horizontal-xtiny" /></div>
        <div className="c-grid__cell u-1/9 u-1/13--desk"><img src={ryobi} className="u-margin-horizontal-xtiny" /></div>
        <div className="c-grid__cell u-1/9 u-1/13--desk"><img src={depend} className="u-margin-horizontal-xtiny" /></div>
        <div className="c-grid__cell u-1/9 u-1/13--desk u-hide--desk"><img src={echo} className="u-margin-horizontal-xtiny" /></div>
        <div className="c-grid__cell u-1/9 u-1/13--desk"><img src={pullups} className="u-margin-horizontal-xtiny" /></div>
        <div className="c-grid__cell u-1/9 u-1/13--desk"><img src={stok} className="u-margin-horizontal-xtiny" /></div>
        <div className="c-grid__cell u-1/9 u-1/13--desk u-hide--desk"><img src={ridgid} className="u-margin-horizontal-xtiny" /></div>
        <div className="c-grid__cell u-1/9 u-1/13--desk"><img src={outdoor} className="u-margin-horizontal-xtiny" /></div>
        <div className="c-grid__cell u-1/9 u-1/13--desk"><img src={clemson} className="u-margin-horizontal-xtiny" /></div>
        <div className="c-grid__cell u-1/9 u-1/13--desk u-hide--desk"><img src={auburn} className="u-margin-horizontal-xtiny" /></div>
        <div className="c-grid__cell u-1/9 u-1/13--desk"><img src={tiy} className="u-margin-horizontal-xtiny" /></div>
        <div className="c-grid__cell u-1/9 u-1/13--desk u-hide--desk"><img src={ubyk} className="u-margin-horizontal-xtiny" /></div>
      </div>
    );
  }
}

export default Brands;
