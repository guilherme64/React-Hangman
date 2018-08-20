import React, { Component } from 'react';

class Letter extends Component {
    constructor(props) {
        super(props);
        this.state = {letter: this.props.letter, hidden: true}
       
        console.log(this.props.input);
    }
     componentDidUpdate() {
        if(this.state.hidden === true){
            if(this.props.input === this.props.letter){
                this.setState({hidden: false});
            }
        }  
    }
    render() {
        if(this.state.hidden === true){
            return<span>{' _ '}</span>
        }
        else{
            return<span>{' '+this.state.letter+' '}</span>
        }
        /*
        if(this.state.hidden === true) {
            return <span>{' _ '}</span>
        }else{
            return<span>{' '+this.state.letter+' '}</span>
        }*/
    }
}

export default Letter;