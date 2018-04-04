/**
 * Information Architecture
 *
 * root
 *   -| home
 *   -| skills
 *   -| projects
 *   -| blog
 *   -| contact
 */

import React from 'react';
import { render } from 'react-dom';
import { createStore, combineReducers } from 'redux';
import { blogs } from './data/blogs';
import { projects } from './data/projects';

import App from './components/App';

//import * as reducers from './reducers';
const blogsReducer = (state = blogs, action) => {
  switch (action.type) {
    default:
      return state;
  }
};
const projectsReducer = (state = projects, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

const reducer = combineReducers({
  blogs: blogsReducer,
  projects: projectsReducer
});

const store = createStore(
  reducer
);

render(
  <App store={ store } />,
  document.getElementById('root')
);
