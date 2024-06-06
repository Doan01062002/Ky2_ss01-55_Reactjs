import React, { Component } from 'react'

export default class classcomponent extends Component {
    constructor(){
        super();
        this.state = {
            name:"minh thu",
            cart:[{
                id:1,
                product:"iphone"
            }],
            age:20
        }
    }
  render() {
    return (
      <div>Class component
        <p>xin chào {this.state.name}</p>
        <ul>
          {this.state.cart.map((item,index)=>{
            return <li key = {index}>{item.product}</li>
          })}
        </ul>
      </div>
    )
  }
}
