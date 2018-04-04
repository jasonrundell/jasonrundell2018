import React from 'react'
import { Provider, connect } from 'react-redux';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';

import Home from './Home';
import Skills from './Skills';
import Projects from './Projects';
import ProjectPost from './ProjectPost';
import Blog from './Blog';
import BlogPost from './BlogPost';
import Contact from './Contact';
import FA from 'react-fontawesome';
import '../lense.css';
import './App.css';

import { READ, UNREAD } from '../constants'

const App = ({ store = () => {} }) =>
  <Provider store={ store }>
    <div>
      <Router>
        <div>
          <div className="ls-layout">
            <div className="ls-row">
              <div className="ls-col-12">
                <ul className="list-links ls-text-center">
                  <li><Link to="/"><FA name="rocket" /> Home</Link></li>
                  <li><Link to="/skills"><FA name="tasks" /> Skills</Link></li>
                  <li><Link to="/projects"><FA name="cubes" /> Projects</Link></li>
                  <li><Link to="/blog"><FA name="book" /> Blog</Link></li>
                  <li><Link to="/contact"><FA name="bullhorn" /> Contact</Link></li>
                </ul>
              </div>
            </div>
          </div>
          <Route exact path="/" component={ Home } />
          <Route exact path="/skills" component={ Skills } />
          <Route exact path="/projects" component={ Projects } />
          <Route path="/projects/:slug" component={ ProjectPost } />
          <Route exact path="/blog" component={ Blog } />
          <Route path="/blog/:slug" component={ BlogPost } />
          <Route exact path="/contact" component={ Contact } />
        </div>
      </Router>
    </div>
  </Provider>;


const mapStateToProps = (state) => ({
  blogs: state.blogs,
  projects: state.projects,
});

const mapDispatchToProps = (dispatch) => ({
  markPostAsRead: () => dispatch({ type: READ }),
  markPostAsUnread: () => dispatch({ type: UNREAD })
});

export default connect(mapStateToProps, mapDispatchToProps)(App);

