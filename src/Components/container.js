import React, { Component } from 'react';

import Letter from './letter';
import Word from './word';
import Input from './input';
import Guesses from './guesses';

class Container extends Component {
  constructor(props){
    super(props);
    this.state = {input: ''}
    this.handleInput = this.handleInput.bind(this);
    this.word = 'inconstitucionalissimamente'.toUpperCase();
  }

  handleInput(letter) {

    this.setState({input: letter});
    console.log('esse é o input '+ this.state.input);
  }

  render(){
    return(
      <div>
        <Word word={this.word} input={this.state.input}/>
        <Input handleInput = {this.handleInput}/>
        <Guesses guess={this.word.includes(this.state.input)? '-' :this.state.input}/>

      </div>
    );
  }
}
export default Container;