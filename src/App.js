import React, { Component } from 'react';
import Letter from './Components/letter';
import Word from './Components/word';
import Input from './Components/input';


class App extends Component {
  constructor(props){
    super(props);
  }

  render() {
    return (
      <div>
       <Word word='PALAVRA' />
       <Input />
      </div>
    );
  }
}

export default App;
