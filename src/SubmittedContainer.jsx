import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import SubmittedCard from './SubmittedCards';

const SubmittedContainer = (props) => {
  const [user, setUser] = useState(null);
  const params = new useParams();

  const fetchUserSubmition = () => {
    return fetch(
      `https://hacker-news.firebaseio.com/v0/user/${params.userName}.json?print=pretty`
    )
      .then((response) => response.json())
      .then((data) => setUser(data));
  };

  useEffect(() => {
    fetchUserSubmition();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    return () => setUser(null);
  }, []);

  const renderSubmissionCards = (submissions) => {
    return submissions.map((submission, index) => {
      return <SubmittedCard key={index} submission={submission} />;
    });
  };
  return (
    <div>
      SubmittedContainer
      {user !== null ? renderSubmissionCards(user.submitted) : <div></div>}
    </div>
  );
};

export default SubmittedContainer;
