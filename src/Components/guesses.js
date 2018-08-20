import React, { Component } from 'react';

class Guesses extends React.Component {
    constructor(props) {
      super(props);
      this.guesses = [];
      
    }

    componentDidUpdate() {
      if(this.guesses.includes(this.props.guess) === false){
        console.log('nao entrou');
        if(this.props.guess !== ''){
          this.guesses.push(this.props.guess);
          console.log(this.guesses);
        }
      }
    }
    render() {
      return <div>{this.guesses.map(function (cur, index) {
        return <span key={index} >{' '+cur+' '}</span>
      })}</div>
    }
}

export default Guesses;