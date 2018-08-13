import React, { Component } from 'react';

import Letter from './letter';
import Word from './word';
import Input from './input';

class Container extends Component {
  constructor(props){
    super(props);
    this.state = {input: ''}
  }

  handleInputLetter(letter) {
    this.setState({input: letter});
  }



  render(){
    return(
      <div>
        <Word word='PALAVRA' input={this.state.input}/>
        <Input />
      </div>
    );
  }
}
export default Container;