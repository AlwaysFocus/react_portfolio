import React, { useState } from "react";
import { HiMenuAlt4, HiX } from "react-icons/hi";
import { AnimatePresence, motion, useCycle } from "framer-motion";

import { Images } from "../../constants";
import { MenuButton } from "./MenuButton";

import "./Navbar.scss";

const links = [
  { name: "home", to: "#home", id: 1 },
  { name: "about", to: "#about", id: 2 },
  { name: "work", to: "#work", id: 3 },
  { name: "skills", to: "#skills", id: 4 },
  { name: "testimonials", to: "#testimonial", id: 5 },
  { name: "contact", to: "#contact", id: 6 },
];

const linkVariants = {
  closed: {
    opacity: 0,
  },
  open: { opacity: 1 },
};
const sideBarVariants = {
  closed: {
    transition: {
      staggerChildren: 0.2,
      staggerDirection: -1,
    },
  },
  open: {
    transition: {
      staggerChildren: 0.2,
      staggerDirection: 1,
    },
  },
};

const Navbar = () => {
  const [open, cycleOpen] = useCycle(false, true);

  return (
    <nav className="app__navbar">
      <motion.div
        className="app__navbar-logo"
        whileHover={{ scale: 1.2 }}
        whileTap={{ scale: 0.9 }}
      >
        <img src={Images.eliLogo} alt="Logo" />
      </motion.div>
      <ul className="app__navbar-links">
        {["home", "about", "work", "skills", "contact"].map((item) => (
          <li className="app__flex p-text" key={`link-${item}`}>
            <div />
            <a href={`#${item}`}>{item}</a>
          </li>
        ))}
      </ul>

      <div className="app__navbar-menu">
        {/* <HiMenuAlt4 onClick={cycleOpen} /> */}
        <MenuButton isOpen={open} onClick={cycleOpen} />
        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: 300 }}
              exit={{
                width: 0,
                transition: { delay: 0.7, duration: 0.2 },
              }}
            >
              <motion.span
                initial={{ opacity: 1, scale: 0 }}
                animate={{ scale: 1 }}
                exit={{
                  opacity: 0,
                  transition: { delay: 0.3, duration: 0.1 },
                }}
              >
                <MenuButton
                  isOpen={open}
                  onClick={cycleOpen}
                  transition={{ duration: 0.1 }}
                />
              </motion.span>
              {/* <HiX onClick={cycleOpen} /> */}

              <motion.ul
                initial="closed"
                animate="open"
                exit="closed"
                variants={sideBarVariants}
              >
                {/* {["home", "about", "work", "skills", "contact"].map((item) => ( */}
                {links.map(({ name, to, id }) => (
                  <motion.li
                    variants={linkVariants}
                    key={id}
                    whileHover={{ scale: 1.1 }}
                  >
                    <motion.a
                      variants={linkVariants}
                      key={`link-${id}`}
                      href={`${to}`}
                      onClick={cycleOpen}
                    >
                      {name}
                    </motion.a>
                  </motion.li>
                ))}
              </motion.ul>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
};

export default Navbar;
