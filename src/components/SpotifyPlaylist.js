import React, { Component } from "react";

class SpotifyPlaylist extends Component {
  constructor(props){
    super(props);

    this.state = {
      expand: false
    };
  }

  render() {
    return(
      <React.Fragment>
        <section
        onClick={() => this.setState({ expand: !this.state.expand })}
        className={`c-spotify ${this.state.expand ? "c-spotify--expand" : ""}`}
      >
          <div className="c-spotify__content">
            <h1 className="c-title c-title--on-dark c-title--small u-margin-none">
              {this.state.expand ? "Steak Association" : "Steak Association"}
            </h1>
            <p className="c-paragraph c-paragraph--on-dark c-paragraph--sans-small">
              {this.state.expand ? "Collapse Player" :  "Steaks on the grill, this time its personal."}
            </p>
          </div>
          <div
            className="c-spotify__cover"
            style={{ backgroundImage: `url(https://i.scdn.co/image/${this.props.coverId})` }} />
          <iframe
            className="c-spotify__iframe"
            src={`https://open.spotify.com/embed/playlist/${this.props.playlistId}`}
            width="100%"
            height="80"
            frameborder="0"
            allowtransparency="true"
            allow="encrypted-media"
          />
        </section>
      </React.Fragment>
    );
  }
};

export default SpotifyPlaylist;
