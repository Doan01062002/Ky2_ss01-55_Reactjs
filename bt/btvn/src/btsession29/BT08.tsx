import React, { useState } from 'react'

export default function BT08() {
    const [number,setNumber] = useState<number>(0)

    const handleClick = ()=>{
        setNumber(number+1)
    }
  return (
    <div>BT08
        <button onClick={handleClick}>click {number} lần</button>
    </div>
  )
}
