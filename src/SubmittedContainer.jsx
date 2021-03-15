import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

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
  }, []);

  return <div>SubmittedContainer</div>;
};

export default SubmittedContainer;
