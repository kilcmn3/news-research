/**
 * TODO:
 * - [x]Link vs Anchor issue
 * - []Convert unit time to years only
 * - []some of the article doesn't have URL link
 * - []fetching ..better if use asnychronous way
 */

import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const DisplayCards = (props) => {
  const [story, setStory] = useState({});
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  async function dataAPI() {
    try {
      await fetch(
        `https://hacker-news.firebaseio.com/v0/item/${props.item}.json?print=pretty`
      )
        .then((response) => response.json())
        .then((data) => setStory(data));
      await setLoading(true);
    } catch (e) {
      setError(e);
    }
  }

  useEffect(() => {
    dataAPI();
    return () => setStory({});
  }, []);

  return (
    <article className='Story'>
      {loading ? (
        <div className='Story_container'>
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
      ) : (
        'loading'
      )}
    </article>
  );
};

export default DisplayCards;
