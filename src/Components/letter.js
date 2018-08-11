import React, { Component } from 'react';

class Letter extends Component {
    constructor(props) {
        super(props);
        this.letter = this.props.letter;
    }
    render() {
      return(
       <span>{this.letter}</span> 
      );
    }
}
Letter.defaultProps = {letter: ''}

export default Letter;