import React, { Component } from 'react';

import Letter from './letter';
import Word from './word';
import Input from './input';

class Container extends Component {
  constructor(props){
    super(props);
    this.state = {input: ''}
    this.handleInput = this.handleInput.bind(this);
  }

  handleInput(letter) {
    this.setState({input: letter});
    console.log('esse é o input '+ this.state.input);
  }

  render(){
    return(
      <div>
        <Word word={'metal'.toUpperCase()} input={this.state.input}/>
        <Input handleInput = {this.handleInput}/>
      </div>
    );
  }
}
export default Container;