import React, { Component } from 'react';

class Input extends Component {
  constructor(props) {
    super(props);
    this.onHandleChange = this.onHandleChange.bind(this);
    this.state = {inputLetter: ''};
  }

  onHandleChange(event) {
    if(event.target.value !== ''){
      this.setState({inputLetter: event.target.value});
      //console.log(event.target.value);
      setTimeout(() => {
         this.setState({inputLetter: ''});
      }, 500);
    }   
  }

  render() {
    return(
      <div>
        <input type ='text' maxLength='1' value={this.state.inputLetter} onChange={this.onHandleChange}/>
      </div>
    )
  }


}

export default Input;