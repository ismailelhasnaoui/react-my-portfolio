import React from "react";
import "./About.css";
import IMageME from "../../assets/img-about.png";
import { FaAward } from "react-icons/fa";
import { FiUsers } from "react-icons/fi";
import { VscFolderLibrary } from "react-icons/vsc";

function About() {
  return (
    <section className="about" id="about">
      <div className="top_section">
        <h5>Get To Know</h5>
        <h2>About Me</h2>
      </div>

      <div className="container about_container">
        <div className="about_me">
          <div className="about_me_image">
            <img src={IMageME} alt="" />
          </div>
        </div>
        <div className="about_content">
          <div className="about_cards">
            <div className="about_card">
              <FaAward className="about_icon" />
              <h5>Experience</h5>
              <small>+2 Year Expirience</small>
            </div>

            <div className="about_card">
              <FiUsers className="about_icon" />
              <h5>Clients</h5>
              <small>+30 Clients</small>
            </div>

            <div className="about_card">
              <VscFolderLibrary className="about_icon" />
              <h5>Projects</h5>
              <small>+40 Completed</small>
            </div>
          </div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste eius
            deleniti, harum incidunt eos, magni cupiditate ad neque corporis
            vitae quis officiis itaque, aliquam dolor odio quos quaerat. Nihil,
            voluptas?
          </p>
          <a href="#" className="btn primary">Let's Talk</a>
        </div>
      </div>
    </section>
  );
}

export default About;
