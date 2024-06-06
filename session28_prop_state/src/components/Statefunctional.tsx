import React, { useState } from 'react'

export default function Statefunctional() {
    const [number,setNumber] =useState<number>(0)
    //khi dùng useState thì bắt buộc phải khai báo kiểu dữ liệu cho nó
    const [fullName, setFullName] = useState<string>("minh thu")
    //hàm useState trả về 1 mảng bên trong mảng có hai giá trị 1/ là giá trị , 2/ là một hàm đê sử lý

    const handleClick = ()=>{
        setNumber(number+1)
    }
  return (
    <div>Statefunctional
        {
            /*
            React ra đời 2013
            trước đó function không quản lý được state được mà chỉ quản lý state được ở trong class

            10/2018 Hook ra đời bổ sung cho function có thể quản lý được useState
            */
        }

        <p>giá trị number ban đầu {number}</p>
        <button onClick={handleClick}>tăng</button>
    </div>
  )
}
