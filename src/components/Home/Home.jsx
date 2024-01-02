import React, { Component } from "react";
import { Link } from "react-router-dom";

import homeAnime from "./../../assets/home_anime.gif";
import "./Home.css";
import Typewriter from "typewriter-effect";

class Home extends Component {
  render() {
    return (
      <div className="home-container">
        <div className="header-text">
          <h1>Welcome to my portfolio!</h1>
          <p>My Name is Pranay and I am a passionate </p>
          <div className="typewriter-container">
            <Typewriter
              options={{
                strings: [
                  "Web Developer",
                  "Java Developer",
                  "Frontend Developer",
                  "AI Developer",
                ],
                autoStart: true,
                loop: true,
              }}
            />
          </div>
        </div>
        <div className="head-btns">
          <Link to="/about" className="btn btn-white">
            <p className="btn-text">Know more about me</p>
          </Link>
          <Link to="/contact" className="btn btn-transparent">
            <p className="btn-text">Connect with me</p>
          </Link>
          <button
            className="btn btn-white"
            onClick={() =>
              window.open(
                "https://drive.google.com/file/d/1qdMC-Wa7rFKsS3KPhNsQaP3WWdwhCkpC/view?usp=sharing"
              )
            }
            style={{ cursor: "pointer", border: "none" }}
          >
            <p className="btn-text">Download Resume</p>
          </button>
        </div>
        <div className="splash-image">
          <img src={homeAnime} alt="animation" className="home-anime" />
        </div>
      </div>
    );
  }
}

export default Home;
