import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { markPostAsRread } from '../actions/markPostAsRread';
import { READ, UNREAD } from '../constants';
import ReadPostButton from './Buttons';
import './Blog.css';

const BlogPostLinkList = ({ blogs = () => {} }) => {
  return <ul>
    { blogs.map((post, i) =>
      <li key={ i }>
        <Link to={`/blog/${post.slug}`}>{post.title}</Link>
        <ReadPostButton classNames="" post={ post } onClick={ markPostAsRread } buttonText="Mark as read" />
      </li>
    ) }
  </ul>;
};

const Blog = ({ blogs = {} }) => (
  <div>
    <div className="ls-row">
      <div className="ls-col-100">
        <h1>Blog</h1>
        <BlogPostLinkList blogs={ blogs } />
      </div>
    </div>
  </div>
);

const mapStateToProps = (state) => ({
  blogs: state.blogs
});

const mapDispatchToProps = (dispatch) => ({
  markPostAsRead: () => dispatch({ type: READ }),
  markPostAsUnread: () => dispatch({ type: UNREAD })
});

export default connect(mapStateToProps, mapDispatchToProps)(Blog);
