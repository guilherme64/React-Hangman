import React, { Component } from 'react';
import Letter from './letter';

class Word extends Component {
  constructor(props) {
    super(props);
    this.word = this.props.word;
    let input =  this.props.input;
    this.letters = this.word.split('').map(function(cur, index) {
      return <Letter key={index} letter={cur} input={input}/>
    });
  }

  render() {
    const placeholder = this.word.split('').map(function(cur){
      return ' _ ';
    }).join('');
    return(
      <div>
        <h1>{placeholder}</h1>
      </div>
    )
  }

}

export default Word;