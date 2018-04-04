import React from 'react';
import './BlogPost.css';

import { blogs } from '../blogs';

const BlogPost = ({ match }) => (
  <div>
    <BlogPostBody slug={match.params.slug} />
  </div>
);

class BlogPostBody extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      date: '',
      title: '',
      entry: ''
    };

    this.setPostData.bind(this);
  }

  componentDidMount() {
    this.setPostData();
  }

  componentWillUnmount() {
    this.setState({
      date: '',
      title: '',
      entry: ''
    });
  }

  setPostData(){
    let slug = this.props.slug;
    let dataDate, dataTitle, dataEntry = '';
    blogs.forEach(function(post) {
      if (post.slug === slug) {
        dataDate = post.date;
        dataTitle = post.title;
        dataEntry = post.entry;
      }
    });

    this.setState({
      date: dataDate,
      title: dataTitle,
      entry: dataEntry
    });
  }

  render() {
    return (
      <div>
        <div className="ls-row">
          <div className="ls-col-100">
            <h1>{this.state.title}</h1>
            <h5>{this.state.date}</h5>
            <div dangerouslySetInnerHTML={{__html:this.state.entry}} />
          </div>
        </div>
      </div>
    );
  }
}

export default BlogPost;
