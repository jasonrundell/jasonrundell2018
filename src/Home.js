import React from 'react';
import { Div, Heading, Paragraph, Link, Span } from 'dropship-components';

const Home = () => (
  <Div>
    <Div className="jr__container">
      <Div className="jr__column">
        <Div data-aos="fade-up">
          <Heading level="1">Jason Rundell</Heading>
        </Div>
        <Div data-aos="zoom-in">
          <Heading level="2">Full Stack Web Developer</Heading>
        </Div>
        <Div data-aos="fade-down">
          <Paragraph>Yo! I'm a developer who uses <Span className="jr__font--color-primary">PHP</Span>, <Span className="jr__font--color-primary">MySQL</Span>, <Span className="jr__font--color-primary">SASS</Span>, <Span className="jr__font--color-primary">CSS</Span>, <Span className="jr__font--color-primary">HTML</Span>, <Span className="jr__font--color-primary">JavaScript</Span>, and <Span className="jr__font--color-primary">Amazon Web Services (AWS)</Span>.</Paragraph>
          <Paragraph>My experience spans from 1997 to the present and I have been a part of a wide variety of web projects. My skills and experiences are deep, wide-ranging, and I am always seeking new best practices and methodologies. I embrace change, crave challenge, and love technology.</Paragraph>
        </Div>
      </Div>
    </Div>
    <Div className="jr__container jr__container--3">
      <Div className="jr__column" data-aos="fade-left">
        <Heading level="3">
          <i className="fas fa-file-alt jr__link jr__font--lg"></i>&nbsp;<Link className="jr__link jr__font--lg" href="http://cloudfront.jasonrundell.com/files/jason-rundell-web-developer-resume.pdf">Resume</Link>
        </Heading>
      </Div>
      <Div className="jr__column" data-aos="zoom-in">
        <Heading level="3">
          <i className="fab fa-github jr__link jr__font--lg"></i>&nbsp;<Link className="jr__link jr__font--lg" href="https://github.com/jasonrundell">GitHub</Link>
        </Heading>
      </Div>
      <Div className="jr__column" data-aos="fade-right">
        <Heading level="3">
          <i className="fab fa-linkedin jr__link jr__font--lg"></i>&nbsp;<Link className="jr__link jr__font--lg" href="https://www.linkedin.com/in/jasonrundell/">LinkedIn</Link>
        </Heading>
      </Div>
    </Div>
  </Div>
);

export default Home;
