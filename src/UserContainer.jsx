/**
 *TODO:
 *-[]Imply style on <div> tag
 **/

import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

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

  console.log(user);
  return (
    <center>
      {/* style = style="margin-top:2px; margin-bottom:-10px;" */}
      <table id='hnmain'>
        <tbody>
          <tr>
            <td>
              <table border='0'>
                <tbody>
                  <tr className='athing'></tr>
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
