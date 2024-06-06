import React, { useMemo, useState } from 'react'

interface Product{
  id:number,
  name:string,
  price:number,
  quantity:number
}

export default function UseMemo() {
  const [count,setCount] = useState<number>(0)
  
  let cart:Product[] = [
    {
      id:1,
      name:"iphone1",
      price:200000,
      quantity:12
    },
    {
      id:2,
      name:"iphone2",
      price:300000,
      quantity:12
    },
    {
      id:3,
      name:"iphone3",
      price:400000,
      quantity:12
    },
  ]

  const [myCart,setMyCart] = useState<Product[]>(cart)

  useMemo(()=>{
    //tính toán giá phải trả
  let payment = cart.reduce((acc,current)=>{
    return acc + current.price *current.quantity
  },0)

  console.log(payment);
  

  return payment

  },[count])
  
  return (
    <div>UseMemo
      {/* 
          memory: bộ nhớ
          giúp ghi nhớ lại những tính toán phức tạp và chỉ tính toán lại khi cần thiết
       */}

       <button onClick={()=>setCount(count+1)}>click</button>
    </div>
  )
}
