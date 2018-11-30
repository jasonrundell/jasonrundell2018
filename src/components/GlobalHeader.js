import React from 'react';
import CONFIG from '../config';

const GlobalHeader = () =>
  <header className="header">
    <div className="site-header scrollheader">
      <div className="contain">
        <a href="#main" className="link-skip">Skip to main content</a>
        <nav className="nav-header">
          <ul className="nav-main">
            <li><a href={CONFIG.fileUploadPath + CONFIG.resumeFileName}>Download r&eacute;sum&eacute;_</a></li>
          </ul>
        </nav>
      </div>
    </div>
  </header>

export default GlobalHeader;
