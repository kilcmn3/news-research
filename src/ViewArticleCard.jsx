/**
 *TODO:
 *-[]Imply style on <div> tag
 **/

import React, { useEffect, useState } from 'react';

const ViewArticleCard = (props) => {
  const [comment, setComment] = useState(null);
  useEffect(() => {
    fetch(
      `https://hacker-news.firebaseio.com/v0/item/${props.comment}.json?print=pretty`
    )
      .then((response) => response.json())
      .then((data) => setComment(data));

    return () => setComment(null);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <tbody>
      <tr className='athing comtr' id={props.comment}>
        <td>
          <table>
            <tbody>
              <tr>
                <td className='default'>
                  {/* style = style="margin-top:2px; margin-bottom:-10px;" */}
                  <div>
                    <span className='comhead'></span>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </td>
      </tr>
    </tbody>
  );
};
export default ViewArticleCard;
