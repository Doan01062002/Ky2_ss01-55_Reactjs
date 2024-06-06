import React, { useEffect, useRef, useState } from 'react'

export default function UseRef() {
    const [count,setCount] = useState<number>(0)
    const forcusInput = useRef<HTMLInputElement>(null)

    const useRef1 = useRef(0);
    console.log("useRef", useRef1);
    
    let index = 0;

    const handleClick = ()=>{
        index++;
        setCount(count+1)

        useRef1.current = useRef1.current+1
    }

    useEffect(()=>{
        forcusInput.current?.focus()
    })

    console.log("giá trị index", index);
    
  return (
    <div>UseRef
        {/*
            Hook do react cung cấp
            Cách dùng import vào dùng 
            kết quả trả về của useRef là một đối tượng
            và trong đối tượng đó có một thuộc tính mặc định là current

            Nó có 2 cách dùng chính
            1. khi mỗi lần component re-render thì nó không tạo ra 1 referenttype mà vẫn dữ nguyên giá trị referent ban đầu
            2. giúp mặc định focus vào ô input mà mình muốn
         */}
         <label htmlFor="">nhập email</label>
         <input ref={forcusInput} type="text" /><br />
         <label htmlFor="">nhập password</label>
         <input type="text" />
         <button>login</button>

         <p>count:{count}</p>
         <button onClick={handleClick}>click</button>
    </div>
  )
}
