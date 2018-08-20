import React, { Component } from 'react';
import Letter from './letter';

class Word extends Component {
  constructor(props) {
    super(props);
    this.word = this.props.word;
  }



  render() {
    let input = this.props.input;
    let compareInput = this.props.compareInput;
    return(
      <div>
        <h1>
          {this.word.split('').map(function(cur, index) {
            return <Letter key={index} letter={cur} input={input.toUpperCase()}/>
         })}
    </h1>
      </div>
    )
  }

}

export default Word;