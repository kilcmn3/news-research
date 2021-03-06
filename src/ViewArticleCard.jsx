/**
 *TODO:
 *-[]Imply style on <div> tag
 *-[]dangerousInnerHtml vs ReactHtmlParser
 *-[]Comment.text need to seperate text with html tag..
 *-[x]Fix unix time.
 **/

import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const ViewArticleCard = (props) => {
  const [comment, setComment] = useState(null);
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

  const dateCompute = (commentTime) => {
    const date = new Date();
    const commentMonth = parseInt(date.getMonth(commentTime));
    const commentDate = parseInt(date.getDate(commentTime));
    const commentYear = parseInt(date.getFullYear(commentTime));

    return months[commentMonth] + ' ' + commentDate + ', ' + commentYear;
  };

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
                        <span className='age'>
                          on {dateCompute(comment.time)}
                        </span>
                      </span>
                    </div>
                    <br></br>
                    <div className='comment'>
                      {/* DOMparase()
                      please read here : https://developer.mozilla.org/en-US/docs/Web/API/DOMParser */}
                      <span className='commtext c00'></span>
                      {/* {ReactHtmlParser(comment.text)} */}
                      <div dangerouslySetInnerHTML={{ __html: comment.text }} />
                      <div className='reply'></div>
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
