import React, { Component } from 'react'

interface UserName{
    
}

interface Name{
    name:string
}

export default class BT01 extends Component<UserName, Name> {
    constructor(name:UserName){
        super(name)
        this.state = {
            name:"Nguyễn Văn Đoan"
        }
    }


  render() {
    return (
      <div>
        <h4>Bài 1</h4>
        {this.state.name}
      </div>
    )
  }
}
