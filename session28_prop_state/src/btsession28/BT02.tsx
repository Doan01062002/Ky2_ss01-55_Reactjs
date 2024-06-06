import React, { useState } from 'react'

export default function BT02() {
    const [obj,setObj] = useState<any>({id:1, name:"Nguyễn Văn Sơn", birth:"20/12/2023", address:"Thanh Xuân, Hà Nội"})
  return (
    <div>
        <h4>Thông tin cá nhân</h4>
        <p>id: {obj.id}</p>
        <p>Tên: {obj.name}</p>
        <p>Ngày sinh: {obj.birth}</p>
        <p>Địa chỉ: {obj.address}</p>
    </div>
  )
}
