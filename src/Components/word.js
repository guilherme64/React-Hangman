import React, { Component } from 'react';
import Letter from './letter';

class Word extends Component {
  constructor(props) {
    super(props);
    this.word = this.props.word;
    this.input = this.props.input;
    this.letters = this.word.split('').map(function(cur) {
      return <Letter letter={cur} />
    });
  }
  render() {
    return(
      <div>
        <h1>{this.letters}</h1>
      </div>
    )
  }

}

export default Word;