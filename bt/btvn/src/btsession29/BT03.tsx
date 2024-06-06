import React from 'react'

export default function BT03() {

    const changeInput = (e:React.ChangeEvent<HTMLInputElement>)=>{
        console.log(e.target.value);
        
    }
  return (
    <div>BT03
        <input onChange={changeInput} type="date" />
    </div>
  )
}
