import React, { Component } from 'react'

export default class Class extends Component {
    //khai báo pương thức
    handleClick = ()=>{
        console.log("click");
    }
  render() {
    return (
      <div>Class
        <button onClick={this.handleClick}>click</button>
      </div>
    )
  }
}
