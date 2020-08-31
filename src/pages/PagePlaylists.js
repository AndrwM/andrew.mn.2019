import React, { Component } from "react";
import { Link } from "react-router-dom";

import WithPage from "../components/WithPage";
import Reveal from '../components/Reveal';
import SpotifyPlaylist from '../components/SpotifyPlaylist';
import ExperienceDesign from "./partials/ExperienceDesign";
import ExperienceEngineering from "./partials/ExperienceEngineering";
import Brands from "./partials/Brands";

class PagePlaylists extends Component {
  componentDidMount() {
    this.props.setAppState({
      headerContent: this.renderHeader(),
      theme: "#faffd2"
    });
  }

  renderHeader() {
    return (
      <React.Fragment>
        <p className="c-paragraph c-paragraph--large">
          Playlists through the years&hellip;
        </p>
        <p className="c-paragraph">
          I make playlists to timebox life moments. 🧏<br/>
          Thanks for visiting.
        </p>
      </React.Fragment>
    );
  }

  render() {
    return(
      <React.Fragment>
        <section className="c-wrapper c-wrapper--slimmest u-padding-vertical-large">
          <div className="c-container">
            <ul className="c-grid c-grid--small c-grid--middle">
              <li className="c-grid__cell u-1/2--lap u-1/3--desk">
                <SpotifyPlaylist
                  coverId="ab67706c0000bebb07f3d477c5edd1d82e5973d3"
                  playlistId="3ordxhoNATswfxQ7d13utS"
                />
              </li>
              <li className="c-grid__cell u-1/2--lap u-1/3--desk">
                <SpotifyPlaylist
                  coverId="ab67706c0000bebb2c5a636446c36757cd344a40"
                  playlistId="57fy4W5AOGwcLvRbRHs6WQ"
                />
              </li>
              <li className="c-grid__cell u-1/2--lap u-1/3--desk">
                <SpotifyPlaylist
                  coverId="ab67706c0000bebb2c5a636446c36757cd344a40"
                  playlistId="57fy4W5AOGwcLvRbRHs6WQ"
                />
              </li>
              <li className="c-grid__cell u-1/2--lap u-1/3--desk">
                <SpotifyPlaylist
                  coverId="ab67706c0000bebb07f3d477c5edd1d82e5973d3"
                  playlistId="3ordxhoNATswfxQ7d13utS"
                />
              </li>
              <li className="c-grid__cell u-1/2--lap u-1/3--desk">
                <SpotifyPlaylist
                  coverId="ab67706c0000bebb07f3d477c5edd1d82e5973d3"
                  playlistId="3ordxhoNATswfxQ7d13utS"
                />
              </li>
              <li className="c-grid__cell u-1/2--lap u-1/3--desk">
                <SpotifyPlaylist
                  coverId="ab67706c0000bebb07f3d477c5edd1d82e5973d3"
                  playlistId="3ordxhoNATswfxQ7d13utS"
                />
              </li>
              <li className="c-grid__cell u-1/2--lap u-1/3--desk">
                <SpotifyPlaylist
                  coverId="ab67706c0000bebb07f3d477c5edd1d82e5973d3"
                  playlistId="3ordxhoNATswfxQ7d13utS"
                />
              </li>
              <li className="c-grid__cell u-1/2--lap u-1/3--desk">
                <SpotifyPlaylist
                  coverId="ab67706c0000bebb07f3d477c5edd1d82e5973d3"
                  playlistId="3ordxhoNATswfxQ7d13utS"
                />
              </li>
              <li className="c-grid__cell u-1/2--lap u-1/3--desk">
                <SpotifyPlaylist
                  coverId="ab67706c0000bebb07f3d477c5edd1d82e5973d3"
                  playlistId="3ordxhoNATswfxQ7d13utS"
                />
              </li>
            </ul>
          </div>
        </section>
      </React.Fragment>
    );
  }
}

export default WithPage(PagePlaylists);
