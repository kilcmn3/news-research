import React, { Component } from 'react';

class MainContainer extends Component {
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
    return <div className='MainContainer'>Main Container</div>;
  }
}

export default MainContainer;
