/**TODO:
 *[] - <table> styling
 **/

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
      return (
        <tr key={index}>
          <SubmittedCard submission={submission} />
        </tr>
      );
    });
  };
  return (
    <>
      {user !== null ? (
        <center>
          {/* border="0" cellpadding="0" cellspacing="0" width="85%" bgcolor="#f6f6ef" */}
          <table id='hnmain'>
            <tbody>{renderSubmissionCards(user.submitted)}</tbody>
          </table>
        </center>
      ) : (
        <center></center>
      )}
    </>
  );
};

export default SubmittedContainer;
