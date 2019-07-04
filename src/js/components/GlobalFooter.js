import React from 'react';
import GetConnected from '../sections/GetConnected';
import LighthouseBadge from './LighthouseBadge';

/** todo: make test */

export default () => (
  <footer className="footer">
    <GetConnected />
    <section className="section section-copyright copyright">
      <div className="contain">
        <div className="mb5">
          <LighthouseBadge
            performanceScore="96"
            accessibilityScore="100"
            bestPracticesScore="93"
            seoScore="100"
            dateText="2019-06-10"
            reportFileUrl="/files/lighthouse/jasonrundell.com_2019-06-10_17-20-35.html"
          />
        </div>
        <span className="nowrap">
          Jason Rundell &copy;
          {new Date().getFullYear()}
        </span>
        . All rights reserved.
      </div>
    </section>
  </footer>
);
