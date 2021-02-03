import React, { Component } from 'react';

class DisplayCards extends Component {
  constructor(props) {
    super(props);
    this.state = {
      article: {},
    };
  }

  componentDidMount() {
    fetch(
      `https://hacker-news.firebaseio.com/v0/item/${this.props.item}.json?print=pretty`
    )
      .then((response) => response.json())
      .then((data) => this.setState({ article: data }));
  }
  render() {
    return <div className='DisplayCards'>DisplayCards</div>;
  }
}

export default DisplayCards;
