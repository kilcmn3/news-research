import React, { useEffect, useState } from 'react';
import DisplayCards from './DisplayCards';

const DisplayContainer = (props) => {
  const [topStories, setTopStories] = useState([]);

  useEffect(() => {
    fetch('https://hacker-news.firebaseio.com/v0/topstories.json?print=pretty')
      .then((response) => response.json())
      .then((data) => setTopStories(data));
  }, []);

  const scanItems = (items) => {
    if (items.length !== undefined) {
      return items.map((item, index) => {
        return <DisplayCards key={index} item={item} />;
      });
    }
  };

  return (
    <div className='container'>
      <section className='SearchResults'>
        <div className='SearchResults_container'>{scanItems(topStories)}</div>
      </section>
    </div>
  );
};

export default DisplayContainer;
