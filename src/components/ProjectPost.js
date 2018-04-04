import React from 'react';
import './ProjectPost.css';

let projectPostsData = require('../projects.json');

const ProjectPost = ({ match }) => (
  <div>
    <ProjectPostBody slug={match.params.slug} />
  </div>
);

class ProjectPostBody extends React.Component {

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
    projectPostsData.forEach(function(post) {
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
        <h1>{this.state.title}</h1>
        <h5><small>{this.state.date}</small></h5>
        <div dangerouslySetInnerHTML={{__html:this.state.entry}} />
      </div>
    );
  }
}

export default ProjectPost;
