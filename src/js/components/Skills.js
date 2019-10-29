import React from 'react'
import UnorderedList from './UnorderedList'
import { AOS_CONFIG } from '../../config'

const skillKeywords = [
  'MySQL',
  'SASS',
  'CSS',
  'HTML',
  'JavaScript',
  'JSON',
  'jQuery',
  'Progessive Web Apps (PWA)',
  'Amazon Web Services (AWS)',
  'Amazon EC2',
  'Amazon RDS',
  'Amazon Route 53',
  'AngularJS',
  'React',
  'Gatsby',
  'React Hooks',
  'Redux',
  'Node.js',
  'NPM',
  'Yarn',
  'GraphQL',
  'ESLint',
  'Adobe Experience Manager',
  'Gulp',
  'Grunt',
  'Architecture',
  'CDN',
  'Project Management',
  'Client Support',
  'CodeIgniter',
  'WordPress',
  'Foundation',
  'Bootstrap',
  'Git',
  'GitHub',
  'Netlify',
  'Netlify CMS',
  'Agility CMS',
  'Foresty.io',
  'Travis',
  'Jenkins',
  'CircleCI',
  'Webhooks',
  'Slack API',
  'Lighthouse',
  'LAMP',
  'Ubuntu',
  'Facebook API',
  'Facebook Development',
  'Google Maps API',
  'Google Places API',
  'PhoneGap Build',
  'Documentation',
  'Responsive Design',
  'Accessibility',
  'Adobe Photoshop',
  'Adobe Illustrator',
]

skillKeywords.sort(function(a, b) {
  var nameA = a.toUpperCase() // ignore upper and lowercase
  var nameB = b.toUpperCase() // ignore upper and lowercase
  if (nameA < nameB) {
    return -1
  }
  if (nameA > nameB) {
    return 1
  }

  // names must be equal
  return 0
})

const Skills = () => (
  <UnorderedList
    className="list-skills"
    items={skillKeywords}
    aosType={AOS_CONFIG.type}
    aosDuration={AOS_CONFIG.duration}
    aosDelay={AOS_CONFIG.delay}
  />
)

export default Skills
