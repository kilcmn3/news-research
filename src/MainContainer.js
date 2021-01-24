import React, { Component, useState, useEffet } from 'react';

const MainContainer = () => {
  const [news, setNews] = useState({});

  useEffect(() => {
    return () => {
      cleanup;
    };
  }, []);
  return <div>MainContainer</div>;
};

export default MainContainer;
