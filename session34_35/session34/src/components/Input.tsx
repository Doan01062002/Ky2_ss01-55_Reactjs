import React, { useState } from 'react'

interface Users{
    name:string
    id:number
    email:string
}
export default function Input() {
    const [name,setName] = useState<string>("")
    const [user,setUser] = useState<Users>({
        name:"",
        id:1,
        email:""
    }
    )

    const handleChange = (e:React.ChangeEvent<HTMLInputElement>)=>{
        setName(e.target.value)
        let name = e.target.name
        let value = e.target.value

        setUser({...user,[name]:value})
    }

    console.log(user);
    
  return (
    <div>Input
        <label htmlFor="">UserName</label>
        <input onChange={handleChange} value={name} name='name' type="text" />

        <br />
        <label htmlFor="">email</label>
        <input onChange={handleChange} type="email" name='email' />
    </div>
  )
}
