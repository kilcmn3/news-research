import React, { Component } from 'react';
import DisplayCards from './DisplayCards'
class DisplayContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      topStories: [],
    };
  }

  componentDidMount() {
    fetch('https://hacker-news.firebaseio.com/v0/topstories.json?print=pretty')
      .then((response) => response.json())
      .then((data) => this.setState({ topStories: data }));
  }

   scanItems() {
    return 
  }

  render() {
    return <div className='DisplayContainer'>Main Container
      <DisplayCards />
    </div>;
  }
}

export default DisplayContainer;
