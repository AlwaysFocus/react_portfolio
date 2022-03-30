import React from "react";

const links = [
  { name: "home", to: "#home", id: 1 },
  { name: "about", to: "#about", id: 2 },
  { name: "work", to: "#work", id: 3 },
  { name: "skills", to: "#skills", id: 4 },
  { name: "testimonial", to: "#testimonial", id: 5 },
  { name: "contact", to: "#contact", id: 6 },
];

const NavDots = ({ active }) => {
  return (
    <div className="app__navigation">
      {links.map(({ name, to, id }) => (
        <a
          key={`link-${id}`}
          href={`${to}`}
          
          className="app__navigation-dot"
          style={active === name ? { backgroundColor: "#313bac" } : {}}
        > </a>
      ))}
    </div>
  );
};

export default NavDots;
