import React from 'react';
import GlobalHeader from './components/GlobalHeader';
import GlobalFooter from './components/GlobalFooter';
import Welcome from './sections/Welcome';
import About from './sections/About';

const Home = () =>
  <React.Fragment>
    <GlobalHeader />
    <main id="main">
      <Welcome />
      <About />
    </main>
    <GlobalFooter />
  </React.Fragment>

export default Home;
