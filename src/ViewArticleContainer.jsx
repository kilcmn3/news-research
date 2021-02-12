import React from 'react';
import { useState, useLocation } from 'react-router-dom';

const ViewArticleContainer = (props) => {
  const [comments, setComments] = useState([]);
  let location = useLocation();
  console.log(location);
  return <div>Hello this is View ViewArticleContainer</div>;
};

export default ViewArticleContainer;
