/**
 *TODO:
 *-[]Imply style on <div> tag
 *-[x]submissions, comments, favorites
 **/

import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ReactHtmlParser from 'react-html-parser';

const UserContainer = () => {
  const [user, setUser] = useState('');
  const date = new Date();
  const months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];
  let params = useParams();

  useEffect(() => {
    fetch(
      ` https://hacker-news.firebaseio.com/v0/user/${params.userName}.json?print=pretty`
    )
      .then((response) => response.json())
      .then((data) => setUser(data));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <center>
      {/* style = style="margin-top:2px; margin-bottom:-10px;" */}
      <table id='hnmain'>
        <tbody>
          <tr>
            <td>
              <table border='0'>
                <tbody>
                  <tr className='athing'>
                    <td valign='top'>user:</td>
                    <td timestamp={user.created}>{user.id}</td>
                  </tr>
                  <tr>
                    <td valign='top'>created:</td>
                    <td>
                      {months[date.getMonth(user.created)]}{' '}
                      {date.getDate(user.created)},{' '}
                      {date.getFullYear(user.created)}
                    </td>
                  </tr>
                  <tr>
                    <td valign='top'>karma:</td>
                    <td>{user.karma}</td>
                  </tr>
                  <tr>
                    <td valign='top'>about:</td>
                    <td>{ReactHtmlParser(user.about)}</td>
                  </tr>
                  <tr>
                    <td></td>
                    <td>
                      <u>submissions</u>
                    </td>
                    <td></td>
                    <td>
                      <u>comments</u>
                    </td>
                  </tr>
                </tbody>
              </table>
            </td>
          </tr>
        </tbody>
      </table>
    </center>
  );
};

export default UserContainer;
