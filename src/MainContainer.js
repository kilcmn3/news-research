import React, { Component } from 'react';

class MainContainer extends React {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }

  handleOnClick = (count) => {
    console.log(count);
  };
  render() {
    return (
      <div class='MainContainer'>
        <button onClick={(count) => this.handleOnClick(count)}>
          {this.state.count}
        </button>
      </div>
    );
  }
}

export default MainContainer;
