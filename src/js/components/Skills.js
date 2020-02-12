import React from 'react'
import UnorderedList from './UnorderedList'
import { AOS_CONFIG } from '../../config'

const skillKeywords = [
  'Accessibility',
  'Adobe Experience Manager',
  'Adobe Illustrator',
  'Adobe Photoshop',
  'Agility CMS',
  'Amazon EC2',
  'Amazon RDS',
  'Amazon Route 53',
  'Amazon Web Services (AWS)',
  'AngularJS',
  'Architecture',
  'Bootstrap',
  'CDN',
  'CircleCI',
  'Client Support',
  'Contentful',
  'CSS',
  'Documentation',
  'ESLint',
  'Facebook API',
  'Facebook Development',
  'Foresty.io',
  'Foundation',
  'Gatsby',
  'Git',
  'GitHub',
  'Google Maps API',
  'Google Places API',
  'GraphQL',
  'Grunt',
  'Gulp',
  'HTML',
  'JavaScript',
  'jQuery',
  'JSON',
  'LAMP',
  'Lighthouse',
  'Netlify CMS',
  'Netlify',
  'NPM',
  'Parcel',
  'Progessive Web Apps (PWA)',
  'Project Management',
  'React Hooks',
  'React',
  'Responsive Design',
  'SASS',
  'Slack API',
  'Travis',
  'Ubuntu',
  'Webhooks',
  'WordPress',
  'Yarn',
  'MySQL',
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
