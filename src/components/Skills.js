import React from 'react';
import UnorderedList from './UnorderedList';

const AOS_CONFIG = {
  type: 'fade',
  duration: 300,
  delay: 100
}

const skillKeywords = [
  'MySQL',
  'SASS',
  'CSS',
  'HTML',
  'JavaScript',
  'JSON',
  'jQuery',
  'Amazon Web Services (AWS)',
  'Amazon EC2',
  'Amazon RDS',
  'Amazon Route 53',
  'AngularJS',
  'React',
  'Node',
  'NPM',
  'Yarn',
  'MySQL',
  'Gulp',
  'Grunt',
  'Architecture',
  'Project Management',
  'Client Support',
  'CodeIgniter',
  'WordPress',
  'Foundation',
  'Bootstrap',
  'Facebook API',
  'Facebook Development',
  'Google Maps API',
  'Google Places API',
  'PhoneGap Build',
  'Documentation',
  'Responsive Design',
  'Adobe Photoshop',
  'Adobe Illustrator',
]

const Skills = () =>
  <UnorderedList
    className="list-skills"
    items={skillKeywords}
    aosType={AOS_CONFIG.type}
    aosDuration={AOS_CONFIG.duration}
    aosDelay={AOS_CONFIG.delay}
  />

export default Skills;
