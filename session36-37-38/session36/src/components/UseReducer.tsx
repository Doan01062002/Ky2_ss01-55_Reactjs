import React, { useReducer } from 'react'

export default function UseReducer() {
  //khai báo giá trị khởi tạo
  const initial:number = 0
  //khỏi tạo hàm reducer
  const reducer = (state = initial,action:any)=>{

    switch (action.type) {
      case "Increase":
        return state + action.actionPayload
      case "Decrease":
        return state - action.actionPayload
      default:
        return state;
    }
  }
  //dùng detructering để hứng kq
  const [count,dispatch] = useReducer(reducer,initial);

  //action có dữ liệu phức tạp
  const action = (type:any,actionPayload:any)=>{
    return{
      type,
      actionPayload
    }
  }
  //hàm sử lý tăng giảm
  const increase = ()=>{
    dispatch(action("Increase",1))
  }

  const decrease = ()=>{
    dispatch(action("Decrease",1))
  }
  return (
    <div>UseReducer
      {/*
        Là 1 hook sinh ra để quản lý state phức tạp khi muốn quản lý state thg dùng useState (quản lý những state đơn giản)
        +, những gì useState làm được thì UseReducer cũng làm được nhưng sử lý phức tạp hơn
        +, tiền đề để học redux (thư viện giúp tạo kho chứa dữ liệu)
        
        1/ Các hoạt động
        Là 1 hook để dùng
        b1:import
        b2: useReducer() 
          nhận vào 2 tham số
          1.hàm reducer
          2.giá trị khởi tạo
          đối với những action có kiểu dữ liệu phức tạp nên tạo ra những function
       */}

       <p>giá trị count {count}</p>
       <button onClick={increase}>tăng</button>
       <button onClick={decrease}>giảm</button>
    </div>
  )
}
