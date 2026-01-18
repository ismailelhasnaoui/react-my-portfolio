import React from "react";
import "./Home.css";
import Me from "../../assets/me.png";
import cv from "../../assets/cvismail.pdf";
import SocialMedia from "./SocialMedia";

function Home() {
  return (
    <div className="home">
      <div className="container home_container  ">
        <h4>Hello I'm</h4>
        <h1>Ismail Elhasnaoui</h1>
        <h4 className="text-light">Full Stack Developer</h4>
        <div className="btns">
          <a href={cv} className="btn" download>
            Download Cv
          </a>
          <a href="#" className="btn btn-primary">
            Lest's Talk
          </a>
        </div>
        <div className="me">
          <img src={Me} alt="" />
        </div>
        <a href="#about" className="scroll_down btn btn-primary">Scroll Down</a>
        <SocialMedia></SocialMedia>
      </div>
    </div>
  );
}

export default Home;
