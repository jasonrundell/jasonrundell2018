import React from 'react';
import Logo from '../../images/logos/lighthouse.png';
import './LighthouseBadge.scss';

const LIGHTHOUSE_REPORT_URL = '/files/lighthouse/jasonrundell.com_2019-06-10_17-20-35.html';

const LightHouseBadge = () => (
  <div className="LightHouseBadge">
    <div className="row__scores">
      <div className="detail">
        <div className="score score--pass">96</div>
        <div className="label">Performance</div>
      </div>
      <div className="detail">
        <div className="score score--pass">100</div>
        <div className="label">Accessibility</div>
      </div>
      <div className="detail">
        <div className="score score--pass">93</div>
        <div className="label">Best Practices</div>
      </div>
      <div className="detail">
        <div className="score score--pass">100</div>
        <div className="label">SEO</div>
      </div>
    </div>
    <div className="row__report">
      <img src={Logo} className="logo" alt="" />
      <a href={LIGHTHOUSE_REPORT_URL} className="link">View Lighthouse 2019-06-10 Report</a>
    </div>
  </div>
);

export default LightHouseBadge;
