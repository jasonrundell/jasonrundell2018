import React from 'react';
import GetConnected from '../sections/GetConnected';
import LightHouseBadge from './LightHouseBadge';

const GlobalFooter = () => (
  <footer className="footer">
    <GetConnected />
    <section className="section section-copyright copyright">
      <div className="contain">
        <div className="mb5">
          <LightHouseBadge />
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

export default GlobalFooter;
