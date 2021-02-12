import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const ViewArticleContainer = (props) => {
  const [comments, setComments] = useState([]);
  let params = useParams();

  useEffect(() => {
    fetch(
      `https://hacker-news.firebaseio.com/v0/item/${params.itemId}.json?print=pretty`
    )
      .then((response) => response.json())
      .then((data) => setComments(data));
  }, []);

  console.log(comments);
  return <div>Hello this is View ViewArticleContainer</div>;
};

export default ViewArticleContainer;
