import React, { useState } from 'react'
import BT06_children from './BT06_children'

export default function BT06() {
    const [active,setActive] = useState<boolean>(true)

    const handleClick = ()=>{
        setActive(!active)
    }
  return (
    <div>BT06
        {active? <BT06_children></BT06_children>:""}
        <button onClick={handleClick}>{active? "Hiện":"Ẩn"}</button>
    </div>
  )
}
