import React, { Component } from 'react';

class MainContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }

  handleOnClick = (e) => {
    this.setState({
      count: e.target.value++,
    });
  };
  render() {
    return (
      <div>
        <button onClick={(e) => this.handleOnClick(e)}>
          {this.state.count}
        </button>
      </div>
    );
  }
}

export default MainContainer;
