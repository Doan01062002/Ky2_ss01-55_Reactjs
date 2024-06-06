import React, { useState } from 'react'

export default function BT05() {
    const [active,setActive] = useState<boolean>(true)

    const handleClick = ()=>{
        setActive(!active)
    }
  return (
    <div>BT05
        <button onClick={handleClick}>{active? "Hiện":"Ẩn"}</button>
    </div>
  )
}
