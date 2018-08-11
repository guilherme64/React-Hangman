import React, { Component } from 'react';

class Letter extends Component {
    constructor(props) {
        super(props);
        this.letter = this.props.letter;
        this.state = {letter: this.props.letter, hidden: true}
    }
    render() {
      return(
       <span>{this.state.hidden?this.state.letter:'_'}</span> 
      );
    }
}
Letter.defaultProps = {letter: ''}

export default Letter;