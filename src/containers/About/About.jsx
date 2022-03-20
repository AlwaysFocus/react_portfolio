import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

import "./About.scss";
import { urlFor, client } from "../../client";

const About = () => {
  const [aboutContent, setAboutContent] = useState([]);

  useEffect(() => {
    const aboutQuery = '*[_type == "about"]';

    client.fetch(aboutQuery).then((aboutData) => setAboutContent(aboutData));
  }, []);

  return (
    <>
      <h2 className="head-text">
        Great <span> Solutions</span>
        <br />
        drive <br />
        Great<span> Business </span>
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
            <img src={urlFor(about.imgUrl)} alt={about.title} />
            <h2 className="bold-text" style={{ marginTop: "20px" }}>
              {about.title}
            </h2>
            <p className="p-text" style={{ marginTop: "10px" }}>
              {about.description}
            </p>
          </motion.div>
        ))}
      </div>
    </>
  );
};

export default About;
