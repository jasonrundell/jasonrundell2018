import React from 'react';
import DownloadResumeButton from './DownloadResumeButton';

const GlobalHeader = () =>
  <header className="header">
    <div className="site-header">
      <div className="contain">
        <a href="#main" className="link-skip">Skip to main content</a>
        <nav className="nav-header">
          <ul className="nav-main">
            <li>
              <DownloadResumeButton />
            </li>
          </ul>
        </nav>
      </div>
    </div>
  </header>

export default GlobalHeader;
