/**
 * TODO:
 * - []Link vs Anchor issue
 * - []Convert unit time to years only
 */

import React, { Component } from 'react';

class DisplayCards extends Component {
  constructor(props) {
    super(props);
    this.state = {
      story: {},
    };
  }

  componentDidMount() {
    fetch(
      `https://hacker-news.firebaseio.com/v0/item/${this.props.item}.json?print=pretty`
    )
      .then((response) => response.json())
      .then((data) => this.setState({ story: data }));
  }
  render() {
    const { story } = this.state;
    return (
      <article className='Story'>
        <div className='Story_container'>
          <div className='Story_data'>
            <div className='Story_title'>
              <a href={story.url}>{story.title}</a>
              <a href={story.url}>({story.url})</a>
            </div>
            <div className='Story_meta'>
              <span>
                <a href={story.url}>{story.score} points</a>
              </span>
              <span className='Story_separator'>|</span>
              <span>
                <a href={story.url}>{story.by}</a>
              </span>
              <span className='Story_separator'>|</span>
              <span>
                <a href={story.url}>{story.time}</a>
              </span>
              <span className='Story_separator'>|</span>
              <span>
                <a href={story.url}>{story.time} ago</a>
              </span>
              <span className='Story_separator'>|</span>
              <span>
                <a href={story.url}>
                  {story.kids !== undefined ? story.kids.length : 0}
                  times
                </a>
              </span>
            </div>
          </div>
        </div>
      </article>
    );
  }
}

export default DisplayCards;
