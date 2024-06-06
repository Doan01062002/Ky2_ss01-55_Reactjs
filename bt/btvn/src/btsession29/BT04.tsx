import React from 'react'

export default function BT04() {

    const changeSelect = (e:React.ChangeEvent<HTMLSelectElement>)=>{
        console.log(e.target.value);
    }
  return (
    <div>BT04
        <select onChange={changeSelect} name="" id="">
            <option value="">---Chọn tỉnh/ Thành phố---</option>
            <option value="Hà Nội">Hà Nội</option>
            <option value="Hà Nam">Hà Nam</option>
            <option value="Ninh Bình">Ninh Bình</option>
        </select>
    </div>
  )
}
