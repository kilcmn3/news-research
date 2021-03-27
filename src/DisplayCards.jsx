/**
 * TODO:
 * - [x]Link vs Anchor issue
 * - [x]Convert unit time to years only
 * - [x]some of the article doesn't have URL link
 * - [x]fetching ..better if use asnychronous way
 * - [x]better handling with error
 *
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

    return () => setStory(null);
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

  return (
    <article className='Story'>
      {story !== null ? (
        <div className='Story_container'>
          {/* check if url has valid link or not */}
          {story.url !== undefined ? (
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
                  <Link
                    to={{
                      pathname: `/item/${story.id}`,
                    }}>
                    {story.score} points{' '}
                  </Link>
                </span>
                <span className='Story_separator'>|</span>
                <span>
                  <Link to={{ pathname: `/user/${story.by}` }}>
                    {story.by}{' '}
                  </Link>
                </span>
                <span className='Story_separator'>|</span>
                <span>
                  <Link
                    to={{
                      pathname: `/item/${story.id}`,
                    }}>
                    {dateCompute(story.time)} ago{' '}
                  </Link>
                </span>
                <span className='Story_separator'>|</span>
                <span>
                  <Link
                    to={{
                      pathname: `/item/${story.id}`,
                    }}>
                    {story.kids !== undefined ? story.kids.length : 0}
                    comments
                  </Link>
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
