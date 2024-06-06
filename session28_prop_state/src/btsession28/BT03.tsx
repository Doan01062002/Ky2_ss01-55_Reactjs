import React, { useState } from 'react'

export default function BT03() {
    const [user, setUser] = useState<any[]>([{id:1,name:"Nguyễn Văn A", address:"Thanh Xuân, Hà Nội"}, {id:2, name:"Nguyễn Văn B", address:"Đống Đa, Hà Nội"}])
  return (
    <div>
        <h4>Render mảng tên</h4>
        {user.map((item,index)=>{
        return <ul key={index}>
            <li>{item.id}</li>
            <li>{item.name}</li>
            <li>{item.address}</li>
        </ul>})}
    </div>
  )
}
