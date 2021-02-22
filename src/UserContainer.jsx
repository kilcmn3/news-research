/**
 *TODO:
 *-[]Imply style on <div> tag
 *-[]submissions, comments, favorites
 **/

import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ReactHtmlParser from 'react-html-parser';

const UserContainer = (props) => {
  const [user, setUser] = useState('');

  let params = useParams();

  useEffect(() => {
    fetch(
      ` https://hacker-news.firebaseio.com/v0/user/${params.userName}.json?print=pretty`
    )
      .then((response) => response.json())
      .then((data) => setUser(data));
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
                    <td>{user.created}</td>
                  </tr>
                  <tr>
                    <td valign='top'>karma:</td>
                    <td>{user.karma}</td>
                  </tr>
                  <tr>
                    <td valign='top'>about:</td>
                    <td>{ReactHtmlParser(user.about)}</td>
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
