import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';


const ViewArticleContainer = (props) => {
  
  const [comments, setComments] = useState([]);
  let params = useParams();
  const _newsAPI = `https://hacker-news.firebaseio.com/v0/item/${params.itemId}.json?print=pretty`

  useEffect(() => {
    fetch(_newsAPI
      
    )
      .then((response) => response.json())
      .then((data) => setComments(data));
  }, []);

  return (<center>
    <table id="hnmain">
      <tbody>
        <tr>
          <td>
            <table class="fatitem">
              <tbody>
                <tr class="athing" id={params.itemId}>
                  <td className="title">
                  <a href= {_newsAPI}></a>
                  </td>
                </tr>
              </tbody>
              <br/>
              <br/>
            </table>
          </td>
        </tr>
      </tbody>
    </table>
  </center>;)
};

export default ViewArticleContainer;
