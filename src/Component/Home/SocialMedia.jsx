import React from "react";
import { CiLinkedin } from "react-icons/ci";
import { FaGithub } from "react-icons/fa";

export default function SocialMedia() {
  return (
    <div className="Social_icons">
      <a href="#" target="_blank">
        <CiLinkedin />
      </a>
      <a href="#" target="_blank">
        <FaGithub />
      </a>
    </div>
  );
}
