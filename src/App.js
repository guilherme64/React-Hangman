import React, { Component } from 'react';
import Letter from './Components/letter';
import Word from './Components/word';
import Input from './Components/input';


class App extends Component {
  constructor(props){
    super(props);
    this.state = {input: ''}
  }
  onInputChange() {

  }
 
  render() {
    const input = this.state.input;
    return (
      <div>
       <Word word='PALAVRA' input=''/>
       <Input />
      </div>
    );
  }
}

export default App;
