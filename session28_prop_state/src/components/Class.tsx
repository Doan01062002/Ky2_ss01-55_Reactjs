import React, { Component } from 'react'

interface Classcomponent{
    age:number
    number:number[]
}

export default class Class extends Component<Classcomponent> {
  render() {

    const {age} = this.props
    const {number} = this.props
    return (
      <div>Class
        <p>năm nay minh thu {age} tuổi</p>
        <ul>
            {number.map((item, index)=>{return <li key={index}>{item}</li>})}
        </ul>
      </div>
    )
  }
}
