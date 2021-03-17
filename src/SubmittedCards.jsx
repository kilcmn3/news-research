/**TODO:
 *[] - <table> styling
 **/

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

  return (
    <center>
      {/* border="0" cellpadding="0" cellspacing="0" width="85%" bgcolor="#f6f6ef" */}
      <table id='hnmain'></table>
    </center>
  );
};

export default SubmittedCards;
