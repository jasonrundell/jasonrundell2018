import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { markPostAsRread } from '../actions/markPostAsRread'
import { READ, UNREAD } from '../constants'
import './Projects.css';

const ProjectPostLinkList = ({ projects = () => {} }) => {
  return <ul>
    { projects.map((post, i) =>
      <li key={ i }>
        <Link href={`/projects/${post.slug}`}>{post.title}</Link>
        <button onClick={() => markPostAsRread(post.id)}>Mark As Read</button>
      </li>
    ) }
  </ul>;
};

const Projects = ({ projects = {} }) => (
  <div>
    <div className="ls-row">
      <div className="ls-col-100">
        <h1>Projects</h1>
        <ProjectPostLinkList projects={ projects } />
      </div>
    </div>
  </div>
);

const mapStateToProps = (state) => ({
  projects: state.projects
});

const mapDispatchToProps = (dispatch) => ({
  markPostAsRead: () => dispatch({ type: READ }),
  markPostAsUnread: () => dispatch({ type: UNREAD })
});

export default connect(mapStateToProps, mapDispatchToProps)(Projects);
