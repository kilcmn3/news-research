import React, { useState, useEffect } from 'react';

const SubmittedFetch = (props) => {
  const [article, setArticle] = useState(null);

  useEffect(() => {
    fetch(
      `https://hacker-news.firebaseio.com/v0/item/${props.parent}.json?print=pretty`
    )
      .then((response) => response.json())
      .then((data) => setArticle(data));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const urlWithoutProtocol = (commentUrl) => {
    if (!commentUrl) {
      return false;
    }

    const url = new URL(commentUrl).hostname;
    return url[0] === 'w' ? url.substr(4) : url;
  };

  console.log(article);
  return article !== null ? (
    <>
      <a href={article.url} className='stroylink' rel='nofollow'>
        {article.title}
      </a>
      <span className='sitebit comhead'>
        <a href={article.url}>{urlWithoutProtocol(article.url)}</a>
      </span>{' '}
    </>
  ) : (
    <></>
  );
};

export default SubmittedFetch;
