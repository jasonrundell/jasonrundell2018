import React from 'react';
import Skills from '../components/Skills';
import WorkExperience from '../components/WorkExperience';
import References from '../components/References';
import { AOS_CONFIG } from '../../config';

const About = () => (
  <section className="section section-resume" data-aos={AOS_CONFIG.type} data-aos-duration={AOS_CONFIG.duration} data-aos-delay={AOS_CONFIG.delay}>
    <div className="contain">
      <h3 className="section-title" data-aos={AOS_CONFIG.type} data-aos-duration={AOS_CONFIG.duration} data-aos-delay={AOS_CONFIG.delay}>About</h3>
      <p data-aos={AOS_CONFIG.type} data-aos-duration={AOS_CONFIG.duration} data-aos-delay={AOS_CONFIG.delay}>Determined in building the best digital products that I can be proud of. Committed to learning and sharing ideas with the team. Always trying to be the best I can be.</p>
      <Skills />
      <WorkExperience />
      <References />
    </div>
  </section>
);

export default About;
