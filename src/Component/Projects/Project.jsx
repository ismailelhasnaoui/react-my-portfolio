import React from "react";
import "./Project.css";
import img1 from "../../assets/portfolio2.png";

const Projects = [
  {
    id: 1,
    img: img1,
    title: "Salat-Time : A modern prayer times dashboard",
    Github: "https://github.com/ismailelhasnaoui/Adhan-project",
    LiveDemo: "https://adhan-salat.netlify.app/",
  },
  {
    id: 1,
    img: img1,
    title: "Salat-Time : A modern prayer times dashboard",
    Github: "https://github.com/ismailelhasnaoui/Adhan-project",
    LiveDemo: "https://adhan-salat.netlify.app/",
  },
  {
    id: 1,
    img: img1,
    title: "Salat-Time : A modern prayer times dashboard",
    Github: "https://github.com/ismailelhasnaoui/Adhan-project",
    LiveDemo: "https://adhan-salat.netlify.app/",
  },
];
function Project() {
  return (
    <section className="projects" id="projects">
      <div className="top_section">
        <h5>My rescent Work</h5>
        <h2> My Projects</h2>
        <div className="Project_items">
          {Projects.map((project) => (
            <div key={project.id} className="card-item">
              <div className="img">
                <img src={project.img} />
              </div>
              <h4>{project.title}</h4>
              <div className="btn-item">
                <a href={project.Github} target="_blank" className="btn">
                  Github
                </a>
                <a
                  href={project.LiveDemo}
                  target="_blank"
                  className="btn btn-primary"
                >
                  Live Demo
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Project;
