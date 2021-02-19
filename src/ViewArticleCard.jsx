/**
 *TODO:
 *-[]Imply style on <div> tag
 **/

import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const ViewArticleCard = (props) => {
  const [comment, setComment] = useState(null);

  useEffect(() => {
    fetch(
      `https://hacker-news.firebaseio.com/v0/item/${props.comment}.json?print=pretty`
    )
      .then((response) => response.json())
      .then((data) => {
        if (data.by !== undefined) return setComment(data);
      })
      .catch((e) => console.log(e));

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <tbody>
      {comment !== null ? (
        <tr className='athing comtr' id={props.comment}>
          <td>
            <table>
              <tbody>
                <tr>
                  <td className='default'>
                    {/* style = style="margin-top:2px; margin-bottom:-10px;" */}
                    <div>
                      <span className='comhead'>
                        <Link
                          to={{
                            pathname: `/user/${comment.by}`,
                          }}>
                          {comment.by}
                        </Link>
                      </span>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </td>
        </tr>
      ) : (
        <tr></tr>
      )}
    </tbody>
  );
};
export default ViewArticleCard;
