import React, { Component } from 'react';

class Test extends Component {
  render() {
    return (
      <div>
        <div>counter {this.state.count}</div>
        <button onClick={ this.increment}>incrment</button>
      </div>
    );
  }
}

export default Test;
