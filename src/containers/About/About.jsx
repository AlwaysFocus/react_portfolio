import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";


import "./About.scss";
import images from "../../constants/images";

const aboutContent = [
  {
    title: "Web Development",
    description: "Real world web development experience.",
    imgUrl: images.about01
  },
  {
    title: "App Development",
    description: "Clean app design and excellent user experiences.",
    imgUrl: images.about02,
  },
  {
    title: "Business Software Development",
    description:
      "Experience developing complex business solutions to solve real world problems.",
    imgUrl: images.about03,
  },
  {
    title: "Solution Design",
    description:
      "Passionate about developing elegant and effective solutions to difficult problems.",
    imgUrl: images.about04,
  },
];

const About = () => {
  return (
    <>
      <h2 className="head-text">
      Great <span> Solutions</span><br />drive <br />Great<span> Business </span>
      </h2>

      <div className="app__profiles">
        {aboutContent.map((about, index) => (
          <motion.div
            className="app__profile-item"
            key={`${about.title}-${index}`}
            whileInView={{ opacity: 1 }}
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.5, type: "tween" }}
          >
              <img src={about.imgUrl} alt={about.title} />
              <h2 className="bold-text" style={{marginTop: "20px"}}>
                {about.title}</h2>
                <p className="p-text" style={{marginTop: "10px"}}>{about.description}</p>
            </motion.div>
        ))}
      </div>
    </>
  );
};

export default About;
