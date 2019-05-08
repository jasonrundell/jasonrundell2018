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

if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('service-worker.js').then(registration => {
    // Registration was successful
    console.log('ServiceWorker registration successful with scope: ', registration.scope);
  }).catch(err => {
    // registration failed :(
    console.log('ServiceWorker registration failed: ', err);
  });
}
