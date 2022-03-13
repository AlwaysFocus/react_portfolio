// Packages
import React from "react";

// Components/Containers
import {
  About,
  Footer,
  Header,
  Skills,
  Testimonials,
  Work,
} from "./containers";
import { Navbar } from "./components";

// Styles
import "./App.scss";

const App = () => {
  return (
    <div className="app">
      <Navbar />
      <Header />
      <About />
      <Work />
      <Skills />
      <Testimonials />
      <Footer />
    </div>
  );
};

export default App;
