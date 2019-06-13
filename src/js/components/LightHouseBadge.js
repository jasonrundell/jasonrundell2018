import React from 'react';
import Logo from '../../images/logos/lighthouse.png';
import './LighthouseBadge.scss';

/**
 * todo: add props to function for the scores, date, and link to report
 */

const LightHouseBadge = (props) => (
  <div className="LightHouseBadge">
    <div className="row__scores">
      <div className="detail">
        <div className="score score--pass">{props.performanceScore}</div>
        <div className="label">Performance</div>
      </div>
      <div className="detail">
        <div className="score score--pass">{props.accessibilityScore}</div>
        <div className="label">Accessibility</div>
      </div>
      <div className="detail">
        <div className="score score--pass">{props.bestPracticesScore}</div>
        <div className="label">Best Practices</div>
      </div>
      <div className="detail">
        <div className="score score--pass">{props.seoScore}</div>
        <div className="label">SEO</div>
      </div>
    </div>
    <div className="row__report">
      <img src={Logo} className="logo" alt="" />
      <a href={props.reportFileUrl} className="link">View Lighthouse {props.dateText} Report</a>
    </div>
  </div>
);

export default LightHouseBadge;
