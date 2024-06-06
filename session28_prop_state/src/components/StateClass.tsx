import React, { Component } from 'react'

interface Classcomponent{
    name:string
    address:string
    age:number
    count:number
}
export default class StateClass extends Component<Classcomponent,Classcomponent> {
    constructor(props:Classcomponent){
        super(props)
        this.state = {
            name:"hoa",
            address:"hn",
            age:25,
            count:1
        }
    }

    //khai báo
    //khi muốn cập nhật state ở bên trong class thì dùng setState
    handleClick = ()=>{
        this.setState({
            count:this.state.count +1
        })
    }
  render() {
    return (
      <div>StateClass
        <p>xin chào {this.state.name}</p>
        <p>giá trị ban đầu {this.state.count}</p>
        <button onClick={this.handleClick}>increase</button>
      </div>
    )
  }
}
