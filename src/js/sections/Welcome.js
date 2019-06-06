import React from 'react';
import { AOS_CONFIG } from '../../config';

const Welcome = () => (
  <section className="section section-keynote keynote">
    <div className="contain">
      <h1 className="page-title" data-aos={AOS_CONFIG.type} data-aos-duration={AOS_CONFIG.duration} data-aos-delay={AOS_CONFIG.delay}>Jason Rundell</h1>
      <p className="keynote-subtitle" data-aos={AOS_CONFIG.type} data-aos-duration={AOS_CONFIG.duration} data-aos-delay={AOS_CONFIG.delay}>Full Stack Web Developer</p>
      <p data-aos={AOS_CONFIG.type} data-aos-duration={AOS_CONFIG.duration} data-aos-delay={AOS_CONFIG.delay}>Yo! I&apos;m a developer who loves learning and using the latest in front end web development. My skill set includes experience with React, Node.js, Gulp, Grunt, PHP, MySQL, SASS, CSS, HTML, JavaScript, and Amazon Web Services (just to name a few).</p>
      <p data-aos={AOS_CONFIG.type} data-aos-duration={AOS_CONFIG.duration} data-aos-delay={AOS_CONFIG.delay}>My love of building web experiences started in my high school’s library in 1997 with GeoCities and it’s been rewarding ever since! As you can imagine, with over 20 years of love for HTML, I have been a part of a wide variety of web projects: from iframes, to Flash, jQuery Mobile, and now ‘isomorphic JavaScript applications’. Whatever the latest trend is, I’m either deeply involved or experimenting with it in my spare time and imagining what’s next. My skills and experiences are deep, wide-ranging, and I am always seeking new best practices and methodologies. I embrace change, crave challenge, and love technology!</p>
    </div>
  </section>
);

export default Welcome;
