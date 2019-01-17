import React from 'react';
import CONFIG from '../config';
import Skills from '../components/Skills';
import WorkExperience from '../components/WorkExperience';
import References from '../components/References';

const About = () =>
  <section className="section section-resume" data-aos="fade" data-aos-duration="600" data-aos-delay="300">
    <div className="contain">
      <h2 className="section-title" data-aos="fade" data-aos-duration="600" data-aos-delay="300">About</h2>
      <p data-aos="fade" data-aos-duration="600" data-aos-delay="400">Determined in building the best digital products that I can be proud of. Committed to learning and sharing ideas with the team. Always trying to be the best I can be.</p>
      <Skills />
      <WorkExperience />
      <References />
      <p data-aos="fade" data-aos-duration="300">
        <a href={CONFIG.fileUploadPath + CONFIG.resumeFileName}>Download r&eacute;sum&eacute;_</a>
      </p>
    </div>
  </section>

export default About;
