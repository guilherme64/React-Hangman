import React, { Component } from 'react';

import Letter from './letter';
import Word from './word';
import Input from './input';

class Container extends Component {
  constructor(props){
    super(props);
    this.state = {input: ''}
    this.handleInputLetter = this.handleInputLetter.bind(this);
  }

  handleInputLetter(letter) {
    this.setState({input: letter});
    console.log('esse é o input '+ this.state.input);
  }

  render(){
    return(
      <div>
        <Word word='PALAVRA' input={this.state.input}/>
        <Input handleInputLetter = {this.handleInputLetter}/>
      </div>
    );
  }
}
export default Container;