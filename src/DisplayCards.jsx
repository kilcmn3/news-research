import React, { Component } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Link } from 'react-router-dom';

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
      <Router>
        <div className='DisplayCards'>
          <article className='Stroy'>
            <div className='Stroy_container'>
              <div className='Stroy_data'>
                <div className='Stroy_title'>
                  <Link href={article.url}>
                    <span>{article.title}</span>
                  </Link>
                  <Link href={article.url} className='Stroy_link'>
                    ({article.url})
                    <div className='Stroy_meta'>
                      <span>
                        <Link href={article.url}>{article.score} points</Link>
                      </span>
                      <span className='Story_separator'>|</span>
                      <span>
                        <Link href={article.url}>
                          <span>{article.by}</span>
                          <span className='Story_separator'>|</span>
                        </Link>
                      </span>
                      <span>
                        {/* start here again*/}
                        <Link href={article.url}></Link>
                      </span>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </article>
        </div>
      </Router>
    );
  }
}

export default DisplayCards;
