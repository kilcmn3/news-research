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

  return article !== null ? (
    <td className='athing' id={article.id}></td>
  ) : (
    <td></td>
  );
};

export default SubmittedCards;
