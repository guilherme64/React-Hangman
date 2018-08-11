import React, { Component } from 'react';

class Word extends Component {
  constructor(props) {
    super(props);
    this.word = this.props.word;
  }
  render() {
    return(
      <div>
        <h1>{this.word}</h1>
      </div>
    )
  }

}

export default Word;