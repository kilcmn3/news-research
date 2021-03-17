import React, { useEffect, useState } from 'react';

const SubmittedCards = (props) => {
  const [article, setarticles] = useState(null);

  const fetchSubmssions = () => {
    return fetch(
      `https://hacker-news.firebaseio.com/v0/item/${props.submission}.json?print=pretty`
    )
      .then((response) => response.json())
      .then((data) => setarticles(data));
  };

  useEffect(() => {
    fetchSubmssions();
    return () => setarticles(null);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  console.log(article);
  return <div>submittedCards</div>;
};

export default SubmittedCards;
