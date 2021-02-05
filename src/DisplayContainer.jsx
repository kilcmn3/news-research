import React, { Component } from 'react';
import DisplayCards from './DisplayCards';
class DisplayContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      topStories: [],
    };
    this.scanItems = this.scanItems.bind(this);
  }

  componentDidMount() {
    fetch('https://hacker-news.firebaseio.com/v0/topstories.json?print=pretty')
      .then((response) => response.json())
      .then((data) => this.setState({ topStories: data }));
  }

  scanItems(items) {
    if (items.length !== undefined) {
      for (let i = 0; i < items.length; i++) {
        return (
          <tr>
            <DisplayCards item={items[i]} />;
          </tr>
        );
      }
    }
  }

  render() {
    return (
      <center>
        <table id='hnmain'>
          <tbody>
            <tr>
              <td>
                <table className='itemlist'>
                  <tbody>{this.scanItems(this.state.topStories)}</tbody>
                </table>
              </td>
            </tr>
          </tbody>
        </table>
      </center>
    );
  }
}

export default DisplayContainer;
