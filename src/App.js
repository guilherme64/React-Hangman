import React, { Component } from 'react';
import Letter from './Components/letter';
import Word from './Components/word';

class App extends Component {
  render() {
    return (
      <div>
       <Word word='PALAVRA' />
      </div>
    );
  }
}

export default App;
