import React, { useState } from 'react'

export default function SelectOption() {
    const [select,setSelect] = useState<string>("")

    const handleChange = (e:React.ChangeEvent<HTMLSelectElement>)=>{
        setSelect(e.target.value)
    }

    console.log(select);
    
  return (
    <div>SelectOption
        <select onChange={handleChange} name="" id="">
            <option value="nam">Nam</option>
            <option value="nữ">Nữ</option>
            <option value="khác">Khác</option>
        </select>
    </div>
  )
}
