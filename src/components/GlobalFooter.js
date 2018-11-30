import React from 'react';
import GetConnected from '../sections/GetConnected';

const GlobalFooter = () => (
  <footer className="footer">
    <GetConnected />
    <section className="section section-copyright contain copyright">
      <span className="nowrap">Jason Rundell &copy; { new Date().getFullYear() }</span>. All rights reserved.
    </section>
  </footer>
);

export default GlobalFooter;
