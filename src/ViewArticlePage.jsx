import React, { Component } from 'react';

class ViewArticlePage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      comments: [],
    };
  }

  componentDidMount() {
    //   fetch(`https://hacker-news.firebaseio.com/v0/item/${this.props.}.json?print=pretty`)
  }

  render() {
    return;
  }
}

export default ViewArticlePage;
