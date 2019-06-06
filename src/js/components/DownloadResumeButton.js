import React from 'react';
import { APP_CONFIG } from '../../config';

const DownloadResumeButton = () => (
  <a href={APP_CONFIG.resumeFile} className="button__download">
    Download r&eacute;sum&eacute;
    <svg className="arrow-icon ml1" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32">
      <g fill="none" stroke="#e9be62" strokeWidth="1.5" strokeLinejoin="round" strokeMiterlimit="10">
        <circle className="arrow-icon--circle" cx="16" cy="16" r="14.12"></circle>
        <path className="arrow-icon--arrow" d="M16.14 9.93L22.21 16l-6.07 6.07M8.23 16h13.98"></path>
      </g>
    </svg>
  </a>
);

export default DownloadResumeButton;
