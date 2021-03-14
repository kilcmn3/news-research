/**
 * TODO:
 * -[]regex for URL ex) www.bbc.com/item/123 -> bbc.com
 * -[]when click bbc link shows all the articles that relate to  bbc articles
 * -[]when click author shows all the articles about author's related
 * -[]when click data refresh the  page?
 * -[x]Unix time fix
 * **/

import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ViewArticleCard from './ViewArticleCard';

const ViewArticleContainer = (props) => {
  const [article, setArticle] = useState(null);
  const params = useParams();
  const _newsAPI = `https://hacker-news.firebaseio.com/v0/item/${params.itemId}.json?print=pretty`;
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

  useEffect(() => {
    fetch(_newsAPI)
      .then((response) => response.json())
      .then((data) => setArticle(data))
      .then((e) => console.log(e));

    return () => setArticle(null);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const scanComments = () => {
    if (article.kids !== undefined) {
      return article.kids.map((comment, index) => {
        return <ViewArticleCard key={index} comment={comment} />;
      });
    }
  };

  const dateCompute = (articleTime) => {
    const date = new Date();
    const commentMonth = parseInt(date.getMonth(articleTime));
    const commentDate = parseInt(date.getDate(articleTime));
    const commentYear = parseInt(date.getFullYear(articleTime));

    return months[commentMonth] + ' ' + commentDate + ', ' + commentYear;
  };

  const urlWithoutProtocol = (articleUrl) => {
    console.log(articleUrl);
    if (!articleUrl) {
      return false;
    }

    const url = new URL(articleUrl).hostname;
    return url[0] === 'w' ? url.substr(4) : url;
  };

  return (
    <center>
      {article !== null ? (
        <table id='hnmain'>
          <tbody>
            <tr>
              <td>
                <table className='fatitem'>
                  <tbody>
                    <tr className='athing' id={params.itemId}>
                      <td className='title'>
                        <a href={article.url}>{article.title}</a>
                        <span className='sitebit comehead'>
                          (
                          <a href={article.url}>
                            <span className='sitestr'>
                              {urlWithoutProtocol(article.url)}
                            </span>
                          </a>
                          )
                        </span>
                      </td>
                    </tr>
                    <tr>
                      <td colspna='2'></td>
                      <td className='subtext'>
                        <span className='score' id={`score_${params.itemId}`}>
                          {article.score}
                        </span>
                        points by
                        <a href={article.by} className='hnuser'>
                          {article.by}
                        </a>
                        <span className='age'>
                          <a href={params.id}>on {dateCompute(article.Time)}</a>
                          <span id={`unv_${params.itemId}`}></span>
                        </span>
                        |
                        <a href={params.id}>
                          {article.kids !== undefined ? article.kids.length : 0}{' '}
                          comments
                        </a>
                      </td>
                    </tr>
                  </tbody>
                </table>
                <br />
                <br />
                <table className='comment-tree'>{scanComments()}</table>
              </td>
            </tr>
          </tbody>
        </table>
      ) : (
        <div></div>
      )}
    </center>
  );
};

export default ViewArticleContainer;
