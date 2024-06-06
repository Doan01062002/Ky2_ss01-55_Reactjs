import React, { useState } from 'react'

export default function BT07() {
  const [array, setArray] = useState<number[]>([]);
  const addElement = () =>{
      let number: number = Math.floor(Math.random() * 10);
      setArray(prevArray => [...prevArray, number]);
  }
return (
  <div>
      <b>Ex07</b>
      <h3>Mảng số: [{array.join(', ')}]</h3>
      <button onClick={addElement}>Add element</button>
  </div>
  )
}
