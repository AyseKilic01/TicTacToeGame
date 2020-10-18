import React, { Component } from 'react';

export default class Square extends Component {
    
    //artıkburadan boarda durum göndermeyeceğimiz için constructorı iptal ettik
    // constructor(props){
    //     super(props);
    //     this.state={
    //         value : null,
    //     };
    // }


  render() {
    return (
        <button className="square" onClick={()=>this.props.onClick({value : 'X'})}>
        {this.props.value}
      </button>
    );
  }
}
