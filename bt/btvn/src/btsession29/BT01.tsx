import React from 'react'

export default function BT01() {

    const handleClick = ()=>{
        console.log("clicked");
        
    }
  return (
    <div>BT01
        <button onClick={handleClick}>click</button>
    </div>
  )
}
