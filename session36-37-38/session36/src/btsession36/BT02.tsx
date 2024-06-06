import React, { useEffect, useState } from 'react'

export default function BT02() {
    const [count,setCount] = useState<number>(0)

    const handleClick = ()=>{
        setCount(count +1)
    }

    useEffect(()=>{
        document.title = `click ${count} lần`
    })
  return (
    <div>BT02:
        <button onClick={handleClick}>click {count} lần</button>
    </div>
  )
}
