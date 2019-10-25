import React from 'react'
import { AOS_CONFIG } from '../../config'

const POSITIONS = [
  {
    role: 'Business Owner',
    company_name: 'Code Summoner Corp.',
    start_date: 'April 2012',
    end_date: 'Present',
  },
  {
    role: 'Full Stack Web Developer',
    company_name: 'AIR MILES Marketing',
    start_date: 'August 2015',
    end_date: 'Present',
  },
  {
    role: 'Front End Web Developer',
    company_name: 'MediResource Inc.',
    start_date: 'April 2014',
    end_date: 'December 2014',
  },
  {
    role: 'Senior Full Stack Web Developer',
    company_name: '52 Pick-Up Inc.',
    start_date: 'August 2013',
    end_date: 'February 2014',
  },
  {
    role: 'Full Stack Web Developer (multiple positions)',
    company_name: 'Flight Centre Ltd.',
    start_date: 'February 2009',
    end_date: 'March 2012',
  },
  {
    role: 'Full Stack Web Developer (volunteer)',
    company_name: 'Project Peru',
    start_date: 'March 2008',
    end_date: 'September 2011',
  },
  {
    role: 'Senior Full Stack Web Developer',
    company_name: 'EZD Consulting Inc.',
    start_date: 'October 2001',
    end_date: 'August 2008',
  },
]

const List = props => {
  const items = props.items
  const listItems = items.map((item, index) => (
    <li
      key={index}
      className={props.classNameChildren}
      data-aos={props.aosType}
      data-aos-duration={props.aosDuration}
      data-aos-delay={props.aosDelay}
    >
      <strong>{item.role}</strong>
      <br />
      <em>{item.company_name}</em>
      <br />
      <small>
        {item.start_date} - {item.end_date}
      </small>
    </li>
  ))

  return (
    <ul
      className={props.className}
      data-aos={AOS_CONFIG.type}
      data-aos-duration={AOS_CONFIG.duration}
      data-aos-delay={AOS_CONFIG.delay}
    >
      {listItems}
    </ul>
  )
}

const WorkExperience = () => (
  <React.Fragment>
    <h3
      className="subsection-title"
      data-aos={AOS_CONFIG.type}
      data-aos-duration={AOS_CONFIG.duration}
      data-aos-delay={AOS_CONFIG.delay}
    >
      Experience
    </h3>
    <List
      className="list-xp"
      items={POSITIONS}
      aosType={AOS_CONFIG.type}
      aosDuration={AOS_CONFIG.duration}
      aosDelay={AOS_CONFIG.delay}
    />
  </React.Fragment>
)

export default WorkExperience
