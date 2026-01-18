import React, { useState } from "react";
import "./Nav.css";

import { IoHomeOutline } from "react-icons/io5";
import { LuUserRound } from "react-icons/lu";
import { BiBook } from "react-icons/bi";
import { RiServiceLine } from "react-icons/ri";
import { BiMessageSquareDetail } from "react-icons/bi";

function Nav() {
  const [ActiveNav, SetActiveNav] = useState("#");
  return (
    <nav>
      <a
        href="#"
        className={ActiveNav === "#" ? "active" : ""}
        onClick={() => SetActiveNav("#")}
      >
        <IoHomeOutline />
      </a>
      <a
        href="#about"
        className={ActiveNav === "about" ? "active" : ""}
        onClick={() => SetActiveNav("about")}
      >
        <LuUserRound />
      </a>
      <a href="#skills" className={ActiveNav==='skills' ? "active" : ''} onClick={()=>SetActiveNav('skills')}>
        <BiBook />
      </a>
      <a
        href="#services"
        className={ActiveNav === "services" ? "active" : ""}
        onClick={() => SetActiveNav("services")}
      >
        <RiServiceLine />
      </a>
      <a
        href="#projects"
        className={ActiveNav === "projects" ? "active" : ""}
        onClick={() => SetActiveNav("projects")}
      >
        <BiMessageSquareDetail />
      </a>
    </nav>
  );
}

export default Nav;
