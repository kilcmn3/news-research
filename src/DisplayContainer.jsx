import React, { Component } from 'react';
import DisplayCards from './DisplayCards';
class DisplayContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      topStories: [],
    };
    this.scanItems = this.scanItems.bind(this);
  }

  _isMounted = false;
  componentDidMount() {
    this._isMounted = true;
    if (this._isMounted) {
      fetch(
        'https://hacker-news.firebaseio.com/v0/topstories.json?print=pretty'
      )
        .then((response) => response.json())
        .then((data) => this.setState({ topStories: data }));
    }
  }

  componentWillUnmount() {
    this._isMounted = false;
  }

  scanItems(items) {
    if (items.length !== undefined) {
      return items.map((item, index) => {
        return <DisplayCards key={index} item={item} />;
      });
    }
  }

  render() {
    return (
      <div className='container'>
        <section className='SearchResults'>
          <div className='SearchResults_container'>
            {this.scanItems(this.state.topStories)}
          </div>
        </section>
      </div>
    );
  }
}

export default DisplayContainer;
