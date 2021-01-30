import React, { Component } from 'react';

class MainContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      listNews: [],
    };
  }

  componentDidMount() {
    fetch('https://hacker-news.firebaseio.com/v0/topstories.json?print=pretty')
      .then((response) => response.json())
      .then((list) => console.log(list));
  }

  render() {
    return <div className='MainContainer'></div>;
  }
}

export default MainContainer;
