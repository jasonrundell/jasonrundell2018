import React from 'react';
import Skills from '../components/Skills';
import WorkExperience from '../components/WorkExperience';
import References from '../components/References';

const About = () =>
  <section className="section section-resume" data-aos="fade" data-aos-duration="300" data-aos-delay="100">
    <div className="contain">
      <h2 className="section-title" data-aos="fade" data-aos-duration="300" data-aos-delay="100">About</h2>
      <p data-aos="fade" data-aos-duration="300" data-aos-delay="100">Determined in building the best digital products that I can be proud of. Committed to learning and sharing ideas with the team. Always trying to be the best I can be.</p>
      <Skills />
      <WorkExperience />
      <References />
    </div>
  </section>

export default About;
