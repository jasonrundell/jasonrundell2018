import React from 'react'
import { AOS_CONFIG } from '../../config'

const GetConnected = () => (
  <section
    id="contact"
    className="section section-contact"
    data-aos={AOS_CONFIG.type}
    data-aos-duration={AOS_CONFIG.duration}
    data-aos-delay={AOS_CONFIG.delay}
  >
    <div className="contain">
      <h2 className="section-title">Get connected</h2>
      <ul className="lists__contact">
        <li>
          <a href="mailto:contact@jasonrundell.com" className="link">
            contact@jasonrundell.com
          </a>
        </li>
        <li>
          <a
            href="https://github.com/jasonrundell"
            className="link"
            rel="noopener noreferrer"
            target="_blank"
          >
            GitHub
          </a>
        </li>
        <li>
          <a
            href="https://www.linkedin.com/in/jasonrundell/"
            className="link"
            rel="noopener noreferrer"
            target="_blank"
          >
            LinkedIn
          </a>
        </li>
      </ul>
    </div>
  </section>
)

export default GetConnected
