/**TODO:
 *[] - <table> styling
 **/

import React, { useEffect, useState } from 'react';

const SubmittedCards = (props) => {
  const [article, setarticle] = useState(null);

  const fetchSubmssions = () => {
    return fetch(
      `https://hacker-news.firebaseio.com/v0/item/${props.submission}.json?print=pretty`
    )
      .then((response) => response.json())
      .then((data) => setarticle(data));
  };

  useEffect(() => {
    fetchSubmssions();
    return () => setarticle(null);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return <td class='athing' id={article.id}></td>;
};

export default SubmittedCards;
