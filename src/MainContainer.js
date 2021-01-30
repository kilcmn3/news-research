import React, { Component } from 'react';

class MainContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }

<<<<<<< HEAD
  handleOnClick = (event) => {
    this.setState({ count: event.target.value++ });
=======
  handleOnClick = (e) => {
    this.setState({
      count: e.target.value++,
    });
>>>>>>> main
  };
  render() {
    return (
      <div>
<<<<<<< HEAD
        <button onClick={(event) => this.handleOnClick(event)}>
=======
        <button onClick={(e) => this.handleOnClick(e)}>
>>>>>>> main
          {this.state.count}
        </button>
      </div>
    );
  }
}

export default MainContainer;
