/**
 * TODO:
 * - [x]Link vs Anchor issue
 * - [x]Convert unit time to years only
 * - []some of the article doesn't have URL link
 * - [x]fetching ..better if use asnychronous way
 * - []better handling with error
 */

import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const DisplayCards = (props) => {
  const [story, setStory] = useState(null);

  useEffect(() => {
    fetch(
      `https://hacker-news.firebaseio.com/v0/item/${props.item}.json?print=pretty`
    )
      .then((response) => response.json())
      .then((data) => setStory(data))
      .catch((error) => console.log(error));

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const dateCompute = (articleYear) => {
    const date = new Date();
    const currentYear = parseInt(date.getFullYear(Date.now));
    articleYear = parseInt(date.getFullYear(articleYear));

    if (currentYear === articleYear) {
      return date.getMonth() + ' months';
    } else {
      return currentYear - date + ' years';
    }
  };

  const isURLValidOrNOt = (url) => {};
  return (
    <article className='Story'>
      {story !== null ? (
        <div className='Story_container'>
          {/* check if url has valid link or not */}
          {isURLValidOrNOt(story.url) !== undefined ? (
            <div className='Story_data'>
              <div className='Story_title'>
                <Link
                  to={{
                    pathname: `/item/${story.id}`,
                  }}>
                  {story.title}
                </Link>
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
                  <a href={story.url}>{dateCompute(story.time)} ago</a>
                </span>
                <span className='Story_separator'>|</span>
                <span>
                  <a href={story.url}>
                    {story.kids !== undefined ? story.kids.length : 0}
                    comments
                  </a>
                </span>
              </div>
            </div>
          ) : (
            <div></div>
          )}
        </div>
      ) : (
        <div></div>
      )}
    </article>
  );
};

export default DisplayCards;
