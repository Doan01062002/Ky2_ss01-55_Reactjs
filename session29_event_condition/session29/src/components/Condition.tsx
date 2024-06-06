import React, { useState } from 'react'
import Modal from './Modal'

export default function Condition() {
    const [active, setActive] = useState<boolean>(true)

    const handleClick = ()=>{
        console.log("click");
        setActive(!active);
        
    }
  return (
    <div>Condition
        
        {active? <Modal></Modal>: ""}
        <button onClick={handleClick}>click</button>
    </div>
  )
}
