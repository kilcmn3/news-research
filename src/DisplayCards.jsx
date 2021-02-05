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
    const { article } = this.state;
    console.log(article);
    return (
      <div className='DisplayCards'>
        <article className='Stroy'>
          <div className='Stroy_container'>
            <div className='Stroy_data'>
              <div className='Stroy_title'>
                <a href={article.url}>
                  <span>{article.title}</span>
                </a>
                <a href={article.url} className='Stroy_link'>
                  ({article.url})
                  <div className='Stroy_meta'>
                    <span>
                      <a href={article.url}>{article.score} points</a>
                    </span>
                    <span className='Story_separator'>|</span>
                    <span>
                      <a href={article.url}>
                        <span>{article.by}</span>
                        <span className='Story_separator'>|</span>
                      </a>
                    </span>
                    <span>
                      {/* start here again*/}
                      <a href={article.url}></a>
                    </span>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </article>
      </div>
    );
  }
}

export default DisplayCards;
