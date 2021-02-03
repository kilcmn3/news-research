import React, { Component } from 'react';

class DisplayContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      topstories: [],
    };
  }

  componentDidMount() {
    fetch('https://hacker-news.firebaseio.com/v0/topstories.json?print=pretty')
      .then((response) => response.json())
      .then((data) => this.setState({ topstories: data }));
  }

  render() {
    return <div className='DisplayContainer'>Main Container</div>;
  }
}

export default DisplayContainer;
