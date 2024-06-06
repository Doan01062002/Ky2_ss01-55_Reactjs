import React, { useState } from 'react'

export default function BT02() {

    const changeInput = (e:React.ChangeEvent<HTMLInputElement>)=>{
        console.log(e.target.value);
        
    }
  return (
    <div>BT02
        <input onChange={changeInput} type="text" />
    </div>
  )
}
