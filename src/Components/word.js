import React, { Component } from 'react';
import Letter from './letter';

class Word extends Component {
  constructor(props) {
    super(props);
    var input = this.props.input
    this.word = this.props.word;
    this.letters = this.word.split('').map(function(cur, index) {
      return <Letter key={index} letter={cur} input={input}/>
    });
    console.log(this.letters);
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