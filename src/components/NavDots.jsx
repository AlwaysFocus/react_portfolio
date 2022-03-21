import React from "react";

const links = [
  { name: "home", to: "#home", id: 1 },
  { name: "about", to: "#about", id: 2 },
  { name: "work", to: "#work", id: 3 },
  { name: "skills", to: "#skills", id: 4 },
  { name: "contact", to: "#contact", id: 5 },
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
        />
      ))}
    </div>
  );
};

export default NavDots;
