import React, { useState } from "react";
import "./App.scss";
import TweetArea from "./components/TweetArea";
import SwitchTheme from "./components/SwitchTheme";
import Header from "./components/Header";
import html2canvas from "html2canvas";
import { render } from "@testing-library/react";

function screenshot() {
  html2canvas(document.querySelector("#tweetHere")).then((canvas) => {
    document.body.appendChild(canvas);
  });
}

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      theme: "dark",
      themeThumbnails: [
        {
          link: "images/light-theme.png",
          themeName: "light",
        },
        {
          link: "images/dark-theme.png",
          themeName: "dark",
        },
        {
          link: "images/dim-theme.png",
          themeName: "dim",
        },
      ],
    };
  }

  toggleTheme = (props) => {
    this.setState({ theme: this.state.theme === "light" ? "middle" : "light" });
    console.log(this.state.theme);
  };

  themeSwitcher = () => {
    const selectedTheme = this.state.theme === "dark" ? "dark" : "";
    if (selectedTheme === "dark") {
      document.getElementByClass("tweetArea").style.background = "blue";
    }

    console.log("It ran");
  };

  setTheme = (thumbnail) => {
    this.setState({ theme: thumbnail.themeName });
    console.log(thumbnail);
  };

  setActive = (thumbnail) => {
    thumbnail.className = "Test";
  };

  render() {
    return (
      <div className="App">
        <Header />
        <div id="theme_switcher">
          <div class="container">
            <div id="theme_images">
              {this.state.themeThumbnails.map((thumbnail) => {
                const isActive =
                  thumbnail.themeName === this.state.theme ? "active" : "";
                return (
                  <div
                    className="theme__image"
                    onClick={() => this.setTheme(thumbnail)}
                    id={isActive}
                  >
                    <img src={thumbnail.link}></img>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        <TweetArea selectedTheme={this.state.theme} />
      </div>
    );
  }
}
export default App;
