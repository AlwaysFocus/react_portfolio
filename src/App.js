import React from 'react';

import { About, Footer, Header, Skills, Testimonials, Work } from './containers';

const App = () => {
  return (
    <div className="app">
      <Header />
      <About />
      <Work />
      <Skills />
      <Testimonials />
      <Footer />
      </div>
  );
}

export default App;