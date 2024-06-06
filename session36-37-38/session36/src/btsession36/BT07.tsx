import React, { useRef, useState } from 'react'

export default function BT07() {
    const [count,setCount]= useState<number>(0)

    const countRef = useRef(-2)
    countRef.current = countRef.current +1

    const handleClick = ()=>{
        
        setCount(count + 1)
    }
    
  return (
    <div>BT07:
        <p>giá trị trước:{countRef.current < 0 ? "" : countRef.current}</p>
        <p>giá trị hiện tại:{count}</p>
        <button onClick={handleClick}>Tăng</button>
    </div>
  )
}
