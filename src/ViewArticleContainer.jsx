import React, { Component } from 'react';

class ViewArticleContainer extends Component {
  constructor(props) {
    super(props);
  }

  componetDidMount() {
    const { comments } = this.props.location.state;
  }

  render() {
    console.log(this.props.location);
    return <div>Hello this is View ViewArticleContainer</div>;
  }
}

export default ViewArticleContainer;
