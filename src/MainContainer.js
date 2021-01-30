import React, { Component } from 'react';

class MainContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }

  handleOnClick = (event) => {
    this.setState({ count: event.target.value++ });
  };
  render() {
    return (
      <div>
        <button onClick={(event) => this.handleOnClick(event)}>
          {this.state.count}
        </button>
      </div>
    );
  }
}

export default MainContainer;
