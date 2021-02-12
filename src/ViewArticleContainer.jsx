import React, { Component } from 'react';
import { useLocation } from 'react-router-dom';

const ViewArticleContainer = (props) => {
  let location = useLocation();
  console.log(location);
  return <div>Hello this is View ViewArticleContainer</div>;
};

export default ViewArticleContainer;
