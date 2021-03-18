/**TODO:
 *[] - <table> styling
 **/

import React, { useEffect, useState } from 'react';
import SubmittedFetch from './SubmittedFetch';

const SubmittedCards = (props) => {
  const [comment, setComment] = useState(null);

  const fetchSubmssions = () => {
    return fetch(
      `https://hacker-news.firebaseio.com/v0/item/${props.submission}.json?print=pretty`
    )
      .then((response) => response.json())
      .then((data) => setComment(data));
  };

  useEffect(() => {
    fetchSubmssions();

    return () => setComment(null);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const parentArticle = (list) => {
    if (!list.deleted) {
      return <SubmittedFetch parent={list.parent} />;
    }
    return <></>;
  };

  return comment !== null ? (
    <td className='title' id={comment.id}>
      {parentArticle(comment)}
    </td>
  ) : (
    <td></td>
  );
};

export default SubmittedCards;
