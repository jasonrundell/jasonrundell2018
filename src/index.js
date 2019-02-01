import 'babel-polyfill';
import React from 'react';
import { render } from 'react-dom';
import AOS from 'aos';

import App from './App';


render(
  <App />,
  document.getElementById('root')
);

AOS.init();
