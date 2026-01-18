import "./Skills.css";
import { motion } from "framer-motion";

import CSS from "../../assets/css3.svg";
import Laravel from "../../assets/laravel.svg";
import Mysql from "../../assets/Mysql.jpg";
import Javascript from "../../assets/javascript.svg";
import Mongodb from "../../assets/mongodb.svg";
import Git from "../../assets/Git.png";
import ReactJS from "../../assets/react.svg";
import Seo from "../../assets/Seo.png";
import Wordpress from "../../assets/Wordpress.png";
import Blogging from "../../assets/Blogging.png";

/* =====================
   Animation Variants
===================== */

const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.15, // هنا الترتيب واحد بوحدة
    },
  },
};

const cardVariants = {
  hidden: {
    opacity: 0,
    y: 40,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

const SkillsData = [
  { id: 1, image: CSS, title: "CSS", disc: "Styling & Layout" },
  { id: 2, image: Javascript, title: "JavaScript", disc: "Programming Language" },
  { id: 3, image: ReactJS, title: "React", disc: "Frontend UI Library" },
  { id: 4, image: Laravel, title: "Laravel", disc: "PHP Backend Framework" },
  { id: 5, image: Mysql, title: "MySQL", disc: "Relational SQL Database" },
  { id: 6, image: Mongodb, title: "MongoDB", disc: "NoSQL Document Database" },
  { id: 7, image: Git, title: "Git", disc: "Version Control System" },
  { id: 8, image: Seo, title: "SEO", disc: "Search Engine Optimization" },
  { id: 9, image: Wordpress, title: "WordPress", disc: "CMS & Website Builder" },
  { id: 10, image: Blogging, title: "Blogging", disc: "Content Writing & Publishing" },
];

export default function Skills() {
  return (
    <section className="skills" id="skills">
      <div className="top_section">
        <h5>What Skills I Have</h5>
        <h2>My Experience</h2>
      </div>

      {/* 👇 Animation container */}
      <motion.div
        className="container container_skills"
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }} // يتفعل ملي يبان 20%
      >
        {SkillsData.map((skill) => (
          <motion.article
            key={skill.id}
            className="card_skill"
            variants={cardVariants}
          >
            <div className="icon">
              <img src={skill.image} alt={skill.title} />
            </div>

            <div className="content">
              <h4>{skill.title}</h4>
              <p className="text-light">{skill.disc}</p>
            </div>
          </motion.article>
        ))}
      </motion.div>
    </section>
  );
}
