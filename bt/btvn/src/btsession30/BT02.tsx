import React, { Component } from 'react'

export default class BT02 extends Component {

    componentWillMount(): void {
        console.log("Component đã được mount");
    }

  render() {
    return (
      <div>
        <h4>Bài 2</h4>
      </div>
    )
  }
}
