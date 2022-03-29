import React from "react";
import { BsInstagram, BsLinkedin } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";

const SocialMedia = () => {
  return (
    <div className="app__social">
      <a
        href="https://www.linkedin.com/in/ElijahWhalen"
        target="_blank"
        rel="noreferrer"
      >
        <div>
          <BsLinkedin />
        </div>
      </a>
      <a href="https://github.com/AlwaysFocus" target="_blank" rel="noreferrer">
        <div>
          <FaGithub />
        </div>
      </a>
    </div>
  );
};

export default SocialMedia;
