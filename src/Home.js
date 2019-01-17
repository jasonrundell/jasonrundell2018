import React from 'react';
import GlobalHeader from './components/GlobalHeader';
import GlobalFooter from './components/GlobalFooter';
import Welcome from './sections/Welcome';
import About from './sections/About';

const Home = () =>
  <div>
    <GlobalHeader />
    <main>
      <Welcome />
      <About />
    </main>
    <GlobalFooter />
  </div>

export default Home;
