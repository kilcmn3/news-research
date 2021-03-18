/**TODO:
 *[] - <table> styling
 **/

import React, { useEffect, useState } from 'react';

const SubmittedCards = (props) => {
  const [article, setArticle] = useState(null);

  const fetchSubmssions = () => {
    return fetch(
      `https://hacker-news.firebaseio.com/v0/item/${props.submission}.json?print=pretty`
    )
      .then((response) => response.json())
      .then((data) => setArticle(data));
  };

  useEffect(() => {
    fetchSubmssions();
    return () => setArticle(null);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const urlWithoutProtocol = (articleUrl) => {
    if (!articleUrl) {
      return false;
    }

    const url = new URL(articleUrl).hostname;
    return url[0] === 'w' ? url.substr(4) : url;
  };

  console.log(article);
  return article !== null ? (
    <td className='title' id={article.id}>
      <a href={article.url} className='stroylink' rel='nofollow'>
        {article.title}
      </a>
      <span className='sitebit comhead'>
        (<a href={article.url}>{urlWithoutProtocol(article.url)}</a>)
      </span>
    </td>
  ) : (
    <td></td>
  );
};

export default SubmittedCards;
