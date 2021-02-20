/**
 *TODO:
 *-[]Imply style on <div> tag
 *-[]Comment.text need to seperate text with html tag..
 **/

import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import ReplyCard from './ReplyCard';

const ViewArticleCard = (props) => {
  const [comment, setComment] = useState(null);
  const domparser = new DOMParser();

  useEffect(() => {
    fetch(
      `https://hacker-news.firebaseio.com/v0/item/${props.comment}.json?print=pretty`
    )
      .then((response) => response.json())
      .then((data) => {
        console.log(typeof data.text);
        if (data.by !== undefined) return setComment(data);
      })
      .catch((e) => console.log(e));

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const commentReplies = () => {
    return comment.kids.map((kid, index) => {
      return <ReplyCard key={index} kid={kid} />;
    });
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
                        <span className='age'>{comment.time}</span>
                      </span>
                    </div>
                    <br></br>
                    <div className='comment'>
                      {/* DOMparase()
                      please read here : https://developer.mozilla.org/en-US/docs/Web/API/DOMParser */}
                      <span
                        className='commtext c00'
                        dangerouslySetInnerHTML={{
                          __html: comment.text,
                        }}></span>
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
