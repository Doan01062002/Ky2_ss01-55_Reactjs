import React, { useState } from 'react'

interface User{
    userName:string
    email:string
}

export default function Funtion() {

    // const [userName,setUserName] = useState<string>("")
    // const [email,setEmail] = useState<string>("");

    //
    const [user,setUser] = useState<User>({
        userName:"",
        email:""
    })

    //hàm sử lý khi click
    const handleClick = ()=>{
        console.log("hello");
        
    }

    //gọi hàm theo kiểu truyền tham số
    const handleDelete = (userID:any)=>{
        console.log(userID);
        
    }

    //khai báo hàm register
    const register = ()=>{
        console.log("hàm register", user);
        
    }

    // //khai báo hàm handleChange
    // const handleChange = (e:React.ChangeEvent<HTMLInputElement>)=>{
    //     // console.log(e.target.value);
    //     setUserName(e.target.value)
    //     setEmail(e.target.value)
        
    // }

    const handleChange = (e:React.ChangeEvent<HTMLInputElement>)=>{
        let name = e.target.name
        let value = e.target.value
        setUser({
            ...user,
            [name]:value,
        })

    }
  return (
    <div>Funtion
        <p onClick={()=>handleDelete(5)}>Hoa</p>
        <button onClick={handleClick}>click</button>

        <label htmlFor=""> UserName </label>
        <input name='userName' onChange={handleChange} type="text" />

        <label htmlFor="">Email</label>
        <input name='email' onChange={handleChange} type="text" />

        <button onClick={register}>register</button>
    </div>
  )
}
