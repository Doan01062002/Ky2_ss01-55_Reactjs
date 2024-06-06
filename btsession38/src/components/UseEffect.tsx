import React, { useEffect, useState } from 'react'

export default function UseEffect() {

    const [count,setCount] = useState<number>(0)
    const [number,setNumber] = useState<number[]>([])
    const [active,setActive] = useState<boolean>(false)
    useEffect(()=>{
        console.log("đang gọi");
        
    },[active])//khi active thay đổi thì useEffect chạy

    console.log(111);
    const handleClick = ()=>{
        // khi click thì thêm một số bất kỳ vào mảng
        let randomNumber = Math.floor(Math.random()*100)

        //khi push thì useEffect không chạy tức ko re-render
        number.push(randomNumber)

        //thay đổi giá trị để re-render
        setNumber([...number])

        console.log(number);
    }

    
    
  return (
    <div>
        {/* 
            Tất cả các hook bản chất là function khi dùng phải import để dùng
            UseEffect nhận vào 2 đối số:
            1. là đối số (callback)
            2. [] hoặc [deps] (dependen)
            ==> có 3 cách dùng:
                c1: chỉ chứa callback là 1 arrowfunction
                -khi component đc mount vào dom thì useEffect được gọi
                -mỗi lần component đc re-render thì nó cũng được gọi
                c2: chứa callback và []
                -cũng được gọi sau khi component được mount vào dom
                -khi mỗi lần component re-render thì không bị gọi lại
                
                c3: chứa callback và [dependency]
                -componentDidmount được gọi khi component được render lần đầu
                -khi dependence thay đổi thì useEffect đc gọi

            useEffect là phương thức dùng để xử lý các tác vụ như callAPI để lấy dữ liệu
            - Thường dùng để sử lý các side effect (bên cạnh ảnh hưởng phụ thuộc)
            componentDidMount
         */}
        <p>giá trị count {count}</p>
        <button onClick={handleClick}>click</button>
    </div>
  )
}
